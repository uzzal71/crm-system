import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { parse } from 'csv-parse';
import * as fs from 'fs';
import { Model } from 'mongoose';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './schemas/campaign.schema';
import { Recipient } from './schemas/recipient.schema';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name)
    private CampaignModel: Model<Campaign>,
    @InjectModel(Recipient.name)
    private RecipientModel: Model<Recipient>,
  ) {}

  async create(createCampaignDto: any, file: Express.Multer.File) {
    try {
      // Save campaign to database
      const campaign = await new this.CampaignModel(createCampaignDto).save();

      // Parse the CSV file
      const recipients = [];
      const fileStream = fs.createReadStream(file.path);
      const parser = fileStream.pipe(parse({ columns: true }));

      // Loop through each CSV record and prepare recipient data
      for await (const record of parser) {
        if (record.address) {
          // Ensure 'address' field is present in the CSV
          const recipient = new this.RecipientModel({
            address: record.address,
            campaign: campaign._id,
            status: 'wait', // Default status
          });

          // Save each recipient to the database
          recipients.push(recipient);
        } else {
          console.warn(
            `Skipping record with missing address: ${JSON.stringify(record)}`,
          );
        }
      }

      if (recipients.length > 0) {
        const savedRecipients =
          await this.RecipientModel.insertMany(recipients);
        const recipientIds = savedRecipients.map((recipient) => recipient._id);
        campaign.recipients = recipientIds;
        await campaign.save();
      } else {
        console.warn('No recipients found in CSV file.');
      }

      return { message: 'Campaign created successfully', campaign };
    } catch (error) {
      console.error('Error creating campaign:', error);
      throw new Error('Failed to create campaign. Please try again.');
    }
  }

  async findAll() {
    return this.CampaignModel.find().exec();
  }

  findOne(id: string) {
    return this.CampaignModel.findOne({ _id: id })
      .populate('recipients')
      .exec();
  }

  update(id: string, updateCampaignDto: UpdateCampaignDto) {
    console.log(updateCampaignDto);
    return `This action updates a #${id} campaign`;
  }

  remove(id: string) {
    return `This action removes a #${id} campaign`;
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { Recipient, RecipientSchema } from './schemas/recipient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Campaign.name,
        schema: CampaignSchema,
      },
      {
        name: Recipient.name,
        schema: RecipientSchema,
      },
    ]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}

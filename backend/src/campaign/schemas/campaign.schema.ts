import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Recipient } from './recipient.schema';

@Schema({ timestamps: true })
export class Campaign {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  scheduleTime: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipient' }] })
  recipients: Recipient[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

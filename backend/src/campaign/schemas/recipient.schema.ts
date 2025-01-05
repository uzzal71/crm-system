import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Campaign } from './campaign.schema';

export type RecipientStatus = 'wait' | 'sent' | 'failed' | 'opened';

@Schema({ timestamps: true })
export class Recipient {
  @Prop({ required: true })
  address: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' })
  campaign: Campaign;

  @Prop({
    type: String,
    enum: ['wait', 'sent', 'failed', 'opened'],
    default: 'wait',
  })
  status: RecipientStatus;
}

export const RecipientSchema = SchemaFactory.createForClass(Recipient);

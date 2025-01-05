import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { CreateCampaignDto } from './create-campaign.dto';

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {
  @IsOptional()
  @IsString()
  recipient?: string;

  @IsOptional()
  @IsDate()
  scheduleTime?: Date;
}

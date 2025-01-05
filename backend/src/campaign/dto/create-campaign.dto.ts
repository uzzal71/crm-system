import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  recipient: any;

  @IsDateString()
  @IsNotEmpty()
  scheduleTime: Date | string;
}

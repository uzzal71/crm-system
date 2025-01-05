import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from 'src/guards/auth.guard';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@UseGuards(AuthGuard)
@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('recipient', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}-${file.originalname}`);
        },
      }),
    }),
  )
  async create(
    @Body() createCampaignDto: CreateCampaignDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.campaignService.create(createCampaignDto, file);
  }

  @Get()
  async findAll() {
    return await this.campaignService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.campaignService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignService.remove(id);
  }
}

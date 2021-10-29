import { Controller, Get, Post, Query } from '@nestjs/common';
import { Photo } from 'src/database/entities/photo.entity';
import { PaginationDto } from 'src/dtos/Pagination.dto';
import { PaginatedPhotosResultDto } from 'src/dtos/PaginationPhotoResult.dto';
import { PhotoService } from 'src/service/photo.service';
@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getPhotos(@Query() paginationDto: PaginationDto): Promise<PaginatedPhotosResultDto> {
    paginationDto.page = Number(paginationDto.page);
    paginationDto.limit = Number(paginationDto.limit);

    return this.photoService.findAll({
      ...paginationDto,
      limit: paginationDto.limit > 20000 ? 20000 : paginationDto.limit 
    })
  }

  @Post()
 postPhotos(): Promise<void> {
    return this.photoService.insertAll();
  }
}
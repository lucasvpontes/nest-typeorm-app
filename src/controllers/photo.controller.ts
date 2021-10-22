import { Controller, Get, Post } from '@nestjs/common';
import { Photo } from 'src/database/entities/photo.entity';
import { PhotoService } from 'src/service/photo.service';
@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getPhotos(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
 postPhotos(): Promise<void> {
    return this.photoService.insertAll();
  }
}
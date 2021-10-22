import { Module } from '@nestjs/common';
import { PhotoController } from 'src/controllers/photo.controller';
import { photoProviders } from 'src/database/providers/photo.provider';
import { userProviders } from 'src/database/providers/user.repository';
import { PhotoService } from 'src/service/photo.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [  ...photoProviders, 
                ...userProviders, 
                PhotoService],
})
export class PhotoModule {}

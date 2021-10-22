import { Injectable, Inject } from '@nestjs/common';
import { Photo } from 'src/database/entities/photo.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Photo[]> {
    await this.userRepository.save({
      name: 'John',
  });

    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: 1
    });

    await this.photoRepository.save({
        name: 'Photo2.jpg',
        description: 'Just a photo',
        filename: 'filename2.jpg',
        views: 10,
        isPublished: false,
        userId: 1,
        id: 2
      });

    return await this.photoRepository.find();
  }

  async insertAll(): Promise<void> {
    await this.userRepository.save({
      name: 'John',
  });

   var quantity = (await this.photoRepository.find()).length;

    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: quantity + 1
    });

    await this.photoRepository.save({
        name: 'Photo2.jpg',
        description: 'Just a photo',
        filename: 'filename2.jpg',
        views: 10,
        isPublished: false,
        userId: 1,
        id: quantity + 2
      });
  }
  
}

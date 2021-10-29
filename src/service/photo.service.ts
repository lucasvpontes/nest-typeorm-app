import { Injectable, Inject } from '@nestjs/common';
import { Photo } from 'src/database/entities/photo.entity';
import { User } from 'src/database/entities/user.entity';
import { PaginationDto } from 'src/dtos/Pagination.dto';
import { PaginatedPhotosResultDto } from 'src/dtos/PaginationPhotoResult.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(paginationDto: PaginationDto): Promise<PaginatedPhotosResultDto> {
    const chunk = 3;
    const totalCount = await this.photoRepository.count()
    const numberOfRounds = Math.ceil(20/chunk);
    var photo;

    for (var index = 1; index <= numberOfRounds; index++) {
      const skippedItems = (index - 1) * chunk;
      photo = await this.photoRepository.createQueryBuilder()
      .orderBy('id', "ASC")
      .offset(skippedItems)
      .limit(chunk)
      .getMany()
      console.log("=============================================================================");
      console.log(photo);
      console.log("=============================================================================");
    }

    return {
      totalCount,
      page: paginationDto.page,
      limit: paginationDto.limit,
      data: photo
    }
  }

  async insertAll(): Promise<void> {

    var quantity = (await this.photoRepository.find()).length;

    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
    await this.photoRepository.save({
      name: 'Photo1.jpg',
      description: 'Just a photo',
      filename: 'filename.jpg',
      views: 5,
      isPublished: true,
      userId: 1,
      id: ++quantity,
    });
  }
}

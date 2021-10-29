import { Photo } from "src/database/entities/photo.entity"

export class PaginatedPhotosResultDto {
  data: Photo[]
  page: number
  limit: number
  totalCount: number
}
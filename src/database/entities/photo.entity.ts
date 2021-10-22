import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: "userId" })
  public user!: User;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({nullable: true})
  description?: string;

  @Column()
  price: number;

  @Column()
  size: string;

  @Column()
  image: string;
}

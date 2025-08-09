import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  // @IsNumber()
  @ApiProperty()
  @IsNumberString()
  price: number;

  @ApiProperty()
  @IsString()
  size: string;
}

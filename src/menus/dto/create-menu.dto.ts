import { Restaurant } from '../../restaurants/entities/restaurant.entity';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  nom: string;
  @IsString()
  description: string;
  @IsNumber()
  prix: number;
  @IsObject()
  restaurant: Restaurant
}

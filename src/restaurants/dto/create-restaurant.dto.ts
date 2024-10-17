import { Menu } from '../../menus/entities/menu.entity';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  nom: string;
  @IsString()
  description: string;
  @IsString()
  adresse: string;
  @IsObject({
    each: true
  })
  menus: Menu[]
  @IsNumber()
  note: number;
  @IsString()
  horaires: string;
}

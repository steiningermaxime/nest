import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';
import { IsNumber, IsObject } from 'class-validator';

export class CreateOrderDto {
  @IsObject({
    each: true
  })
  menus: Menu[];
  @IsNumber()
  prix: number;
  @IsObject()
  user: User;
}

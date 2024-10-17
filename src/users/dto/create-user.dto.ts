import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nom: string;
  @IsString()
  adresse: string;
  @IsString()
  telephone: string;
}

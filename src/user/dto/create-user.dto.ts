import { IsNotEmpty, IsEmail, MinLength, IsDateString } from 'class-validator';

export class CreateUserDto {
     @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;  // You can also keep this as Date if your entity expects Date
}


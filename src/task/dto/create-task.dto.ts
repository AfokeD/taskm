import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}



import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    age: number;

}
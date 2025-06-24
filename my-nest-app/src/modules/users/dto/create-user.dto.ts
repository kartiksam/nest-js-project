import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    name: string;



    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    age: number;

}
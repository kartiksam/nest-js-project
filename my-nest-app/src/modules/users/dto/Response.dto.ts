import { ApiProperty } from "@nestjs/swagger";


export class ResponseUserDto {

    @ApiProperty()
    name: string;

}
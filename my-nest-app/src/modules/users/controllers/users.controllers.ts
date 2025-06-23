import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersServices } from "../services/users.services";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller('users')
export class UsersControllers {

    constructor(private readonly usersServices: UsersServices) { }

    @Post("/create")
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersServices.create(createUserDto);
    }

    @Get("/get")
    getData() {
        return this.usersServices.getData();
    }

}

import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UsersServices } from "../services/users.services";
import { CreateUserDto } from "../dto/create-user.dto";
import { ApiResponse } from "@nestjs/swagger";
import { ResponseUserDto } from "../dto/Response.dto";
import { diskStorage } from "multer";
import { extname } from 'path';
import { Express } from 'express';

import { File as MulterFile } from 'multer';
import { User } from "../Schema/user.schema";

@Controller('users')
export class UsersControllers {

    constructor(private readonly usersServices: UsersServices) { }

    @Post("/create")
    @ApiResponse({ status: 201, description: "User Created", type: ResponseUserDto })
    async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUserDto> {
        const user = await this.usersServices.create(createUserDto);
        return { name: user.name } as ResponseUserDto;

    }

    @Get("/get")
    getData() {
        return this.usersServices.getData();
    }

    @Get("/:id")
    async getDataById(@Param('id') id: string): Promise<User> {
        return this.usersServices.getDataById(id);
    }

    @Delete("/:id")
    async deleteById(@Param('id') id: string){
        return this.usersServices.deleteById(id);
        }
    




    // file upload logic
    @Post("/upload")
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: "./uploads",
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => Math.floor(
                    Math.random() * 16).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);

            },
        }),
    }))

    uploadFile(@UploadedFile() file: MulterFile) {
        return {
            message: 'File uploaded successfully',
            filename: file.filename,
        };
    }
}

















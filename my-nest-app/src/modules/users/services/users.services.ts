import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../Schema/user.schema";
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersServices {

    async deleteById(id: string) {
        return await this.userModel.findOneAndDelete({ _id: id }).exec();
    }

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    // private users: any[] = [];

    async create(dto: CreateUserDto): Promise<User> {
        // const user = { id: Date.now(), ...dto };
        // this.users.push(user);
        // return user;

        const createdUser = new this.userModel(dto);
        return createdUser.save();

    }

    async getData(): Promise<User[]> {
        // return this.users;
        return this.userModel.find().exec();
    }


    async getDataById(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException("with this id");
        }
        return user;
    }







}
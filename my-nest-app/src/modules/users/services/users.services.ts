import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../Schema/user.schema";
@Injectable()
export class UsersServices {

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




}
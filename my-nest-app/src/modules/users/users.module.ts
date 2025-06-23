import { Module } from "@nestjs/common";
import { UsersControllers } from "./controllers/users.controllers";
import { UsersServices } from "./services/users.services";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./Schema/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersControllers],
    providers: [UsersServices],
})

export class UsersModules { }
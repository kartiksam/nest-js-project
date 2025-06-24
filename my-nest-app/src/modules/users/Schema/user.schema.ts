import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    age: number;

    @Prop()
    phoneNumber: number;

    @Prop()
    gender: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
import { Injectable } from '@nestjs/common';
import {FilterQuery, Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {UserDocument, User} from './user.schema';
import { UserDto } from './userDto.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findUserById(id: number): Promise<User> {
        return await this.userModel.findById({_id: id});
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email} as FilterQuery<User>);
    }

    async createUser(userDto: UserDto): Promise<User> {
        const newUser = new this.userModel({...userDto});
        return await newUser.save();
    }
}

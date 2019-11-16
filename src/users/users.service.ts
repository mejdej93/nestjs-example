import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { UserDto } from './userDto.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL')
        private readonly userModel: Model<User>,
    ) {
    }

    async getAllUsers() :Promise<User[]> {
        return await this.userModel.find();
    }

    async getUserById(id: number): Promise<User> {
        return await this.userModel.findById({_id: id});
    }

    async createUser(userDto: UserDto): Promise<User> {
        const newUser = new this.userModel({...userDto});
        return await newUser.save();
    }
}

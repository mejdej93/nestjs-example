import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.interface';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user: User = await this.usersService.findUserByEmail(email);
        if (user && user.password === password) {
            const {email, ...result} = user;
            return result;
        }
        return null;
    }
}
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import {User} from '../users/user.schema';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {
    }

    async validateUser(userEmail: string, userPassword: string): Promise<any> {
        const user: User = await this.usersService.findUserByEmail(userEmail);
        if (user && user.password === userPassword) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {email: user.email, sub: user.userId};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

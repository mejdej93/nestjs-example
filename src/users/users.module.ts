import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...userProviders],
})
export class UsersModule {
}

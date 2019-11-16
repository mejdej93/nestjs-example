import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './userDto.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    getUser(@Param('id') id) {
        return this.userService.getUserById(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto);
    }
}

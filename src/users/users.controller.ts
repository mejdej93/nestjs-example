import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UserDto } from './userDto.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUser(@Param('id') id) {
        return this.userService.findUserById(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto);
    }
}

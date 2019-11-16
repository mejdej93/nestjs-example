import { IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    firstName: String;

    @IsNotEmpty()
    lastName: String;

    @IsNotEmpty()
    email: String;
}

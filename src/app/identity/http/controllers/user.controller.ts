import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
    Res,
} from "@nestjs/common";
import {
    Request,
    Response
} from 'express';
import {
    UserService,
} from "../../services";
import {
    ApiBearerAuth,
    ApiTags,
} from "@nestjs/swagger";
import {
    UserCreateDTO,
    UserUpdateDTO
} from "../../dtos";
import { UserEntity } from "../../entities";
import { UserDeleteDTO } from "../../dtos/user_dto/user.delete.dto";
import { UserQueryDTO } from "../../dtos/user_dto/user.query.dto";

@ApiTags('Identity')
@ApiBearerAuth()
@Controller('v1/users')
export class UserController {
    constructor(
        private userService: UserService,
    ) { };

    @Post()
    async createUser(
        @Body()
        createUserDTO: UserCreateDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const user = await this.userService.create(createUserDTO, UserEntity);
            return res.status(200).json({ user });
        } catch (error: any) {
            console.error();
            return res.send(error);
        }
    };  

    @Put(':id')
    async updateUser(
        @Body()
        updateUserDTO: UserUpdateDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            console.table(updateUserDTO);
            const user = await this.userService.update(updateUserDTO.id, updateUserDTO);
            return res.status(200).json(user);
        } catch (error: any) {
            console.error();
            return res.send(error);
        }
    };

    @Delete(':id')
    async deleteUser (
        @Param()
        deleteUserDTO: UserDeleteDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            await this.userService.delete(deleteUserDTO.id);
            return res.status(200).send('Sucess');
        } catch (error: any) {
            console.error();
            return res.send(error);
        }
    };

    @Get()
    async findUsers (
        @Query()
        queryUserDTO: UserQueryDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const user = await this.userService.find(queryUserDTO);
            return res.status(200).json(user);
        } catch (error: any) {
            console.error();
            return res.send(error);
        }
    };
};
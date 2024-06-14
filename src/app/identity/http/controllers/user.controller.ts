import {
    Body,
    Controller,
    Post,
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
    UserCreateDTO
} from "../../dtos";
import { UserEntity } from "../../entities";

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
};
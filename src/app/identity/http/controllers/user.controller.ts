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
    UsePipes,
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
import { UserEntity } from "../../entities";
import { JoiValidationPipe } from "src/pipes";
import {
    UserCreateSchema,
    UserDeleteSchema,
    UserQuerySchema,
    UserUpdateSchema
} from "../../schemas";
import { UserMapper } from "../../mappers";
import _ from "lodash";
import { ExceptionFilterHelper } from "src/helpers";
import { 
    UserCreateDTO,
    UserDeleteDTO, 
    UserQueryDTO, 
    UserUpdateDTO
} from "../../dtos/user_dto";

@ApiTags('Identity')
@ApiBearerAuth()
@Controller('v1/users')
export class UserController {
    constructor(
        private userService: UserService,
    ) { };

    /**
     * 
     * @param createUserDTO 
     * @param req 
     * @param res 
     * @returns 
     */
    @Post()
    @UsePipes(new JoiValidationPipe(UserCreateSchema))
    async createUser(
        @Body()
        createUserDTO: UserCreateDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const { credentials } = req.body;

            const userCreateDTOFilter: UserCreateDTO = UserMapper.toUserCreateDTOMapper({
                ...createUserDTO,
                credentials
            });
            const user = await this.userService.create(userCreateDTOFilter, UserEntity);

            return res.status(200).json({ user });
        } catch (error: any) {
            return res.json(ExceptionFilterHelper.HttpException(error));
        }
    };

    /**
     * 
     * @param updateUserDTO 
     * @param req 
     * @param res 
     * @returns 
     */
    @Put(':id')
    @UsePipes(new JoiValidationPipe(UserUpdateSchema))
    async updateUser(
        @Body()
        updateUserDTO: UserUpdateDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const { id, credentials } = req.body;

            const updateUserDTOFilter: UserCreateDTO = UserMapper.toUserCreateDTOMapper({
                ...updateUserDTO,
                credentials
            });
            await this.userService.update(id, updateUserDTOFilter);

            return res.json(ExceptionFilterHelper.Ok());
        } catch (error: any) {
            console.error();
            return res.json(ExceptionFilterHelper.HttpException(error));
        }
    };

    /**
     * 
     * @param deleteUserDTO 
     * @param req 
     * @param res 
     * @returns 
     */
    @Delete(':id')
    @UsePipes(new JoiValidationPipe(UserDeleteSchema))
    async deleteUser(
        @Param()
        deleteUserDTO: UserDeleteDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const { credentials } = req.body;

            const deleteUserDTOFilter: UserDeleteDTO = UserMapper.toUserDeleteDTOMapper({
                ...deleteUserDTO,
                credentials
            });

            await this.userService.delete(deleteUserDTOFilter.id);

            return res.json(ExceptionFilterHelper.Ok());
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * 
     * @param queryUserDTO 
     * @param req 
     * @param res 
     * @returns 
     */
    @Get()
    @UsePipes(new JoiValidationPipe(UserQuerySchema))
    async findUsers(
        @Query()
        queryUserDTO: UserQueryDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            const { credentials } = req.body;

            const queryUserDTOFilter: Partial<UserQueryDTO> = UserMapper.toUserQueryDTOMapper({
                ...queryUserDTO,
                credentials
            });
            console.log(queryUserDTOFilter);
            const users = await this.userService.find({
                ...queryUserDTOFilter
            });

            return res.status(200).json(users);
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };
};

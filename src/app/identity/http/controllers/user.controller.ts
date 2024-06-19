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
    UsePipes,
} from "@nestjs/common";
import {
    Request
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
import { 
    BaseParamDTO 
} from "src/dtos";

@ApiTags('Identity')
@ApiBearerAuth()
@Controller('v1/users')
export class UserController {
    constructor(
        private userService: UserService,
    ) { };

    /**
     * Create new user in application
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
    ) {
        try {
            const { credentials } = req.body;

            const userCreateDTOFilter: UserCreateDTO = UserMapper.toUserCreateDTOMapper({
                ...createUserDTO,
                credentials
            });
            const user = await this.userService.create(userCreateDTOFilter, UserEntity);

            return user;
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Update user in application
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
        @Param()
        baseParam: BaseParamDTO,
        @Req()
        req: Request,
    ) {
        try {
            const { credentials } = req.body;
            const id = baseParam.id;

            const updateUserDTOFilter: UserCreateDTO = UserMapper.toUserUpdateDTOMapper({
                id,
                ...updateUserDTO,
                credentials
            });
            await this.userService.update(id, updateUserDTOFilter);

            return ExceptionFilterHelper.Ok();
        } catch (error: any) {
            console.error();
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Delete user in application
     * @param deleteUserDTO 
     * @param req 
     * @param res 
     * @returns 
     */
    @Delete(':id')
    @UsePipes(new JoiValidationPipe(UserDeleteSchema))
    async deleteUser(
        @Param()
        baseParam: BaseParamDTO,
        @Req()
        req: Request,
    ) {
        try {
            const { credentials } = req.body;
            const id = baseParam.id;

            const deleteUserDTOFilter: UserDeleteDTO = UserMapper.toUserDeleteDTOMapper({
                id,
                credentials
            });

            await this.userService.delete(id);

            return ExceptionFilterHelper.Ok();
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Find user in application
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

            return users;
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };
};

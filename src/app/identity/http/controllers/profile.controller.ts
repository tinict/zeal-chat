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
    ProfileService
} from "../../services";
import {
    ApiBearerAuth,
    ApiTags,
} from "@nestjs/swagger";
import { 
    ProfileEntity 
} from "../../entities";
import { ProfileCreateDTO } from "../../dtos/profile_dto";

@ApiTags('Profile')
@ApiBearerAuth()
@Controller('v1/profiles')
export class ProfileController {
    constructor(
        private profileService: ProfileService,
    ) { };

    @Post()
    async createProfile(
        @Body()
        profileCreateDTO: ProfileCreateDTO,
        @Req()
        req: Request,
        @Res()
        res: Response,
    ) {
        try {
            console.table(profileCreateDTO);
            const profile = await this.profileService.create(profileCreateDTO, ProfileEntity);
            return res.status(200).json({ profile });
        } catch (error: any) {
            console.error();
            return res.send(error);
        }
    };
};
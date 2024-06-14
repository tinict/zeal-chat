import { Injectable } from "@nestjs/common";
import { ProfileEntity } from "../entities";
import { Repository } from "typeorm";
import { BaseService } from "src/services";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProfileService extends BaseService<ProfileEntity> {
    constructor(
        @InjectRepository(ProfileEntity)
        private readonly profileRepository: Repository<ProfileEntity>
    ) {
        super(profileRepository);
    };
};
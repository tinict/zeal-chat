import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities";
import { Repository } from "typeorm";
import { BaseService } from "src/services";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService extends BaseService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super(userRepository);
    };
};

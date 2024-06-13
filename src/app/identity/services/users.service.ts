import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities";
import { Repository } from "typeorm";
import { BaseService } from "src/services/base.service";

@Injectable()
export class UserService implements BaseService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {};

    create: () => Promise<{ a: string; }>;

    /**
     * action: Create record
     */
    // create = async (
    //     // body: userModel
    // ) => {

    // };

    /**
     * action: Get all
     */
    getAll = async () => {

    };

    /**
     * action: Delete
     */
    delete = async () => {

    };

    /**
     * action: Update
     */
    update = async () => {

    };
};
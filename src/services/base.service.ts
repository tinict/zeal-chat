import { InjectRepository } from "@nestjs/typeorm";
import { CommonEntity } from "src/entities";
import { Repository } from "typeorm";

export abstract class BaseService {
    // constructor(
    //     @InjectRepository(CommonEntity)
    //     commonRepository: Repository<CommonEntity>
    // ) {};

    /**
     * action: Create record
     */
    create = async () => {
        return {
            a: "hello"
        }
    };

    
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
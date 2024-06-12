import { CommonEntity } from "src/entities";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserEntity } from "../users.entity";
import { ResourceEntity } from "./resources.entity";

/**
 * Table: User Resource
 */
@Entity({ name: 'tbl_user_resources' })
export class UserResourceEntity extends CommonEntity {
    /**
     * user_resource_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'user_resource_id',
    })
    UserResourceId: string;

    @ManyToOne(() => UserEntity)
    @JoinColumn({
        name: 'user_id',
    })
    User: UserEntity;

    @ManyToOne(() => ResourceEntity)
    @JoinColumn({
        name: 'resource_id',
    })
    Resource: ResourceEntity;
};
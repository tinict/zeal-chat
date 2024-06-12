import { CommonEntity } from "src/entities";
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserResourceEntity } from "./user_resoures.entity";
import { ModelResourceEntity } from "./model_resoures.entity";

/**
 * Table: resources
 */
@Entity({ name: 'tbl_resources' })
export class ResourceEntity extends CommonEntity {
    /**
     * resoure_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'resource_id',
    })
    ResourceId: string;

    /**
     * resource_type
     */
    @Column({
        name: 'resource_type',
        type: 'varchar',
        length: 250,
    })
    ResourceType: string;

    /**
     * resource_version
     */
    @Column({
        name: 'resource_version',
        type: 'varchar',
        length: 10,
    })
    ResourceVersion: string;

    @OneToMany(() => UserResourceEntity, (userResource: UserResourceEntity) => userResource.Resource)
    UserResources: UserResourceEntity[];

    @OneToMany(() => ModelResourceEntity, (modelResource: ModelResourceEntity) => modelResource.Resource)
    ModelResources: ModelResourceEntity[];
};

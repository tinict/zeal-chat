import { CommonEntity } from "src/entities";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { ResourceEntity } from "./resources.entity";
import { ModelEntity } from "../models.entity";

/**
 * Table: Model Resource
 */
@Entity({ name: 'tbl_model_resources' })
export class ModelResourceEntity extends CommonEntity {
    /**
     * model_resource_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'model_resource_id',
    })
    ModelResourceId: string;

    @ManyToOne(() => ResourceEntity)
    @JoinColumn({
        name: 'resource_id',
    })
    Resource: ResourceEntity;

    @ManyToOne(() => ModelEntity)
    @JoinColumn({
        name: 'model_id',
    })
    Model: ModelEntity;
};
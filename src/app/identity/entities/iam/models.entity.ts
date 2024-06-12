import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { UserEntity } from './users.entity';
import { CommonEntity } from 'src/entities';
import { RoleModelEntity } from './role_models.entity';
import { ModelPermissionEntity } from './model_permissions.entity';
import { ModelResourceEntity } from './access-control/model_resoures.entity';

/**
 * Table: tbl_models
 */
@Entity({ name: 'tbl_models' })
export class ModelEntity extends CommonEntity {
    /**
     * model_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'model_id'
    })
    ModelId: string;

    /**
     * model_type
     */
    @Column({
        name: 'model_type',
        type: 'varchar',
        length: 200,
    })
    ModelType: string;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    User: UserEntity;

    @OneToMany(() => RoleModelEntity, (RoleModel) => RoleModel.Model)
    RoleModels: RoleModelEntity[];

    @OneToMany(() => ModelPermissionEntity, (ModelPermission) => ModelPermission.Model)
    ModelPermissions: ModelPermissionEntity[];

    @OneToMany(
        () => ModelResourceEntity, 
        (modelResourceEntity: ModelResourceEntity) => modelResourceEntity.Model,
        {
            nullable: true,
        },
    )
    ModelResources: ModelResourceEntity[];
};

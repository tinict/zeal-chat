import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { AccountEntity } from './accounts.entity';
import { ModelPermissionEntity } from './model_permissions.entity';
import { RoleModelEntity } from './role_models.entity';
import { CommonEntity } from 'src/entities';

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

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: 'account_id' })
    Account: AccountEntity;

    @OneToMany(() => RoleModelEntity, (RoleModel) => RoleModel.Model)
    RoleModels: RoleModelEntity[];

    @OneToMany(() => ModelPermissionEntity, (ModelPermission) => ModelPermission.Model)
    ModelPermissions: ModelPermissionEntity[];
};

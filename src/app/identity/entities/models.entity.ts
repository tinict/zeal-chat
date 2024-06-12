import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { AccountEntity } from './accounts.entity';
import { ModelPermissionEntity } from './model_permissions.entity';
import { RoleModelEntity } from './role_models.entity';
import { StatusEntity } from '../constants/enum';

/**
 * Table: tbl_models
 */
@Entity({ name: 'tbl_models' })
export class ModelEntity extends BaseEntity {
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

    /**
     * status
     */
    @Column({
        name: 'status',
        type: 'enum',
        enum: StatusEntity,
    })
    status: StatusEntity;

    /**
     * created_at
     */
    @CreateDateColumn({ 
        name: 'created_at',
        type: 'timestamp',
    })
    CreatedAt: Date;

    /**
     * updated_at
     */
    @UpdateDateColumn({ 
        name: 'updated_at',
        type: 'timestamp',
    })
    UpdatedAt: Date;

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: 'account_id' })
    Account: AccountEntity;

    @OneToMany(() => RoleModelEntity, (RoleModel) => RoleModel.Model)
    RoleModels: RoleModelEntity[];

    @OneToMany(() => ModelPermissionEntity, (ModelPermission) => ModelPermission.Model)
    ModelPermissions: ModelPermissionEntity[];
};

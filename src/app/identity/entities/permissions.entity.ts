import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { ModelPermissionEntity } from './model_permissions.entity';
import { RolePermissionEntity } from './role_permissions.entity';

/**
 * Table: tbl_permissions
 */
@Entity({ name: 'tbl_permissions' })
export class PermissionEntity extends BaseEntity {
    /**
     * permission_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'permission_id',
    })
    PermissionId: string;

    /**
     * permission_type
     */
    @Column({
        name: 'permission_type',
        type: 'varchar',
        length: 250,
    })
    PermissionType: string;

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

    @OneToMany(() => RolePermissionEntity, (RolePermission) => RolePermission.Permission)
    RolePermissions: RolePermissionEntity[];

    @OneToMany(() => ModelPermissionEntity, (ModelPermission) => ModelPermission.Permission)
    ModelPermissions: ModelPermissionEntity[];
};

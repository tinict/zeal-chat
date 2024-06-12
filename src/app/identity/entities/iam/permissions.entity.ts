import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { CommonEntity } from 'src/entities';
import { ModelPermissionEntity } from './model_permissions.entity';
import { RolePermissionEntity } from './role_permissions.entity';

/**
 * Table: tbl_permissions
 */
@Entity({ name: 'tbl_permissions' })
export class PermissionEntity extends CommonEntity {
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

    @OneToMany(() => RolePermissionEntity, (RolePermission) => RolePermission.Permission)
    RolePermissions: RolePermissionEntity[];

    @OneToMany(() => ModelPermissionEntity, (ModelPermission) => ModelPermission.Permission)
    ModelPermissions: ModelPermissionEntity[];
};

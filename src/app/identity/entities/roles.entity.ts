import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { RolePermissionEntity } from "./role_permissions.entity";
import { RoleModelEntity } from "./role_models.entity";
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_roles
 */
@Entity({ name: 'tbl_roles' })
export class RoleEntity extends CommonEntity {
    /**
     * role_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'role_id',
    })
    RoleId: string;

    /**
     * role_type
     */
    @Column({
        name: 'role_type',
        type: 'varchar',
        length: 250
    })
    RoleType: string;

    @OneToMany(() => RoleModelEntity, (RoleModel) => RoleModel.Role)
    RoleModels: RoleModelEntity[];

    @OneToMany(() => RolePermissionEntity, (RolePermission) => RolePermission.Role)
    RolePermissions: RolePermissionEntity[];
};
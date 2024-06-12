import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { RolePermissionEntity } from "./role_permissions.entity";
import { RoleModelEntity } from "./role_models.entity";

/**
 * Table: tbl_roles
 */
@Entity({ name: 'tbl_roles' })
export class RoleEntity {
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

    @OneToMany(() => RoleModelEntity, (RoleModel) => RoleModel.Role)
    RoleModels: RoleModelEntity[];

    @OneToMany(() => RolePermissionEntity, (RolePermission) => RolePermission.Role)
    RolePermissions: RolePermissionEntity[];
};
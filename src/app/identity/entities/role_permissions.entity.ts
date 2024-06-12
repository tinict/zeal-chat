import { 
    CreateDateColumn,
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { RoleEntity } from "./roles.entity";
import { PermissionEntity } from "./permissions.entity";

/**
 * Table: tbl_role_permissions
 */
@Entity({name: 'tbl_role_permissions'})
export class RolePermissionEntity {
    /**
     * role_permission_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'role_permission_id',
    })
    role_permission_id: string;

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

    @OneToMany(() => RoleEntity, (Role) => Role.RolePermissions)
    Role: RoleEntity;

    @OneToMany(() => PermissionEntity, (Permission) => Permission.RolePermissions)
    Permission: PermissionEntity;
};
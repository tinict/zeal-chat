import { 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn,
} from "typeorm";
import { RoleEntity } from "./roles.entity";
import { CommonEntity } from 'src/entities';
import { PermissionEntity } from "./permissions.entity";

/**
 * Table: tbl_role_permissions
 */
@Entity({name: 'tbl_role_permissions'})
export class RolePermissionEntity extends CommonEntity {
    /**
     * role_permission_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'role_permission_id',
    })
    role_permission_id: string;

    @ManyToOne(() => RoleEntity)
    @JoinColumn({
        name: 'role_id'
    })
    Role: RoleEntity;

    @ManyToOne(() => PermissionEntity)
    @JoinColumn({
        name: 'permission_id'
    })
    Permission: PermissionEntity;
};
import { 
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { PermissionEntity } from "./permissions.entity";
import { ModelEntity } from "./models.entity";

/**
 * Table: tbl_model_permissions
 */
@Entity({ name: 'tbl_model_permissions' })
export class ModelPermissionEntity {
    /**
     * model_permission_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'model_permission_id'
    })
    ModelPermissionId: string;

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

    @OneToMany(() => ModelEntity, (Model) => Model.ModelPermissions)
    Model: ModelEntity;

    @OneToMany(() => PermissionEntity, (Permission) => Permission.ModelPermissions)
    Permission: PermissionEntity;
};

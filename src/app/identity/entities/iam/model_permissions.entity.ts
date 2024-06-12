import { 
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn, 
} from "typeorm";
import { PermissionEntity } from "./permissions.entity";
import { CommonEntity } from 'src/entities';
import { ModelEntity } from "./models.entity";

/**
 * Table: tbl_model_permissions
 */
@Entity({ name: 'tbl_model_permissions' })
export class ModelPermissionEntity extends CommonEntity {
    /**
     * model_permission_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'model_permission_id'
    })
    ModelPermissionId: string;

    @ManyToOne(() => ModelEntity)
    @JoinColumn({
        name: 'model_id',
    })
    Model: ModelEntity;

    @ManyToOne(() => PermissionEntity)
    @JoinColumn({
        name: 'permission_id',
    })
    Permission: PermissionEntity;
};

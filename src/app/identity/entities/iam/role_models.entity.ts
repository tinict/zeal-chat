import { 
    Entity, 
    JoinColumn, 
    ManyToOne,  
    PrimaryGeneratedColumn, 
} from "typeorm";
import { RoleEntity } from "./roles.entity";
import { ModelEntity } from "./models.entity";
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_role_models
 */
@Entity({name: 'tbl_role_models'})
export class RoleModelEntity extends CommonEntity {
    /**
     * role_model_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'role_model_id',
    })
    RoleModelId: string;

    @ManyToOne(() => RoleEntity)
    @JoinColumn({
        name: 'role_id'
    })
    Role: RoleEntity;

    @ManyToOne(() => ModelEntity)
    @JoinColumn({
        name: 'model_id'
    })
    Model: ModelEntity;
};
import { 
    CreateDateColumn,
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import { RoleEntity } from "./roles.entity";
import { ModelEntity } from "./models.entity";

/**
 * Table: tbl_role_models
 */
@Entity({name: 'tbl_role_models'})
export class RoleModelEntity {
    /**
     * role_model_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'role_model_id',
    })
    RoleModelId: string;

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
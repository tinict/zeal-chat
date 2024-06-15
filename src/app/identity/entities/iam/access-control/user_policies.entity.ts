import { CommonEntity } from "src/entities";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { PolicyEntity } from "./policies.entity";
import { UserEntity } from "../users.entity";

/**
 * Table: User Policy
 */
@Entity({ name: 'tbl_user_policies' })
export class UserPolicyEntity extends CommonEntity {
    /**
     * user_policy_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'user_policy_id',
    })
    UserPolicyId: string;

    @ManyToOne(() => PolicyEntity)
    @JoinColumn({
        name: 'policy_id',
    })
    Policy: PolicyEntity;

    @ManyToOne(() => UserEntity)  
    @JoinColumn({
        name: 'user_id',
    })
    User: UserEntity;
};
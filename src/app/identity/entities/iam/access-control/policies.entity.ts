import { CommonEntity } from "src/entities";
import { 
    Column,
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn
} from "typeorm";
import { UserPolicyEntity } from "./user_policies.entity";

/**
 * Table: Policies
 */
@Entity({name: 'tbl_policies'})
export class PolicyEntity extends CommonEntity {
    /**
     * policy_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'policy_id'
    })
    PolicyId: string;

    /**
     * policy_url
     */
    @Column({
        name: 'policy_url',
        type: 'varchar',
        length: 320,
    })
    PolicyUrl: string;

    @OneToMany(() => UserPolicyEntity, (userPolicy: UserPolicyEntity) => userPolicy.Policy)
    UserPolicies: UserPolicyEntity[];
};
import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from '../profiles.entity';
import { ModelEntity } from './models.entity';
import { CredentialEntity } from '../credentials.entity';
import { CommonEntity } from 'src/entities';
import { UserPolicyEntity } from './access-control/user_policies.entity';
import { UserResourceEntity } from './access-control/user_resoures.entity';

/**
 * Table: tbl_users
 */
@Entity({ name: 'tbl_users' })
export class UserEntity extends CommonEntity {
    /**
     * user_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'user_id',
    })
    id: string;

    /**
     * username
     */
    @Column({
        type: 'varchar',
        length: 32,
        name: 'username',
        unique: true,
    })
    username: string;

    @OneToOne(() => ProfileEntity, (Profile) => Profile.User)
    Profile: ProfileEntity;

    @OneToOne(() => ModelEntity, (Model) => Model.User)
    Model: ModelEntity;

    @OneToOne(() => CredentialEntity, (Credential) => Credential.User)
    Credential: CredentialEntity;

    @OneToMany(
        () => UserPolicyEntity, 
        (userPolicy: UserPolicyEntity) => userPolicy.Policy,
    )
    userPolicies: UserPolicyEntity[];

    @OneToMany(
        () => UserResourceEntity, 
        (userResource: UserResourceEntity) => userResource.User,
        {
            nullable: true,
        },
    )
    userResources: UserResourceEntity[];
};

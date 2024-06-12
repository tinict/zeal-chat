import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from '../profiles.entity';
import { ModelEntity } from './models.entity';
import { CredentialEntity } from '../credentials.entity';
import { CommonEntity } from 'src/entities';

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
    UserId: string;

    /**
     * username
     */
    @Column({
        type: 'varchar',
        length: 32,
        name: 'username',
    })
    UserName: string;

    @OneToOne(() => ProfileEntity, (Profile) => Profile.User)
    Profile: ProfileEntity;

    @OneToOne(() => ModelEntity, (Model) => Model.User)
    Model: ModelEntity;

    @OneToOne(() => CredentialEntity, (Credential) => Credential.User)
    Credential: CredentialEntity;
};

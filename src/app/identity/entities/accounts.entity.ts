import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from './profiles.entity';
import { ModelEntity } from './models.entity';
import { CredentialEntity } from './credentials.entity';
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_accounts
 */
@Entity({ name: 'tbl_accounts' })
export class AccountEntity extends CommonEntity {
    /**
     * account_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'account_id',
    })
    AccountId: string;

    /**
     * username
     */
    @Column({
        type: 'varchar',
        length: 32,
        name: 'username',
    })
    UserName: string;

    @OneToOne(() => ProfileEntity, (Profile) => Profile.Account)
    Profile: ProfileEntity;

    @OneToOne(() => ModelEntity, (Model) => Model.Account)
    Model: ModelEntity;

    @OneToOne(() => CredentialEntity, (Credential) => Credential.Account)
    Credential: CredentialEntity;
};

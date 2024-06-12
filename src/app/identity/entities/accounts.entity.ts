import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { ProfileEntity } from './profiles.entity';
import { ModelEntity } from './models.entity';
import { CredentialEntity } from './credentials.entity';
import { StatusEntity } from '../constants/enum';

/**
 * Table: tbl_accounts
 */
@Entity({ name: 'tbl_accounts' })
export class AccountEntity extends BaseEntity {
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

    /**
     * created_at
     */
    @CreateDateColumn({ 
        type: 'timestamp',
        name: 'created_at',
    })
    CreatedAt: Date;

    /**
     * updated_at
     */
    @UpdateDateColumn({ 
        type: 'timestamp',
        name: 'update_at',
    })
    UpdatedAt: Date;

    /**
     * status
     */
    @Column({
        type: 'enum',
        enum: StatusEntity,
        name: 'status',
    })
    Status: StatusEntity;

    @OneToOne(() => ProfileEntity, (Profile) => Profile.Account)
    Profile: ProfileEntity;

    @OneToOne(() => ModelEntity, (Model) => Model.Account)
    Model: ModelEntity;

    @OneToOne(() => CredentialEntity, (Credential) => Credential.Account)
    Credential: CredentialEntity;
};

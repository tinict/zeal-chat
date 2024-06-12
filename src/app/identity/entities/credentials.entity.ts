import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { AccountEntity } from "./accounts.entity";
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_credentials
 */
@Entity({ name: "tbl_credentials" })
export class CredentialEntity extends CommonEntity {
    /**
     * credential_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'credential_id',
    })
    CredentialId: string;

    /**
     * password_hash
     */
    @Column({
        name: 'password_hash',
        type: 'varchar',
        length: 250,
    })
    PasswordHash: string;

    /**
     * password_salt
     */
    @Column({
        name: 'password_salt',
        type: 'varchar',
        length: 250,
    })
    PasswordSalt: string;

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: 'account_id' })
    Account: AccountEntity;
};
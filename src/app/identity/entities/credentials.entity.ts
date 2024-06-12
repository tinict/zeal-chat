import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { AccountEntity } from "./accounts.entity";

/**
 * Table: tbl_credentials
 */
@Entity({ name: "tbl_credentials" })
export class CredentialEntity extends BaseEntity {
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

    @OneToOne(() => AccountEntity)
    @JoinColumn({ name: 'account_id' })
    Account: AccountEntity;
};
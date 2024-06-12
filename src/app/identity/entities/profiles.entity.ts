import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn
} from 'typeorm';
import { AccountEntity } from './accounts.entity';
import { Gender } from '../constants/enum';

/**
 * Table: tbl_profiles
 */
@Entity({ name: 'tbl_profiles' })
export class ProfileEntity extends BaseEntity {
    /**
     * profile_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'profile_id',
    })
    ProfileId: string;

    /**
     * family_name
     */
    @Column({
        name: 'family_name',
        type: 'nvarchar',
        length: 35,
    })
    FamilyName: string;

    /**
     * name
     */
    @Column({
        name: 'name',
        type: 'nvarchar',
        length: 50,
    })
    Name: string;

    /**
     * email
     */
    @Column({
        name: 'email',
        type: 'varchar',
        length: 320,
    })
    Email: string;

    /**
     * phone
     */
    @Column({
        name: 'phone',
        type: 'varchar',
        length: 15,
    })
    Phone: string;

    /**
     * url_picture
     */
    @Column({
        name: 'url_picture',
        type: 'varchar',
        length: 320,
    })
    UrlPicture: string;

    /**
     * gender
     */
    @Column({
        name: 'gender',
        type: 'enum',
        enum: Gender,
    })
    Gender: Gender;

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

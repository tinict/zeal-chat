import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { UserEntity } from './iam/users.entity';
import { Gender } from '../constants/enum';
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_profiles
 */
@Entity({ name: 'tbl_profiles' })
export class ProfileEntity extends CommonEntity {
    /**
     * profile_id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'profile_id',
    })
    profile_id: string;

    /**
     * family_name
     */
    @Column({
        name: 'family_name',
        type: 'nvarchar',
        length: 35,
    })
    family_name: string;

    /**
     * name
     */
    @Column({
        name: 'name',
        type: 'nvarchar',
        length: 50,
    })
    name: string;

    /**
     * email
     */
    @Column({
        name: 'email',
        type: 'varchar',
        length: 320,
    })
    email: string;

    /**
     * phone
     */
    @Column({
        name: 'phone',
        type: 'varchar',
        length: 15,
    })
    phone: string;

    /**
     * url_picture
     */
    @Column({
        name: 'url_picture',
        type: 'varchar',
        length: 320,
    })
    url_picture: string;

    /**
     * gender
     */
    @Column({
        name: 'gender',
        type: 'enum',
        enum: Gender,
    })
    gender: Gender;

    /**
     * Date Of Birth
     */
    @Column({
        name: 'dob',
        type: 'datetime',
    })
    dob: Date;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    User: UserEntity;
};

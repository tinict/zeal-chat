import {
    RecStatus
} from "src/constants";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn
} from "typeorm";

/**
 * Base system Entity
 * - description
 * - rec_status
 * - created_by
 * - deleted_by
 * - deleted_at
 * - created_at
 * - updated_by
 * - updated_at
 * - display_order
 * - code
 */
export abstract class CommonEntity extends BaseEntity {
    /**
     * Created By
     */
    @Column({
        name: 'description',
        type: 'longtext',
        nullable: true
    })
    public description: string;

    /**
     * Created By
     */
    @Column({
        name: 'created_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public created_by: string;

    
    /**
     * Created At
     */
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        nullable: true,
    })
    public created_at: Date;

    /**
     * Deleted By
     */
    @Column({
        name: 'deleted_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public deleted_by: string;

    /**
     * Updated By
     */
    @Column({
        name: 'updated_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public updated_by: string;

    /**
     * Updated At
     */
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        nullable: true,
    })
    public updated_at: Date;

    /**
     * Record Status
     */
    @Column({
        type: 'enum',
        enum: RecStatus,
        name: 'rec_status',
        default: RecStatus.ACTIVE,
    })
    public rec_status: RecStatus;

    /**
     * Deleted At
     */
    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    public deleted_at: Date;

    /**
     * Display Order
     */
    // @Column({
    //     name: 'display_order',
    //     type: 'decimal',
    //     nullable: true,
    // })
    // public display_order: number;

    /**
     * Code
     */
    @Column({ 
        name: 'code', 
        type: 'char', 
        length: 64, 
        nullable: true 
    })
    public code: string;
};
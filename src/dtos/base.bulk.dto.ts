import { ApiProperty } from "@nestjs/swagger";
import { RecStatus } from "src/constants";

export class BaseBulkDTO {    
    /**
     * Code
     */
    @ApiProperty({
        name: 'code'
    })
    code: string;

    /**
     * Description
     */
    @ApiProperty({
        name: 'description',
    })
    description: string;

    /**
     * Record status
     */
    @ApiProperty({
        name: 'rec_status',
        type: 'enum',
        enum: RecStatus,
        default: RecStatus.ACTIVE
    })
    rec_status: RecStatus;
};

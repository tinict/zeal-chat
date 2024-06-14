import { ApiProperty } from "@nestjs/swagger";
import { RecStatus } from "src/constants";

export abstract class BaseCreateDTO {
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
        name: 'description'
    })
    description: string;

    /**
     * Record status
     */
    @ApiProperty({
        name: 'rec_status'
    })
    rec_status: RecStatus;

    /**
     * Created by
     */
    @ApiProperty({
        name: 'created_by'
    })
    created_by: string;
};

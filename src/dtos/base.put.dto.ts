import { ApiProperty } from "@nestjs/swagger";
import { BaseBulkDTO } from "./base.bulk.dto";

export class BasePutDTO extends BaseBulkDTO {
    /**
     * Updated by
     */
    @ApiProperty({
        name: 'updated_by'
    })
    updated_by: string;
};

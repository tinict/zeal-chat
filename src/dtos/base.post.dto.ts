import { ApiProperty } from "@nestjs/swagger";
import { BaseBulkDTO } from "./base.bulk.dto";

export class BasePostDTO extends BaseBulkDTO {
    /**
     * Created by
     */
    @ApiProperty({
        name: 'created_by'
    })
    created_by: string;
};

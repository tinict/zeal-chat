import { ApiProperty } from "@nestjs/swagger";

export class BaseDeleteDTO {
    /**
     * Deleted by
     */
    @ApiProperty({
        name: 'deleted_by'
    })
    deleted_by: string;
};
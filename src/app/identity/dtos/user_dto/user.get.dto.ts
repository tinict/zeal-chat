import { ApiProperty } from "@nestjs/swagger";
import { BaseGetDTO } from "src/dtos";

/**
 * Get
 */
export class UserGetDTO extends BaseGetDTO {
    @ApiProperty({
        name: 'id',
    })
    id: string;
};

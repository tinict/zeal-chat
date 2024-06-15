import { ApiProperty } from "@nestjs/swagger";

/**
 * Query
 */
export class UserQueryDTO {
    @ApiProperty({
        name: 'id',
    })
    id: string;
};
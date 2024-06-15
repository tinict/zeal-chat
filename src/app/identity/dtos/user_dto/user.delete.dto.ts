import { ApiProperty } from "@nestjs/swagger";

/**
 * Delete
 */
export class UserDeleteDTO {
    /**
     * id
     */
    @ApiProperty({
        name: 'id',
    })
    id: string;
};
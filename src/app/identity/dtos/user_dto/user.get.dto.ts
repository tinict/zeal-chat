import { ApiProperty } from "@nestjs/swagger";

/**
 * Get
 */
export class UserGetDTO {
    @ApiProperty({
        name: 'id',
    })
    id: string;
};

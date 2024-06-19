import { ApiProperty } from "@nestjs/swagger";

/**
 * Base DTO
 */
export abstract class BaseDTO {
    /**
     * id
     */
    @ApiProperty({
        name: 'id',
    })
    id: string;
};

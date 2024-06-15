import { ApiProperty } from "@nestjs/swagger";

/**
 * Update
 */
export class UserUpdateDTO {
    @ApiProperty({
        name: 'id',
    })
    id: string;
    
    @ApiProperty({
        name: 'description',
    })
    description: string;

    @ApiProperty({
        name: 'created_by',
    })
    created_by: string;

    @ApiProperty({
        name: 'updated_by',
    })
    updated_by: string;

    @ApiProperty({
        name: 'deleted_by',
    })
    deleted_by: string;

    @ApiProperty({
        name: 'rec_status',
    })
    drec_status: string;

    @ApiProperty({
        name: 'username',
    })
    username: string;
};
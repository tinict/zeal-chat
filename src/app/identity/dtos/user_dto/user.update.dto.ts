import { ApiProperty } from "@nestjs/swagger";
import { BasePutDTO } from "src/dtos";

/**
 * Update
 */
export class UserUpdateDTO extends BasePutDTO {
    @ApiProperty({
        name: 'username',
    })
    username: string;
};

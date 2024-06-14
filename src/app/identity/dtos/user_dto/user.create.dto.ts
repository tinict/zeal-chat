import { ApiProperty } from "@nestjs/swagger";
import { BaseCreateDTO } from "src/dtos";

export class UserCreateDTO extends BaseCreateDTO {
    /**
     * Username
     */
    @ApiProperty({
        name: 'username',
        maxLength: 32,
    })
    username: string;
};
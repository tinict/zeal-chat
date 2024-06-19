import { ApiProperty } from "@nestjs/swagger";
import { 
    BasePostDTO 
} from "src/dtos";

/**
 * Create 
 */
export class UserCreateDTO extends BasePostDTO {
    /**
     * Username
     */
    @ApiProperty({
        name: 'username',
        maxLength: 32,
    })
    username: string;
};

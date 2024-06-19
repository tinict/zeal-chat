import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "src/constants";
import { BasePostDTO } from "src/dtos";

export class ProfileCreateDTO extends BasePostDTO {
    @ApiProperty({
        name: 'name',
        maxLength: 32,
    })
    name: string;

    @ApiProperty({
        name: 'family_name'
    })
    family_name: string;

    @ApiProperty({
        name: 'email',
    })
    email: string;

    @ApiProperty({
        name: 'phone',
        maxLength: 15,
    })
    phone: string;

    @ApiProperty({
        name: 'url_picture',
    })
    url_picture: string;

    @ApiProperty({
        name: 'gender',
    })
    gender: Gender;

    @ApiProperty({
        name: 'dob',
    })
    dob: Date;
};
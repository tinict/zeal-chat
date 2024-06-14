import { 
    HttpStatus, 
    HttpException 
} from '@nestjs/common';
import * as MSG from 'src/constants';

export class ExceptionFilterHelper {
    public status: HttpStatus = HttpStatus.OK;
    public message: string;
    public code: string;

    constructor(json?: Partial<ExceptionFilterHelper>) {
        if (json) {
            Object.assign(this, json);
        }
    }

    public static InternalServerError = () => {
        return new ExceptionFilterHelper({
            message: MSG.MSG_INTERNAL_SERVER_ERROR,
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            code: 'TL-0500',
        });
    };

    public static UnAuthorized = (message: string = 'Unauthorized', code: string = 'TL-0401') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.UNAUTHORIZED,
        });
    };

    public static NotFound = (message: string = 'Not Found', code: string = 'TL-0404') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.NOT_FOUND,
        });
    };

    public static BadRequest = (message: string = 'Bad Request', code: string = 'TL-0400') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.BAD_REQUEST,
        });
    };

    public static Forbidden = (message: string = 'Forbidden', code: string = 'TL-0403') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.FORBIDDEN,
        });
    };

    public static Ok = (message: string = 'OK', code: string = 'TL-0200') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.OK,
        });
    };

    public static NoContent = (message: string = 'No Content', code: string = 'TL-0204') => {
        return new ExceptionFilterHelper({
            message,
            code,
            status: HttpStatus.NO_CONTENT,
        });
    };

    public static HttpException = (problem: ExceptionFilterHelper) => {
        throw new HttpException(
            { message: problem.message, code: problem.code },
            problem.status,
        );
    };
}

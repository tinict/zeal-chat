import { 
    Controller, 
    Get, 
    Inject, 
    Req, 
    Res 
} from '@nestjs/common';
import { 
    Request, 
    Response 
} from 'express';
import { 
    ZtestService 
} from 'src/app/zealchat/services/ztest/ztest.service';

@Controller('v1/ztest')
export class ZtestController {
    constructor(
        // @Inject('ZtestService')
        private readonly ztestservice: ZtestService
    ) { };

    @Get()
    getZTest(
        @Req()
        req: Request,
        @Res()
        res: Response
    ) {
        try {
            const context = this.ztestservice.getZTest();
            return res.status(200).json({ context });
        } catch (error: any) {
            return res.status(500).send(error)
        }
    };
};

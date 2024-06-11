import { Inject, Injectable } from '@nestjs/common';
// import { TestService } from 'src/app/identity/services/test-service/test.service';

@Injectable()
export class ZtestService {
    constructor(
        @Inject('TestService') private readonly testService: any
    ) {};

    getZTest() {
        return this.testService.getValueCTX(" Word!");
    };
};

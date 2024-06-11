import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    private ctx = null;

    getValueCTX (context: string) {
        return `${'Hello ' + context}`;
    };
};

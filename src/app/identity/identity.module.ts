import { DynamicModule, Module } from '@nestjs/common';
import { TestService } from './services/test.service';

@Module({
    controllers: [],
    providers: [TestService],
    exports: [TestService]
})

export class IdentityModule {
    static forRoot(context: string): DynamicModule {
        const providers = context === 'test';
        if (providers)
            return {
                module: IdentityModule,
                providers: [{ provide: 'TestService', useClass: TestService }],
                exports: [{ provide: 'TestService', useClass: TestService }],
            };
    }
};

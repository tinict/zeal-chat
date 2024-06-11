import { DynamicModule, Module } from '@nestjs/common';
import { TestService } from './services/test-service/test.service';

@Module({
    controllers: [],
    providers: [TestService],
    exports: [TestService]
})

export class IdentityModule {
    static forRoot(context: string): DynamicModule {
        if (context === 'admin') {
            return {
                module: IdentityModule,
                providers: [TestService],
                exports: [TestService],
            }
        }
        else return;
    }
};

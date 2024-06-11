import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { ZtestService } from './services/ztest/ztest.service';
import { ZtestController } from './http/controllers/ztest/ztest.controller';

@Module({
    imports: [IdentityModule.forRoot("admin")],
    providers: [ZtestService],
    controllers: [ZtestController]
})

export class ZealchatModule {};


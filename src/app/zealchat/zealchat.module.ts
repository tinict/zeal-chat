import { Module } from '@nestjs/common';
import { IdentityModule } from '../identity/identity.module';
import { ZtestService } from './services/ztest.service';
import { ZtestController } from './http/controllers/ztest.controller';

@Module({
    imports: [IdentityModule.forRoot("test")],
    providers: [ZtestService],
    controllers: [ZtestController]
})

export class ZealchatModule {};


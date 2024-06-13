import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  DatabaseModule,
  IdentityModule,
  ZealchatModule
} from './app';

@Module({
  imports: [
    IdentityModule,
    ZealchatModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

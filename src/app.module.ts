import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityModule } from './app/identity/identity.module';
import { ZealchatModule } from './app/zealchat/zealchat.module';

@Module({
  imports: [
    IdentityModule,
    ZealchatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

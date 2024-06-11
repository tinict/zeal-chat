import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityModule } from './app/identity/identity.module';
import { ZealchatModule } from './app/zealchat/zealchat.module';
import { DatabaseModule } from './app/database/database.module';

@Module({
  imports: [
    IdentityModule,
    ZealchatModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  /**
   * Helmet: Protect HTTP and prevent actack XSS and CSRF
   */
  app.use(helmet());

  /**
   * CORS: Cross Origin Resource Sharing
   */
  app.enableCors();

  /**
   * CSURF: Cross site request forgery protect website attack as CSRF or XSRF
   */
  app.use(csurf());

  await app.listen(3000);
}
bootstrap();

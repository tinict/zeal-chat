import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
  });

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
  // app.use(csurf({ cookie: true }));

  /**
   * Compression: Increasing the speed of a web app
   */
  app.use(compression());

  /**
   * Document API by Swagger
   */
  const config = new DocumentBuilder()
    .setTitle('ZealFlow - ZealChat API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = 5000;
  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: http://localhost:${PORT}/${globalPrefix}`,
  );

  Logger.log(
    `🚀 Docs API: http://localhost:${PORT}/docs`,
  );
}

bootstrap();

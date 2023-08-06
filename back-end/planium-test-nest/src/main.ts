import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { CustomExceptionFilter } from './modules/expectionFilters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CustomExceptionFilter());

  app.use(
    ['/swagger-docs-v2'],
    basicAuth({
      challenge: true,
      users: {
        swaggerUser: '123',
      },
    }),
  );

  /* OpenAPI/Swagger Config */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('App TIM')
    .setDescription('TIM Api Documentation')
    .setVersion('0.5.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/swagger-docs-v2', app, document);

  await app.listen(3000);
}
bootstrap();

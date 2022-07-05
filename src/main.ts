import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  //app.enableCors();
  app.enableCors({
    origin: '*',
    allowedHeaders: 'content-type, Accept',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(3000, '0.0.0.0');

  Logger.log('', 'Start');
  Logger.log(`API RUNNING: ${await app.getUrl()}`, 'Start');
  Logger.log('', 'Start');
}
bootstrap();

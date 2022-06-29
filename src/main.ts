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
  await app.listen(3000);

  Logger.log('', 'Start');
  Logger.log('API RUNNING: http://localhost', 'Start');
  Logger.log('', 'Start');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

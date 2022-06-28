import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });
  await app.listen(3000);

  Logger.log('', 'Start');
  Logger.log('API RUNNING: http://localhost', 'Start');
  Logger.log('', 'Start');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

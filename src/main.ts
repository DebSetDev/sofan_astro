import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.use(bodyParser.json());
  app.use(json());
  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});

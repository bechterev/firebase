import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  console.log(configService.get<string>('FIREBASE_PROJECT_ID'))
  const adminConfig: ServiceAccount = {
    "projectId": configService.get<string>('FIREBASE_PROJECT_ID'),
    "privateKey": configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g,'\n'),
    "clientEmail": configService.get<string>('FIREBASE_CLIENT_EMAIL')
  };
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: configService.get<string>('DATABASE_URL')
  });
  app.enableCors();
  await app.listen(configService.get<string>('APP_PORT')||3000);
}
bootstrap();

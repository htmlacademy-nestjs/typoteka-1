import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NOTIFY_SERVICE_ENV_PATH } from './app.constant';
import { getMongoDbConfig, mongoDbOptions } from '../../config/mongodb.config';
import { MongooseModule } from '@nestjs/mongoose';
import { validateEnvironments } from './env.validation';
import { rabbitMqOptions } from '../../config/rabbitmq.config';
import { EmailSubscriberModule } from './email-subscriber/email-subscriber.module';
import { mailOptions } from '../../config/mail.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: NOTIFY_SERVICE_ENV_PATH,
      load: [mongoDbOptions, rabbitMqOptions, mailOptions],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(getMongoDbConfig()),
    EmailSubscriberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

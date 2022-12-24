import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NOTIFY_SERVICE_ENV_PATH } from './app.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: NOTIFY_SERVICE_ENV_PATH
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constant';

@Module({
  imports: [
    PrismaModule,
    BlogPostModule,
    BlogCategoryModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

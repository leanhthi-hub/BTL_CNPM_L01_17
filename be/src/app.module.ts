import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthsModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AssetssModule } from './assets/assets.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    AuthsModule,
    UsersModule,
    AssetssModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

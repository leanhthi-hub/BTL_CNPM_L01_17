
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { User, UserSchema } from 'src/users/users.schema';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [UsersService, AuthService, JwtStrategy],
})
export class AuthsModule { }
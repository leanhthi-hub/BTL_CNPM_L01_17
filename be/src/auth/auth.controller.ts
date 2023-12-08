import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  // UseInterceptors,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { TransformInterceptor } from 'src/utils/response-wrapper';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

import { registerDto } from './dto/register.dto';
import { log } from 'console';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  // @UseInterceptors(TransformInterceptor)
  // @Get(':username/nonce') // get nonce
  // async getNonce(@Param('username') username: string): Promise<any> {
  //   username = username.toLowerCase();
  //   const user = await this.usersService.getByUsername(username);
  //   if (!user) {
  //     const { nonce } = await this.usersService.create(
  //       plainToClass(CreateUserDto, { walletAddress }),
  //     );
  //     return { nonce };
  //   }
  //   const { nonce } = user;
  //   return { nonce };
  // }

  // @UseInterceptors(TransformInterceptor)
  @Post('register')
  async register(@Body() registerInfo: registerDto) {
    console.log(registerInfo);

    const { username, password } = registerInfo;
    var user = await this.usersService.getByUsername(username);

    if (!user) {
      user = await this.usersService.create(registerInfo);
    }
    const response = this.authService.createToken(user);
    return response;
  }

  // @UseInterceptors(TransformInterceptor)
  @Post('login')
  async login(@Body() loginInfo: LoginDto): Promise<any> {
    console.log(loginInfo);

    const { username, password } = loginInfo;
    const user = await this.usersService.getByUsernameAndPassword(
      username,
      password,
    );
    console.log(user);
    if (!user) {
      return { token: null };
    }
    const response = this.authService.createToken(user);
    return response;
  }
}

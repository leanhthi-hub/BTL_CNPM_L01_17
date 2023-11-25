import { Controller, Request, Body, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  Get,
  Param,
  Put,
  UseGuards,
  UseInterceptors,
  // UseGuards,
  // UseInterceptors,
} from '@nestjs/common/decorators';
import { ResponseUserDto } from './dto/response-user.dto';
import { plainToClass } from 'class-transformer';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdatedUserDto } from './dto/update-user.dto';
import { TransformInterceptor } from 'src/utils/response-wrapper';

@ApiBearerAuth('defaultBearerAuth')
@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@UseInterceptors(TransformInterceptor)
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@Request() req: any): Promise<ResponseUserDto> {
    const { user_id } = req.user;
    const user = await this.usersService.getById(user_id);
    return user as unknown as ResponseUserDto;
  }
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<ResponseUserDto> {
    const user = await this.usersService.getById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return plainToClass(ResponseUserDto, user);
  }

  @Put()
  async updateUser(
    @Request() req: any,
    @Body() updateUserDto: UpdatedUserDto,
  ): Promise<any> {
    return;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Role } from 'src/utils/enums/role.enum';
import { Type } from '@nestjs/common';
import { Types } from 'mongoose';
import { Verify } from 'crypto';

@Exclude()
export class ResponseUserDto {
  @Expose()
  @ApiProperty({
    example: '',
  })
  _id: Types.ObjectId;

  @Expose()
  @ApiProperty({
    example: 'tokenland',
  })
  username: string;

  @Expose()
  @ApiProperty({
    example: '123456',
  })
  password: string;

  @Expose()
  @ApiProperty({
    example: 'Thành',
  })
  firstName: string;

  @Expose()
  @ApiProperty({
    example: 'Võ Công',
  })
  lastName: string;
}

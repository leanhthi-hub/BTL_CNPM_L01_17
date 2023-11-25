import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class LoginDto {
  @ApiProperty({})
  username: string;
  @ApiProperty({})
  password: string;
}

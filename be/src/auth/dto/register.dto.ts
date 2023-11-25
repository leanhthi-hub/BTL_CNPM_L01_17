import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class registerDto {
  @ApiProperty({})
  username: string;
  @ApiProperty({})
  password: string;
}

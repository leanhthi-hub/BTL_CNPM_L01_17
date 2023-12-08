import { ApiProperty } from '@nestjs/swagger';
// import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({
    example: 'tokenland',
  })
  username: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
// import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UpdatedUserDto {
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

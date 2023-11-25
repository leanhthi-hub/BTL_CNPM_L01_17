import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.schema';
import { Role } from 'src/utils/enums/role.enum';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public createToken(user: User): any {
    console.log(user);
    const token = this.jwtService.sign(
      {
        user_id: user['id'],
        username: user['username'],
        roles: user.role || Role.User,
      },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '3 days',
      },
    );
    return {
      token,
      exp: Math.floor(+new Date() / 1000) + 86400 * 3,
    };
  }
}

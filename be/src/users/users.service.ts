import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async getByUsername(username: string): Promise<User> {
    return this.UserModel.findOne({ username });
  }
  async getByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<User> {
    return this.UserModel.findOne({ username, password });
  }
  async getById(id: string): Promise<User> {
    return this.UserModel.findById(id);
  }

  async updateById(id: string, updateDto: UpdatedUserDto) {
    return this.UserModel.findByIdAndUpdate(id, updateDto);
  }
}

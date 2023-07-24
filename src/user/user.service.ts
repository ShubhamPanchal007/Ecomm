import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService,
  ) {}
  async createUserOrLoginUser(user: CreateUserDto) {
    const { phoneNumber,roles } = user;
    const token = await this.authService.verifyOtp(user);
    if (token) {
      // Check if user exists already
      if (!(await this.findUserByPhoneNumber(phoneNumber))) {
        // create user and return token
        await this.userModel.create({phoneNumber,roles});
      }
      // return just token
      return token;
    } else {
      throw new HttpException('Wrong code provided', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserByPhoneNumber(phoneNumber: String) {
    return await this.userModel.findOne({ phoneNumber });
  }
}

import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
} from 'class-validator';
import { role } from 'utils/utils.enum';

export class CreateUserDto {
  @IsPhoneNumber('IN', { message: 'Invalid phone number format' })
  @IsNotEmpty({ message: 'Phone number is required' })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'OTP is required' })
  otp: string;

  @IsArray()
  @IsNotEmpty({ message: 'Roles are required' })
  @IsString({ each: true, message: 'Each role must be a string' })
  roles: string[];
}

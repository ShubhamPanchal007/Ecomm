import { BadRequestException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { VendorService } from 'src/vendor/vendor.service';
import { Twilio } from 'twilio/dist/lib';
@Injectable()
export class AuthService {
  private twilioClient = new Twilio(
    process.env.accountSid,
    process.env.authToken,
  );
  private jwtSecret = process.env.jwtSecretKey;
  constructor(private vendorsService: VendorService) {}

  async sendOtp(userDto: any) {
    // Send OTP via SMS
    return this.twilioClient.verify.v2
      .services(process.env.serviceSid)
      .verifications.create({
        to: userDto.phoneNumber,
        channel: 'sms',
      });
  }

  async verifyOtp(userDto: any) {
    const result = await this.twilioClient.verify.v2
      .services(process.env.serviceSid)
      .verificationChecks.create({
        to: userDto.phoneNumber,
        code: userDto.otp,
      });
    if (!result.valid || result.status !== 'approved') {
      throw new BadRequestException('Wrong code provided');
    }
    // Return a jwt token
    const token = jwt.sign({ userId: userDto.phoneNumber,userRole: userDto.roles }, this.jwtSecret, {
      expiresIn: '1h',
    });
    return token;
  }
}

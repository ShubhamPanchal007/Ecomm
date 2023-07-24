import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { hasRoles } from './decorators/roles.decorator';
import { role } from 'utils/utils.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('sendOtp')
  postNumber(@Body() user: any) {
    return this.authService.sendOtp(user);
  }
  @Post('verifyOtp')
  verify(@Body() userDto: any) {
    return this.authService.verifyOtp(userDto);
  }
  // A sample protected route to test.
  @hasRoles(role.VENDOR)
  @UseGuards(AuthGuard,RolesGuard)
  @Get('dashboard/protected')
  dashboard() {
    return 'Dashboard content';
  }
}

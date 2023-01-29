import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  postNumber(@Body() user: any) {
    return this.authService.login(user);
  }
  @Post('verify')
  verify(@Body() userDto: any) {
    return this.authService.verify(userDto);
  }
  // A sample protected route to test.
  @UseGuards(AuthGuard)
  @Get('dashboard/protected')
  dashboard() {
    return 'Dashboard content';
  }
}

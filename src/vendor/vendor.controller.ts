import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private vendorService: VendorService) {}
  @Post('register')
  RegisterVendor(@Body() vendor: CreateVendorDto) {
    return this.vendorService.registerVendor(vendor);
  }

  @UseGuards(AuthGuard)
  @Get('/sensitive')
  sensitive() {
    return 'Some sensitive info about seller';
  }
}

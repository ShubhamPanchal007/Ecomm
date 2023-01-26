import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private vendorService: VendorService) {}
  @Post('register')
  RegisterVendor(@Body() vendor: CreateVendorDto) {
    return this.vendorService.registerVendor(vendor);
  }
}

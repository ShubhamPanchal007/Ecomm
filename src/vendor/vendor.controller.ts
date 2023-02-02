import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Query,
  Patch,
  Param,
} from '@nestjs/common';
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
  @Post('/addNewProduct')
  addProduct(@Body() productDto: any) {
    return this.vendorService.addProduct(productDto);
  }

  @UseGuards(AuthGuard)
  @Post('/retrieveAllProducts')
  retrieveAllProducts(@Body() body: any) {
    return this.vendorService.retrieveAllProductsOfVendor(body.vendorID);
  }

  // While the PUT method is a common and valid choice, it might not fit every situation. For example, when implementing the PUT method, we assume that the API users know all of the details of a particular entity. Since omitting single property results in removing it, they need to be careful. A solution to this issue can be the PATCH method.  @Patch('/updateAProduct')

  @UseGuards(AuthGuard)
  @Patch('/updateProduct/:id')
  updateProduct(@Param() { id }: any, @Body() updateProductDto: any) {
    return this.vendorService.updateAProduct(id, updateProductDto);
  }


}

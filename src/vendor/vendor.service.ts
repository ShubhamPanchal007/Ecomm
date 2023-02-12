import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor, VendorDocument } from './schema/vendor.schema';
import { Model } from 'mongoose';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from '../product/product.service';
@Injectable()
export class VendorService {
  constructor(
    @InjectModel(Vendor.name) private vendorModal: Model<VendorDocument>,
    private productService: ProductService,
  ) {}

  async registerVendor(vendor: CreateVendorDto) {
    const user = this.findVendorByPhoneNumber(vendor.phoneNumber);
    if (!user) {
      const newVendor = new this.vendorModal(vendor);
      return await newVendor.save();
    } else {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
  }

  async findVendorByPhoneNumber(phoneNumber: String): Promise<Vendor> {
    const vendor = await this.vendorModal.findOne({ phoneNumber });
    return vendor;
  }

  async findVendorByID(id: String): Promise<Vendor> {
    const vendor = await this.vendorModal.findById({ id });
    return vendor;
  }

  addProduct(productDto: any) {
    try {
      return this.productService.createProduct(productDto);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async retrieveAllProductsOfVendor(vendorID: any) {
    return await this.productService.retrieveAllProductsOfVendor(vendorID);
  }

  async updateAProduct(id, productUpdateDto) {
    console.log(id);
    return await this.productService.findProductByID(id, productUpdateDto);
  }
}

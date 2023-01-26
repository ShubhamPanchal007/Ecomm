import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vendor, VendorDocument } from './schema/vendor.schema';
import { Model } from 'mongoose';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class VendorService {
  constructor(
    @InjectModel(Vendor.name) private vendorModal: Model<VendorDocument>,
  ) {}
  async registerVendor(vendor: CreateVendorDto) {
    const user = await this.vendorModal.findOne({
      phoneNumber: vendor.phoneNumber,
    });
    if (!user) {
      const newVendor = new this.vendorModal(vendor);
      return await newVendor.save();
    } else {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { type } from 'os';
import { VendorStatus } from './vendor.enum';
export type VendorDocument = HydratedDocument<Vendor>;

@Schema()
export class Vendor {
  @Prop()
  name: String;

  @Prop()
  phoneNumber: Number;

  @Prop()
  category: String;

  @Prop()
  city: String;

  @Prop()
  address: String;

  @Prop({
    type: String,
    enum: VendorStatus,
    default: VendorStatus.InActive,
  })
  status: VendorStatus;

  @Prop({required:true})
  coordinates:[]
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);

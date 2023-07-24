import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { role } from '../../../utils/utils.enum';
export type VendorDocument = HydratedDocument<Vendor>;

@Schema()
export class Vendor {
  @Prop()
  name: String;

  @Prop()
  phoneNumber: String;

  @Prop()
  category: String;

  @Prop()
  city: String;

  @Prop()
  address: String;

  @Prop({
    type: String,
    enum: role,
    default: role.VENDOR,
  })
  role: role;

  @Prop({ required: true })
  coordinates: [];
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);

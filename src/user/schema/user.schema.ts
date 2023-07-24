import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { role, status } from 'utils/utils.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  phoneNumber: String;

  @Prop({ type: [String], enum: role, default: role.CUSTOMER })
  roles: role[];
}
export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Review } from './review.schema';
// The export type UserDocument = HydratedDocument<Users> creates a type UserDocument which is an interface that describes a Mongoose document that has been "hydrated" with any virtuals, getters, setters, and methods defined on the associated Mongoose schema.
export type PhoneAccessoriesDocument = HydratedDocument<PhoneAccessorie>;

@Schema()
export class PhoneAccessorie {
  @Prop({ required: true })
  title: String;

  @Prop({ required: true })
  price: String;

  @Prop({ required: true })
  MRP: Number;

  @Prop({ required: true })
  images: String[];

  @Prop({ required: true })
  description: String;

  @Prop({ required: true })
  vendorID: string;
  // The ref property is used to specify that the Review property is a reference to another collection, in this case, the Review collection. This means that the Review property will contain an array of ObjectIds that reference the documents in the Review collection.
  @Prop({
    ref: 'Review',
  })
  reviews: [Review];
}

export const PhoneAccessoriesSchema =
  SchemaFactory.createForClass(PhoneAccessorie);

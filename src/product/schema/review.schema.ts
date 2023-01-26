import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop()
  content: String;

  @Prop({
    ref: 'PhoneAccessorie',
  })
  //   to indicate that it's an ObjectId type.
  productId: MongooseSchema.Types.ObjectId;

  @Prop()
  username: String;

  @Prop()
  rating: Number;

  @Prop()
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

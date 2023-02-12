import { Module } from '@nestjs/common';
import {
  PhoneAccessoriesSchema,
  PhoneAccessorie,
} from './schema/phoneAccessorie.schema';
import { ReviewSchema, Review } from './schema/review.schema';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorModule } from 'src/vendor/vendor.module';
import { VendorService } from 'src/vendor/vendor.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PhoneAccessorie.name, schema: PhoneAccessoriesSchema },
      { name: Review.name, schema: ReviewSchema },
    ]),
    
  ],
  providers: [ProductService,],
  exports: [ProductService, ProductModule],
  controllers: [ProductController],
})
export class ProductModule {}

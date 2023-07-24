import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vendor, VendorSchema } from './schema/vendor.schema';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
    // We imports other modules inside the a non-root component, so that we can take advantage of its service class by using them inside our component.
    ProductModule,
  ],
  providers: [VendorService],
  controllers: [VendorController],
  exports: [VendorModule, VendorService],
})
export class VendorModule {}

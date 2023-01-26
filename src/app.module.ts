import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    VendorModule,
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://shubham:shubhhustler321@cluster0.m5jme0b.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  // providers: [AppService,ProductService],
})
export class AppModule {}

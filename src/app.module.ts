import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { VendorModule } from './vendor/vendor.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    VendorModule,
    ProductModule,
    MongooseModule.forRoot(
      process.env.MONGODB_CONN_URI
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  // providers: [AppService,ProductService],
})
export class AppModule {}

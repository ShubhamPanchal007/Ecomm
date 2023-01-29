import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProductModule } from 'src/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { VendorModule } from 'src/vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ProductModule,
    VendorModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, AuthModule],
})
export class AuthModule {}

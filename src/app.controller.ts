import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { PhoneAccessorie } from './product/schema/phoneAccessorie.schema';

@Controller('products')
export class AppController {
  constructor(private readonly productService: ProductService) {}

  @Post('/createNewProduct')
  async createProduct(@Body() body: any): Promise<PhoneAccessorie> {
    return this.productService.createProduct(body.product);
  }
  @Post('/addReview')
  async addReview(@Body() body) {
    return this.productService.addReview(body)
  }
  @Post('/getProductWithReviewsWithId')
  async getProductsWithReviews(@Body() body: any) {
    return this.productService.getProductWithReviews(body.product._id);
  }
}

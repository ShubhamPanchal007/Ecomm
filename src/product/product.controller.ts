import { Body, Controller, Post } from '@nestjs/common';
import { PhoneAccessorieDto } from './dto/create-phoneAccessorie.dto';
import { ProductService } from './product.service';
import { PhoneAccessorie } from './schema/phoneAccessorie.schema';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  @Post('/createNewProduct')
  async createProduct(@Body() body: PhoneAccessorieDto): Promise<PhoneAccessorie> {
    return this.productService.createProduct(body);
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

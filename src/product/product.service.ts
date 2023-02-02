import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  PhoneAccessorie,
  PhoneAccessoriesDocument,
} from './schema/phoneAccessorie.schema';
import { Review, ReviewDocument } from './schema/review.schema';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(PhoneAccessorie.name)
    private PhoneAccessorieModal: Model<PhoneAccessoriesDocument>,
    @InjectModel(Review.name) private ReviewModal: Model<ReviewDocument>,
  ) {}
  async createProduct(product: PhoneAccessorie): Promise<PhoneAccessorie> {
    const newProduct = new this.PhoneAccessorieModal(product);
    // insert the product
    const savedProduct = await newProduct.save();
    return savedProduct;
  }

  async addReview(review: Review) {
    const newReview = new this.ReviewModal(review);
    const savedReview = await newReview.save();
    const product = await this.PhoneAccessorieModal.findOneAndUpdate(
      { _id: newReview.productId },
      { $push: { reviews: newReview._id } },
    );
    return [product, savedReview];
  }
  getProductWithReviews(id: string) {
    // By using the populate() method on the Review field, Mongoose will automatically retrieve the related documents from the Review collection and attach them to the returned document.

    // An alternative approach can be used like using findById (i.e this.ReviewModal.find(product_id:id)) on the reviews collection.

    // Also it would be good to note that according to the benchmark results the find method works faster than populate by a very small diffrence in ms.
    return this.PhoneAccessorieModal.findById(id).populate('reviews').exec();
  }
  async retrieveAllProductsOfVendor(vendorID: String) {
    const products = await this.PhoneAccessorieModal.find({
      vendorID
    });
    return products;
  }

  async findProductByID(id,productUpdateDto){
    // By default, findOneAndUpdate() returns the document as it was before update was applied.
      const product = await this.PhoneAccessorieModal.findOneAndUpdate({vendorID:id},productUpdateDto,{new:true,/*if passed -->,overwrite: true then our patch request would become a put request*/})
      return product

  }
}

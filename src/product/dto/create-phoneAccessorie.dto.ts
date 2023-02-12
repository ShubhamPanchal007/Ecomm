import { IsString, IsNumber, IsArray, IsEnum, IsObject, IsIn } from 'class-validator';

export class PhoneAccessorieDto {
  @IsString()
  title: string;

  @IsString()
  price: string;

  @IsNumber()
  MRP: number;

  @IsArray()
  images: string[];

  @IsString()
  description: string;

  @IsString()
  vendorID: string;

  @IsObject()
  location: {
    // @IsIn(['Point'])
    type: string;

    // @IsArray()
    coordinates: number[];
  };
};

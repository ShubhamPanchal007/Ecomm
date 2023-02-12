import { IsArray, IsNumber, IsString, Matches } from 'class-validator';
export class CreateVendorDto {
  @IsString()
  name: String;

  @IsString()
  @Matches(/^\+[1-9]\d{1,14}$/)
  phoneNumber: String

  @IsString()
  category: String;

  @IsString()
  city: String;

  @IsString()
  address: String;

  @IsArray()
  coordinates: number[];
}

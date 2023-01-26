import { IsNumber, IsString } from 'class-validator';
export class CreateVendorDto {
  @IsString()
  name: String;

  @IsNumber()
  phoneNumber: Number

  @IsString()
  category: String;

  @IsString()
  city: String;

  @IsString()
  address: String;
}

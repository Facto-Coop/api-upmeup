/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersOffersInput } from './dto/inputs/create-users-offers.input';
import { UsersOffer, UsersOfferDocument } from './models/users-offers';

@Injectable()
export class UsersOffersService {
 
  constructor(
    @InjectModel(UsersOffer.name) private usofModel: Model<UsersOfferDocument>,
  ) {}

  async findAllUsersOffers(): Promise<UsersOffer[]> {
    try {
      return this.usofModel.find();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async createNewReg(createUsersOffersInput: CreateUsersOffersInput) {
    const createdItem = new this.usofModel(createUsersOffersInput);
    return await createdItem.save() as any;
  }

  /*async findAll() {
    try {
      return await this.usofModel.find({}).sort({ name: 1 });
    } catch (error) {
      throw new BadRequestException();
    }
  }*/
}

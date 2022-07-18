/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferInput } from './dto/inputs/update-offer.input';
import { UpdateOfferEnrollInput } from './dto/inputs/update-offerEnroll.input';
import { Offer, OfferDocument } from './models/company-offer';

@Injectable()
export class CompanyOffersService {
  constructor(
    @InjectModel(Offer.name) private coffModel: Model<OfferDocument>,
  ) {}

  async findAll() {
    try {
      //return await this.coffModel.find().populate('userName');
      return await this.coffModel.find().sort({ createdDate: -1 }); //.populate('userName');
    } catch (error) {
      throw new BadRequestException();
    }
  }

  /**
   * Offer by ID
   *  */
  async getOffer(_id: string): Promise<Offer> {
    return this.coffModel.findOne({ _id }); //.populate('userName');
  }

  /**
   * Create new Offer
   *  */
  createOffer(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdItem = new this.coffModel(createOfferDto);
    return createdItem.save() as any;
  }

  /**
   * Update Offer oject
   * @param _id 
   * @param updateOfferInput 
   * @returns 
   */
  updateOffer(_id: string, updateOfferInput: UpdateOfferInput ) {
    return this.coffModel.findByIdAndUpdate(_id, updateOfferInput);
  }

  /**
   * Update Only enrolled value
   * @param _id 
   * @param updateOfferEnrollInput 
   * @returns 
   */
  updateOfferEnrolled(_id: string, updateOfferEnrollInput: UpdateOfferEnrollInput ) {
    return this.coffModel.findByIdAndUpdate(_id, updateOfferEnrollInput);
  }

}

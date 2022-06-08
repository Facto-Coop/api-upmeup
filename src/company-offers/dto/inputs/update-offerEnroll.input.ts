/* eslint-disable prettier/prettier */
import { Field, InputType, Int, PickType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateOfferDto } from '../create-offer.dto';

export type CompanyOfferDocument = UpdateOfferEnrollInput & mongoose.Document;

@Schema()
@InputType({ description: 'Update enrolled document' })
export class UpdateOfferEnrollInput extends PickType(CreateOfferDto, [
    'enrolled',
  ] as const) {
    @Field(() => Int)
    @Prop({ required: true })
    enrolled!: number;
}
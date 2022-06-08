/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';
import * as mongoose from 'mongoose';
import { Offer } from 'src/company-offers/models/company-offer';
import { User } from 'src/users/models/user';

@Schema()
@ObjectType({ description: 'from UsersOfferModel ' })
export class UsersOffer {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;
 
  @Field(() => String)
  @Prop()
  user_id: string;

  @Field(() => String)
  @Prop()
  offer_id: string;

 /*
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user_id: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Offer.name })
  offer_id: Offer;
*/

}
export type UsersOfferDocument = UsersOffer & Document;
export const UsersOfferSchema = SchemaFactory.createForClass(UsersOffer);

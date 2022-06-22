/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';
import { User } from 'src/users/models/user';

@Schema()
@ObjectType({ description: 'from CompanyOfferModel ' })
export class Offer {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;

  @Field(() => String)
  @Prop()
  userId: string;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  eduLevel: string;

  @Field(() => String)
  @Prop()
  city: string;

  @Field(() => String)
  @Prop()
  rangoSalarial: string;

  @Field(() => String)
  @Prop()
  remoto: string;

  @Field(() => String)
  @Prop()
  tipoContrato: string;

  @Field(() => String)
  @Prop()
  jornada: string;

  @Field(() => Number)
  @Prop()
  enrolled: number;
  
  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => String)
  @Prop()
  requirements: string;

  @Field(() => Date)
  @Prop()
  createdDate: Date;
  
  // TODO: Get info from owner
  /*@Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  //@Type(() => User)
  userName: User;*/

}

export type OfferDocument = Offer & Document;
export const OfferSchema = SchemaFactory.createForClass(Offer);

/*OfferSchema.virtual('userName', {
  ref: 'User',
  localField: '_id',
  foreignField: 'user',
});*/
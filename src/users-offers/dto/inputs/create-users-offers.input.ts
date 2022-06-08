/* eslint-disable prettier/prettier */
import { InputType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types as MongooseTypes } from 'mongoose';

@Schema()
@InputType({ description: 'Create for UsersOffersModel ' })
export class CreateUsersOffersInput {
  @Field()
  @Prop()
  user_id: string;

  @Field()
  @Prop()
  offer_id: string;
}
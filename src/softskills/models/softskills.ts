/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';

@Schema()
@ObjectType({ description: 'from SoftskillsModel ' })
export class Softskill {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;
 
  @Field(() => String)
  @Prop()
  name: string;
}
export type SoftskillDocument = Softskill & Document;
export const SoftskillSchema = SchemaFactory.createForClass(Softskill);
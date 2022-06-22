/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';

@Schema()
@ObjectType({ description: 'from SectorsModel ' })
export class Sector {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;
 
  @Field(() => String)
  @Prop()
  name: string;
}
export type SectorDocument = Sector & Document;
export const SectorSchema = SchemaFactory.createForClass(Sector);
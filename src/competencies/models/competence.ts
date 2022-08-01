/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';

@Schema()
@ObjectType({ description: 'from CompetenceModel ' })
export class Competencies {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;
}
export type CompetencieDocument = Competencies & Document;
export const CompetenceSchema = SchemaFactory.createForClass(Competencies);
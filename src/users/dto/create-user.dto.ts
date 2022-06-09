/** Used for transfer data like create and update...*/
/* eslint-disable prettier/prettier */
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = CreateUserDto & mongoose.Document;

@Schema()
@ObjectType({ description: 'Create new user' })
export class CreateUserDto {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  surname: string;

  @Field(() => String)
  @Prop()
  city: string;
  
  @Field(() => String)
  @Prop()
  eduLevel: string;

  @Field()
  @Prop()
  password: string;

  @Field(() => String)
  @Prop()
  tipo: string;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => [String])
  @Prop()
  valors: string[];

}
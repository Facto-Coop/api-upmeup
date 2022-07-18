/* eslint-disable prettier/prettier */
/** Used for transfer data like create and update...*/
/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = CreateUserDto & mongoose.Document;

@Schema()
@InputType({ description: 'Create new User' })
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
  sector_id: string;
  
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

  @Field(() => String)
  @Prop()
  jobPosition: string;

  @Field(() => String)
  @Prop()
  lastJobTasks: string;

  @Field(() => String)
  @Prop()
  experience: string;

  @Field(() => [String])
  @Prop()
  languages: string[];

/* 
  @Field(() => [String])
  @Prop()
  knowledge: string[];
*/

  @Field(() => [String])
  @Prop()
  valors: string[];

}

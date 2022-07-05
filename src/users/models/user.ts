/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types as MongooseTypes } from 'mongoose';

@Schema()
@ObjectType({ description: 'from UserModel ' })
export class User {
  @Field(() => ID)
  _id: MongooseTypes.ObjectId;

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

/* Campo para conocimiento (tags?)
  @Field(() => [String])
  @Prop()
  knowledge: string[];
*/

  @Field(() => [String])
  @Prop()
  valors: string[];

}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

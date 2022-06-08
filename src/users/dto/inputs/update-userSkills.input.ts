/* eslint-disable prettier/prettier */
import { Field, InputType, PickType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateUserDto } from '../create-user.dto';

export type UserDocument = UpdateUserSkillInput & mongoose.Document;

@Schema()
@InputType({ description: 'Update Offer document' })
export class UpdateUserSkillInput extends PickType(CreateUserDto, [
    'valors',
  ] as const) {
    @Field(() => [String])
    @Prop({ required: true })
    valors: string[];
}
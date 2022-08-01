/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CompetenciesDocument = CreateCompetenceDto & mongoose.Document;

@Schema()
@InputType({ description: 'Create new Competence' })
export class CreateCompetenceDto {  
    @Field(() => String)
    @Prop()
    name: string;
}
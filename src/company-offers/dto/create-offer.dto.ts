/* eslint-disable prettier/prettier */
import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Types as MongooseTypes } from 'mongoose';
import { isDate } from 'util/types';

export type CompanyOfferDocument = CreateOfferDto & mongoose.Document;

@Schema()
@InputType({ description: 'Create new offer' })
export class CreateOfferDto {  
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
  
    @Field(() => [String])
    @Prop()
    competencies: string[];
    
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
}
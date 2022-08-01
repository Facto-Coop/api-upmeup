/* eslint-disable prettier/prettier */
import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CompanyOfferDocument = UpdateOfferInput & mongoose.Document;

@Schema()
@InputType({ description: 'Update Offer document' })
export class UpdateOfferInput {
    @Field(() => String)
    @Prop({ required: true })
    title: string;
  
    @Field(() => String)
    @Prop()
    eduLevel: string;

    @Field(() => String)
    @Prop({ required: true })
    city: string;
  
    @Field(() => String)
    @Prop({ required: true })
    rangoSalarial: string;
  
    @Field(() => String)
    @Prop()
    remoto: string;
  
    @Field(() => String)
    @Prop()
    tipoContrato: string;
  
    @Field(() => String)
    @Prop({ required: true })
    jornada: string;

    @Field(() => [String])
    @Prop()
    competencies: string[];

    @Field(() => String)
    @Prop()
    description: string;

    @Field(() => String)
    @Prop()
    requirements: string;
}
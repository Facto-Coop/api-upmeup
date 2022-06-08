import { Module } from '@nestjs/common';
import { CompanyOffersService } from './company-offers.service';
import { CompanyOffersResolver } from './company-offers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './models/company-offer';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Offer.name,
        schema: OfferSchema,
      },
    ]),
  ],
  providers: [CompanyOffersService, CompanyOffersResolver],
})
export class CompanyOffersModule {}

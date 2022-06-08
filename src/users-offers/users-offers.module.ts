import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersOffer, UsersOfferSchema } from './models/users-offers';
import { UsersOffersResolver } from './users-offers.resolver';
import { UsersOffersService } from './users-offers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UsersOffer.name,
        schema: UsersOfferSchema,
      },
    ]),
  ],
  providers: [UsersOffersResolver, UsersOffersService],
})
export class UsersOffersModule {}

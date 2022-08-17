/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Offer } from './models/company-offer';
import { CompanyOffersService } from './company-offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferInput } from './dto/inputs/update-offer.input';
import { UpdateOfferEnrollInput } from './dto/inputs/update-offerEnroll.input';

@Resolver(() => Offer)
export class CompanyOffersResolver {
  constructor(private readonly coffService: CompanyOffersService) {}

  @Query((returns) => [Offer])
  async getCompanyOffers(): Promise<Offer[]> {
    return await this.coffService.findAll();
  }

  /**
   * Offer By ID
   */
  @Query((returns) => Offer)
  async getOffer(@Args('id') id: string) {
    return this.coffService.getOffer(id);
  }

  /**
   * Mutation: Create new offer resolver
   */
  @Mutation(() => Offer)
  async createOffer(@Args('createOfferDto') createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.coffService.createOffer(createOfferDto);
  }

  /**
   * Mutation: Update Offer
   */
  @Mutation(() => Offer, { name: 'updateOffer' })
  async updateOffer(
    @Args('id') _id: string,
    @Args({ name: 'offerInputs', type: () => UpdateOfferInput }) input: UpdateOfferInput
  ) {
    return await this.coffService.updateOffer(_id, input);
  }

  /**
   * Mutation: Update Value enrolled when click "inscribir".
   */
   @Mutation(() => Offer, { name: 'updateEnrollOffer' })
   async updateEnrollOffer(
     @Args('id') _id: string,
     @Args({ name: 'input', type: () => UpdateOfferEnrollInput }) input: UpdateOfferEnrollInput
   ) {
     return await this.coffService.updateOfferEnrolled(_id, input);
   }

  /*Document de otra colección: */
  /*@ResolveField()
  async user(
      @Parent() offer: OfferDocument,
      @Args('populate') populate: boolean,
  ) {
      if (populate)
          await offer
              .populate({path: 'user', model: User.name})
              .execPopulate();

      return offer.userId;
  }*/
}

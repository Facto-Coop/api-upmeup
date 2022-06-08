/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersOffer } from './models/users-offers';
import { UsersOffersService } from './users-offers.service';
import { CreateUsersOffersInput } from './dto/inputs/create-users-offers.input';

@Resolver()
export class UsersOffersResolver {
  constructor(private readonly usoffService: UsersOffersService) {}

  @Query((returns) => [UsersOffer])
  async getUsersOffers() {
    return this.usoffService.findAllUsersOffers();
  }

  @Mutation((returns) => UsersOffer)
  async createItem(@Args('input') input: CreateUsersOffersInput): Promise<CreateUsersOffersInput> {
    return this.usoffService.createNewReg(input);
  }
}

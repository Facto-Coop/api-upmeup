import { Test, TestingModule } from '@nestjs/testing';
import { UsersOffersResolver } from './users-offers.resolver';

describe('UsersOffersResolver', () => {
  let resolver: UsersOffersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOffersResolver],
    }).compile();

    resolver = module.get<UsersOffersResolver>(UsersOffersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

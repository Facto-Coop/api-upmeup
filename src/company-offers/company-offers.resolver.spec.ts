import { Test, TestingModule } from '@nestjs/testing';
import { CompanyOffersResolver } from './company-offers.resolver';

describe('CompanyOffersResolver', () => {
  let resolver: CompanyOffersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyOffersResolver],
    }).compile();

    resolver = module.get<CompanyOffersResolver>(CompanyOffersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

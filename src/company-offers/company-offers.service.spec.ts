import { Test, TestingModule } from '@nestjs/testing';
import { CompanyOffersService } from './company-offers.service';

describe('CompanyOffersService', () => {
  let service: CompanyOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyOffersService],
    }).compile();

    service = module.get<CompanyOffersService>(CompanyOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

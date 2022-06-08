import { Test, TestingModule } from '@nestjs/testing';
import { UsersOffersService } from './users-offers.service';

describe('UsersOffersService', () => {
  let service: UsersOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOffersService],
    }).compile();

    service = module.get<UsersOffersService>(UsersOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

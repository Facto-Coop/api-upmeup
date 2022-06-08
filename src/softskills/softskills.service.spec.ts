import { Test, TestingModule } from '@nestjs/testing';
import { SoftskillsService } from './softskills.service';

describe('SoftskillsService', () => {
  let service: SoftskillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftskillsService],
    }).compile();

    service = module.get<SoftskillsService>(SoftskillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

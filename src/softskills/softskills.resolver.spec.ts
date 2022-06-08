import { Test, TestingModule } from '@nestjs/testing';
import { SoftskillsResolver } from './softskills.resolver';

describe('SoftskillsResolver', () => {
  let resolver: SoftskillsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftskillsResolver],
    }).compile();

    resolver = module.get<SoftskillsResolver>(SoftskillsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

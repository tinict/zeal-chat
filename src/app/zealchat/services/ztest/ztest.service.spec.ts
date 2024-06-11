import { Test, TestingModule } from '@nestjs/testing';
import { ZtestService } from './ztest.service';

describe('ZtestService', () => {
  let service: ZtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZtestService],
    }).compile();

    service = module.get<ZtestService>(ZtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

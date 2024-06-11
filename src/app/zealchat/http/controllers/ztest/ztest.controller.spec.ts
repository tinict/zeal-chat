import { Test, TestingModule } from '@nestjs/testing';
import { ZtestController } from './ztest.controller';

describe('ZtestController', () => {
  let controller: ZtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZtestController],
    }).compile();

    controller = module.get<ZtestController>(ZtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

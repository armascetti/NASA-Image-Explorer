import { Test, TestingModule } from '@nestjs/testing';
import { MarsService } from './mars.service';

describe('MarsService', () => {
  let service: MarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarsService],
    }).compile();

    service = module.get<MarsService>(MarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

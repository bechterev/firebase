import { Test, TestingModule } from '@nestjs/testing';
import { BookfireService } from './bookfire.service';

describe('BookfireService', () => {
  let service: BookfireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookfireService],
    }).compile();

    service = module.get<BookfireService>(BookfireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

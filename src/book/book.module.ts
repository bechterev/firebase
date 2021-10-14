import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookfireService } from './bookfire/bookfire.service';

@Module({
  controllers: [BookController],
  providers: [BookfireService]
})
export class BookModule {}

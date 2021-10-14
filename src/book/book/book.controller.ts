import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { BookfireService } from '../bookfire/bookfire.service';
import { book } from '../types';

@Controller('api/books')
export class BookController {
    constructor(private bookFire:BookfireService){}
    @Get()
    async getBooks(){
        const values = await this.bookFire.readAll();
        if(values) return values
        else return 'Code:404';
    }
    @Get(':id')
    async getBook(@Param('id') id: string){
        const values = await this.bookFire.read(id);
        if(values) return values
        else return 'Code:404';
    }
    @Get(':id')
    async deleteBook(@Param('id') id: string){
        const values = await this.bookFire.delete(id);
        if(values) return values
        else return 'Code:404';
    }
    @Put(':id')
    async updateBook(@Param('id') id: string,@Body() post: book){
        const values = await this.bookFire.change(id,post);
        if(values) return values
        else return 'Code:404';
    }
    @Post()
    async createBook(@Body() post: book){
        const values = await this.bookFire.create(post);
        if(values) return values
        else return 'Code:404';
    }
}

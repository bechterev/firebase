import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import {book} from '../types';

@Injectable()
export class BookfireService {
    private db = admin.database();
    async create(book:any):Promise<string>{
        const res= await this.db.ref('book').push(book);
        return res.key;
    }
    async read(id:string):Promise<book>{
        const res= await this.db.ref('book').child(id).get();
        if(!res.val()){
            return res.val();
        }
        else throw ('Not value');
    }
    async readAll():Promise<book[]>{
        const res= await this.db.ref('book').get();
        return res.val();
    }
    async change(id:string, data:any):Promise<any>{
        const res= await this.db.ref('book').child(id).update(data);
        if(!res.val()){
            return res.val();
        }
        else throw ('Not values');
    }
    async delete(id:string):Promise<string>{
        await this.db.ref('book').child(id).remove();
        return id;
    }
}

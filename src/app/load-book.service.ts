import { Injectable } from '@angular/core';
import { Book } from '../app/Book';
import { MYBOOK } from '../assets/bookdata';

@Injectable({
  providedIn: 'root'
})
export class LoadBookService {

  constructor() { }

  loadMyBook(): Book[] {
    return MYBOOK;
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { LoadBookService } from '../load-book.service';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {

  myBookData: Book[];
  goodToGo: boolean[] = [];

  constructor(private LoadBook: LoadBookService) { }



 

  loadMyBook(): void {
    this.myBookData = this.LoadBook.loadMyBook();
  }

  onClickMe(i): void{
    this.goodToGo[i] = !this.goodToGo[i];
  }
 





  ngOnInit(): void {
this.loadMyBook();
  }

}

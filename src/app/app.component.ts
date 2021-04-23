import { Component,OnInit } from '@angular/core';
import { Book } from '../app/Book';
import { LoadBookService } from '../app/load-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Final';

  myBookData: Book[];
  goodToGo: boolean[] = [];

  constructor(private LoadBook: LoadBookService) { }





  loadMyBook(): void {
    this.myBookData = this.LoadBook.loadMyBook();
  }

  onClickMe(i): void {
    this.goodToGo[i] = !this.goodToGo[i];
  }






  ngOnInit(): void {
    this.loadMyBook();
  }
}

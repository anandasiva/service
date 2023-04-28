import { Component } from '@angular/core';
import { book } from "./book";
import { bookservice} from "./book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books!: book[];
  bookservice: any;

  constructor(){
   this.bookservice=new bookservice;
  }
  getbooks(){
    this.books=this.bookservice.getbooks();
  }

}

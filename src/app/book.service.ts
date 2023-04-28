import { book } from "./book";

export class bookservice{
    public getbooks(){
        let books:book[];

     books = [
        new book(1,"ECONOMICS",350),
        new book(2, "COMMERCE",480),
        new book(3,"BIOLOGY",500),
     ];
   return books;
 }
}
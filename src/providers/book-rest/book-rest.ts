import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../../models/book.model';

/*
  Generated class for the BookRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookRestProvider {
  private url="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json";

  constructor(public http: HttpClient) {
    console.log('Hello BookRestProvider Provider');
  }
  
  getBookList():Observable<any>
  {
    return this.http.get<book>(this.url);
  }
}

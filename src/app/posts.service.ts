import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  inner = new Subject<string[]>();
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .jsonp('http://demo.tumblr.com/api/read/json?debug=1', 'callback')
      .pipe(
        map((responseData) => {
          return responseData;
        })
      );
  }
}

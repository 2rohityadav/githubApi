import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }
  getUser() {
    const searchText = 'js';
    const url = 'http://api.github.com/search/users?q=' +  searchText;
    this.http.get(url).subscribe(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    )
  }
}

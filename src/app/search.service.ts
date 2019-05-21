import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "http://localhost:8080/app/search";
  constructor(private http: HttpClient) { }

  getCity() {
    return this.http.get(this.url);
  }
}

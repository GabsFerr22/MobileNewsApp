import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private API_URL = 'https://newsapi.org/v2/top-headlines'; 
  private API_KEY = 'b7522dcf07604d0182561b3447456734';

  constructor(private http: HttpClient) {}

  getTopHeadlinesByCategory(category: string): Observable<any> {
    const url = `${this.API_URL}?country=us&category=${category}&apiKey=${this.API_KEY}`; 
    return this.http.get<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {}

  fetch(){
    return this.http.get('assets/mock-api/hero.json');
  }
}

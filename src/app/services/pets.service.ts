import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  url: string = 'http://localhost:3000/petlist'
  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get<Pets[]>(this.url)
  }

  getPet(id: number) {
    return this.http.get<Pets[]>(`${this.url}/${id}`)
  }

  getPetsByType(type: string) {
    return this.http.get<Pets[]>(`${this.url}/${type}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private api: ApiService
  ){}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api.getUrl()}/products`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api.getUrl()}/products/${id}`);
  }

  create(product: Product){
    return this.http.post(`${this.api.getUrl()}/products`, product);
  }

  update(id: number, product: Product){
    return this.http.put(`${this.api.getUrl()}/products/${id}`, product);
  }

  delete(id: number){
    return this.http.delete(`${this.api.getUrl()}/products/${id}`)
  }
}

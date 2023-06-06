import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/diadiem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) {}
  API_URL = "http://localhost:3000/tours"

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.API_URL}`)
  }
  deleteProduct(id:number | string): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.API_URL , product)
  }
  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  getProduct(id: string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }


}

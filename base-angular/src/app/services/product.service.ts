import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prop } from '../interfaces/tour';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) {}
  API_URL = "http://localhost:8080/api"


  getProducts(): Observable<Prop[]>{
    return this.http.get<Prop[]>(`${this.API_URL}`)
  }
  deleteProduct(id:number | string): Observable<Prop>{
    return this.http.delete<Prop>(`${this.API_URL}/${id}`)
  }
  addProduct(product: Prop): Observable<Prop>{
    return this.http.post<Prop>(this.API_URL , product)
  }
  updateProduct(product: Prop): Observable<Prop>{
    return this.http.put<Prop>(`${this.API_URL}/${product.id}`, product)
  }
  getProduct(id: string): Observable<Prop>{
    return this.http.get<Prop>(`${this.API_URL}/${id}`)
  }


}

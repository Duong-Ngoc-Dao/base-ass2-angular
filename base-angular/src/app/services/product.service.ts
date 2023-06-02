import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) {}
  API_URL = "http://localhost:3000/locations"

  getAllProduct(){
    return this.http.get(`${this.API_URL}`)
  }
  addProduct(data: any){
    return this.http.post(this.API_URL , data)
  }
  deleteProduct(id : number){
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  getDetailProduct(id: number){
    return this.http.get(`${this.API_URL}/${id}`)
  }
  editProduct(id: number, data: any){
    return this.http.put(`${this.API_URL}/${id}`, data)
  }
}

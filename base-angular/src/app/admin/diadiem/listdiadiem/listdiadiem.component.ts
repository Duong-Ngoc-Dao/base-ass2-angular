import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listdiadiem',
  templateUrl: './listdiadiem.component.html',
  styleUrls: ['./listdiadiem.component.css']
})
export class ListdiadiemComponent {
  @Input() id: any;
<<<<<<< HEAD
  product: any = [];
  constructor(private ProductServive: ProductService){}
=======
  products: any = [];
//   constructor(private ProductServive: ProductService){}

//   ngOnInit(): void {
//     this.getProducts();
//   }
//   getProducts() {
//     this.ProductServive.getProducts().subscribe(data => this.products = data)
//   }
//   deleteProduct(id: number){
//     this.ProductServive.deleteProduct(id).subscribe(data => {
//       this.products = this.products.filter((item : any) => {
//         return item.id != id
//       })
//     })
    
//   }
// }

constructor(private http: HttpClient) {}
>>>>>>> adb39ddc1b6f425e202ca0ef2fa3c331c272305a

  ngOnInit(): void {
     this.getAllProducts()
  }
<<<<<<< HEAD
  getProducts() {
    this.ProductServive.getProducts().subscribe(data => this.product = data)
  }
  deleteProduct(id: number){
    this.ProductServive.deleteProduct(id).subscribe(data => {
      this.product = this.product.filter((item : any) => {
        return item.id != id
      })
    })

=======

  adminProducts: any

  getAllProducts(): void {
     const limit = 140 // lấy toàn bộ sản phẩm
     const apiUrl = `http://localhost:8080/api/products?_limit=${limit}`
     this.http.get(apiUrl).subscribe((res: any) => {
        console.log(res)
        this.adminProducts = res.docs
     })
>>>>>>> adb39ddc1b6f425e202ca0ef2fa3c331c272305a
  }


// deleteProduct(id: any): void {
//   const apiUrl = `http://localhost:8080/api/products/${id}`;
//   this.http.delete(apiUrl, {headers: {
//     "authorization": "Bearer" + JSON.stringify(localStorage.getItem("token"))
//   }}).subscribe((res: any) => {
//   console.log(res);
  
//   // xóa sản phẩm khỏi danh sách hiển thị
//   this.adminProducts = this.adminProducts.filter((product: any) => id !== product._id);
//   });
  
//   }

}


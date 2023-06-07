import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/diadiem';

@Component({
  selector: 'app-adddiadiem',
  templateUrl: './adddiadiem.component.html',
  styleUrls: ['./adddiadiem.component.css']
})
export class AdddiadiemComponent {
  product: IProduct = {

    name: '', 
    img: '',
    mess: '',
  };
  products!: IProduct[];

  constructor(private productService: ProductService) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        console.log('Product created successfully');
        // Thực hiện các xử lý khác sau khi tạo sản phẩm thành công
      },
      (error) => {  
        console.log('An error occurred while creating product:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}

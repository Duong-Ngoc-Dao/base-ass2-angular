import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/diadiem';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent {
  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductService,
    private router: Router
  ){}

  productForm = this.formBuilder.group({
    location: ['', Validators.required], 
    img: ["https://picsum.photos/200/200"],
    nametour: ['', Validators.required],
    price: [0, Validators.required],
    diachi: ['', Validators.required], 
  })

  onHandleAdd(){
    if(this.productForm.valid){
      const product : IProduct = {
        location: this.productForm.value.location || "", 
        img: this.productForm.value.img || "https://picsum.photos/200/200",
        nametour: this.productForm.value.nametour || "", 
        price: Number(this.productForm.value.price) || 0, 
        diachi: this.productForm.value.diachi || "", 
      }
      this.productService.addProduct(product).subscribe(data => {
        alert("Add product successfully.")
        this.router.navigateByUrl('/admin/quanlitour')
      })
    }    
  }
}
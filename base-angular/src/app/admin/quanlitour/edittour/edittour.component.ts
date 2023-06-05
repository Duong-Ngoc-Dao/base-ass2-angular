import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/diadiem';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edittour',
  templateUrl: './edittour.component.html',
  styleUrls: ['./edittour.component.css']
})
export class EdittourComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    location: [''],
    img: ["https://picsum.photos/200/200"],
    nametour: [''],
    price: [0],
    diachi: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(id).subscribe(
        product => {
          this.product = product;
          this.productForm.patchValue({
            location: product.location,
            img: product.img,
            nametour: product.nametour,
            price: product.price,
            diachi: product.diachi,
          });
        },
        error => {
          console.log(`Error getting product: ${error}`);
        }
      );
    }
  }

  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        ...this.product, // Use spread operator to clone the original product object
        location: this.productForm.value.location || "",
        img: this.productForm.value.img || "https://picsum.photos/200/200",
        nametour: this.productForm.value.nametour || "",
        price: Number(this.productForm.value.price) || 0,
        diachi: this.productForm.value.diachi || "",
      };
      if (!product.id) { 
        this.productService.getProducts().subscribe(products => {
          const maxId = products.reduce((acc: number, cur: any) => cur.id > acc ? cur.id : acc, 0);
          product.id = maxId + 1; 
          this.productService.updateProduct(product).subscribe(data => {
            alert("Update product successfully.")
            this.router.navigateByUrl('/admin/quanlitour')
          });
        });
      } else {
        this.productService.updateProduct(product).subscribe(data => {
          alert("Update product successfully.")
          this.router.navigateByUrl('/admin/quanlitour')
        });
      }
    }
  }

}
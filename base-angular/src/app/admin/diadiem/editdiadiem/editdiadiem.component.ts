import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/diadiem';

@Component({
  selector: 'app-editdiadiem',
  templateUrl: './editdiadiem.component.html',
  styleUrls: ['./editdiadiem.component.css']
})
export class EditdiadiemComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''], 
    img: [''],
    mess: [''],
  })
  constructor(
    private router : Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id:any = param.get('id');
      this.productService.getProductById(id).subscribe(product => {
        // Sản phẩm dựa theo ID
        this.product = product;

        this.productForm.patchValue({
          name: product.name, 
          img: product.img,
          mess: product.mess,
        })
      })
    })

  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "", 
        img: this.productForm.value.img || '',
        mess: this.productForm.value.mess || '',
      }

      this.productService.updateProduct(product).subscribe(data => {
        alert("Update sản phẩm thành công")
        this.router.navigateByUrl('/admin')
      })
    }

  }
}

import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from 'src/app/interfaces/diadiem' 
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-editdiadiem',
  templateUrl: './editdiadiem.component.html',
  styleUrls: ['./editdiadiem.component.css']
})
export class EditdiadiemComponent {
  product!: IProduct
  productForm = this.formBuilder.group({
    name: [''], 
    img: ["https://picsum.photos/200/200"],
    mess: [''], 
  })


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      this.productService.getProduct(id as string).subscribe(product => {
        this.product = product,
        this.productForm.patchValue({
          name: product.name,
          img: product.img,
          mess: product.mess,
        })
      })
    })
  }

  

  onHandleEdit(){
    if(this.productForm.valid){
      const product : IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "", 
        img: this.productForm.value.img || "https://picsum.photos/200/200",
        mess: this.productForm.value.mess || "",
      }
      this.productService.updateProduct(product).subscribe(data => {
        alert("Update product successfully.")
        this.Router.navigateByUrl('/admin/locations')
      })
    }
    
  }
}


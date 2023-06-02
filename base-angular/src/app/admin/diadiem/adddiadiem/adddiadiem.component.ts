import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { IProduct } from 'src/app/interfaces/diadiem'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-adddiadiem',
  templateUrl: './adddiadiem.component.html',
  styleUrls: ['./adddiadiem.component.css']
})
export class AdddiadiemComponent {
  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductService,
    private Router: Router
  ){}

  productForm = this.formBuilder.group({
    location: ['', Validators.required], 
    img: ["https://picsum.photos/200/200"],
    mess: ['', Validators.required], 

  })

  onHandleAdd(){
    if(this.productForm.valid){
      const product : IProduct = {
        location: this.productForm.value.location || "", 
        img: this.productForm.value.img || "https://picsum.photos/200/200",
        mess: this.productForm.value.mess || "", 

      }
      this.productService.addProduct(product).subscribe(data => {
        alert("Add product successfully.")
        this.Router.navigateByUrl('/admin/diadiem')
      })
    }
    
  }
}
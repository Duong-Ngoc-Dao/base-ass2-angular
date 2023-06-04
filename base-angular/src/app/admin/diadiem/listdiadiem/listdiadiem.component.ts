import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listdiadiem',
  templateUrl: './listdiadiem.component.html',
  styleUrls: ['./listdiadiem.component.css']
})
export class ListdiadiemComponent {
  @Input() id: any;
  locations: any = [];
  constructor(private ProductServive: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.ProductServive.getProducts().subscribe(data => this.locations = data)
  }
  deleteProduct(id: number){
    this.ProductServive.deleteProduct(id).subscribe(data => {
      this.locations = this.locations.filter((item : any) => {
        return item.id != id
      })
    })
    
  }
}

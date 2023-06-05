import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listtour',
  templateUrl: './listtour.component.html',
  styleUrls: ['./listtour.component.css']
})
export class ListtourComponent {
  @Input() id: any;
  product: any = [];
  constructor(private ProductServive: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.ProductServive.getProducts().subscribe(data => this.product = data)
  }
  deleteProduct(id: number){
    this.ProductServive.deleteProduct(id).subscribe(data => {
      this.product = this.product.filter((item : any) => {
        return item.id != id
      })
    })
    
  }
}

import { Component, Input } from '@angular/core';
import { Product } from '../../Model/product';
import { ContainerComponent } from '../container/container.component';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product:Product

  @Input()
  ContainerRef: ContainerComponent = undefined

  ngOnInit(){
    this.product = this.ContainerRef.SelectedProduct
  }
}

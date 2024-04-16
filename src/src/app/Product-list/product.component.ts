import { Component, ViewChild } from '@angular/core';
import { ContainerComponent } from './container/container.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //name = "Deepak"
 
  addToCart:number = 0
  product = 
 {
   name:  "Iphone 13",
  price:  999,
  color:  "black",
  discount: 20,
  inStock: 20,
  pImg: "assets/images/mobile.jpg"
}

getDiscount(){
  return this.product.price * (100-this.product.discount)/100
}

getValue(event:any){
  //this.name = event.target.value
}

toIncrease(){
  if(this.addToCart < this.product.inStock){
    this.addToCart++;
  }
  
}

toDecrease(){
  if(this.addToCart > 0){
    this.addToCart--;
  }  
}
///////////////////////////////////
generatedValue : string = ''

ReceivedText(value : string){
  this.generatedValue = value
}

@ViewChild(ContainerComponent) 
ContainerComp : ContainerComponent

}
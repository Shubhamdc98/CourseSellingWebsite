
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../../../Model/product';
@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrl: './prods.component.css'
})
export class ProdsComponent {

@Input()
  child : Product
}

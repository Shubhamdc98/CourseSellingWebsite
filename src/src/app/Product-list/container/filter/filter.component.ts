import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

@Input()
all:number

@Input()
InStock:number

@Input()
OutOfStock:number

selectFilterRadioButton : string = 'all'

@Output()
onChangeEvent : EventEmitter<string> = new EventEmitter<string>()

onFilterChange(){
  this.onChangeEvent.emit(this.selectFilterRadioButton)
}
}

import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  // Optional 2nd argument of @ViewChild()
  // 1. read Use it to read the different token from the queries element
  // 2. static : Determine when the queries is ResolveEnd
  // True is when the view is initialized (before the first change detection) for the first time
  // False if you want it to resolved after every change detection
  
  @ViewChild('instahash') viewELement : ElementRef;

  search = ""
  
  changeSearch(){
    this.search = this.viewELement.nativeElement.value
    this.onSearchText.emit(this.search)
  }
  
  @Output()
  onSearchText : EventEmitter<string> = new EventEmitter<string>()
  
}

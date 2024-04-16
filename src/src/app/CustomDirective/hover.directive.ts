import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private inputEl : ElementRef, private renderer : Renderer2){
   }

   ngOnInit(): void {
     this.renderer.setStyle(this.inputEl.nativeElement, 'font-size', '20px')
     
   }

  @HostBinding('style.backgroundColor') backgroundColor : string = '#282828'
  @HostBinding('style.color')color : string = 'white'
  @HostBinding('style.border')border : string = '#282828 2px solid'
  @HostBinding('style.padding')padding : string = '5px 15px'
  //@HostBinding('style.fontsize')fontsize : string = '20px'

  @HostListener('mouseenter')
  Btn(){
    this.backgroundColor =  'white';
    this.color =  '#282828';
    this.renderer.setStyle(this.inputEl.nativeElement, 'padding', '5px 15px')
    this.border=  '#282828 2px solid';
    //this.renderer.setStyle(this.inputEl.nativeElement, 'font-size', '20px')
  }

  @HostListener('mouseout')
  BtnHover(){
    this.backgroundColor = '#282828'
    this.color = 'white'
    this.border = '#282828 2px solid'
    this.padding = '5px 15px'
  }

}

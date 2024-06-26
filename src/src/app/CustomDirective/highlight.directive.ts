import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef, private renderer: Renderer2) {
   }

   @HostListener('mouseenter') 
   onMouse(){
      this.renderer.addClass(this.element.nativeElement, 'highlighter');
   }

   @HostListener('mouseout')
   Mouseout(){
    this.renderer.removeClass(this.element.nativeElement, 'highlighter')
   }

}

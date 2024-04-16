import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvalability]'
})
export class AvalabilityDirective {

  constructor(private InputEL : ElementRef, private renderer : Renderer2) { }

  @Input() set appAvalability(disable : boolean){
    if(disable){
      this.renderer.addClass(this.InputEL.nativeElement, 'not-Available')
    }
  }

}

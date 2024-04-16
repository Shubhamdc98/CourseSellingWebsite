import { Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[SetBackground]'
})

export class CustomDir{
    //private getElement : ElementRef
    @Input() color : string = 'wheat'
    @Input() backColor : string = 'red'
    //USING ONLY ONE OBJ;
    @Input('SetBackground') SetCustomClrs : {color : string, backColor : string}
    constructor(private InputEl : ElementRef, private render: Renderer2){
        //this.getElement = InputEl
         
    }

    ngOnInit() {
        //this.InputEl.nativeElement.style.color = 'white'
        //this.InputEl.nativeElement.style.backgroundColor = 'wheat'
        // this.render.setStyle(this.InputEl.nativeElement, 'color', this.color);
        // this.render.setStyle(this.InputEl.nativeElement, 'backgroundColor', this.backColor)
        this.render.setStyle(this.InputEl.nativeElement, 'color', this.SetCustomClrs.color)
        this.render.setStyle(this.InputEl.nativeElement, 'backgroundColor', this.SetCustomClrs.backColor)

    }
}
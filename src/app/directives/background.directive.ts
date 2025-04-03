import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class AppHighlight implements OnInit {
    @Input('appHighlight') highlightColor!: string;
    constructor(private elef:ElementRef, private renderer:Renderer2) { }
    ngOnInit(){
        if (this.highlightColor) {
            this.renderer.setStyle(this.elef.nativeElement, 'background-color', this.highlightColor);
        } else {
            this.renderer.setStyle(this.elef.nativeElement, 'background-color', 'yellow');
        }
    }
}
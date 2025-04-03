import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[authPermission]',
    standalone:true,
})
export class AuthPermission implements OnInit { 
    @Input('authPermission') hasPersmission: boolean= true;

    constructor(private elef:ElementRef, private renderer:Renderer2) { }
    
    ngOnInit() {
        if (!this.hasPersmission) {
            this.renderer.setStyle(this.elef.nativeElement, 'display', 'none');
        }
    }
}
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[basicCss]'
})
export class CssHigh implements OnInit{
    constructor(
        private _eleRef:ElementRef
    ){


    }
    ngOnInit(): void {
        console.log(this._eleRef.nativeElement);
        this._eleRef.nativeElement.style.backgroundColor="orange";
        this._eleRef.nativeElement.style.padding="10px";
    }
}
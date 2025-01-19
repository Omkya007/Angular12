import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssRendrer]'
})
export class CssRendrerDirective implements OnInit {

  @Input() hover!:string;
  @Input() default!:string;

  @HostBinding('style.backgroundColor')bgColor:string ='green'

  constructor(
    private _eleRef:ElementRef,
    private _rendrer:Renderer2

  ) { }

  ngOnInit(): void {

    this._rendrer.setStyle(this._eleRef.nativeElement,"background-color","blue");
    this._rendrer.setStyle(this._eleRef.nativeElement,"padding",'10px');
      
  }

  @HostListener('mouseover')
  OnMouse(){
    // this._rendrer.setStyle(this._eleRef.nativeElement,"background-color",this.hover)
    this.bgColor = this.hover;

  }

  @HostListener('mouseout')
  OnMouseOut(){
    // this._rendrer.setStyle(this._eleRef.nativeElement,"background-color",this.default)
    this.bgColor = this.default;        
  }

}

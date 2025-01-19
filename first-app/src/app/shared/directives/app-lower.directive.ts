import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppLower]'
})
export class AppLowerDirective {

  constructor(
   private _eleRef:ElementRef,
       ) { }

    @HostListener('keyup',['$event'])
    Onkeyup(eve:Event){
      let inputCon =(eve.target as HTMLInputElement);
      let val:string = inputCon.value.toLowerCase();
      inputCon.value =val;
    }
}

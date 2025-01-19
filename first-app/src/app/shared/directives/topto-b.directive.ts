import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToptoB]'
})
export class ToptoBDirective {

  constructor() { }

  @HostListener('click',['event'])
  scrollTop(event:Event){
    event?.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    })

  }

}

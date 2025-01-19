import { Directive, HostListener, OnInit, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit{

  constructor(
    private _elementRef: ElementRef,
  ) { }
  ngOnInit(): void {
    this.Credit()
  }

  @HostListener('keyup',['$event'])
  Onkey(event:any){
    let val =event.target as HTMLInputElement;
    console.log(val.value);

    let Correct = val.value.replace(/\s+/g,"");

    if(Correct.length>16){
      Correct = Correct.substring(0,16)
    }

    

    if(/[^\d]/.test(Correct)){
      val.nextElementSibling?.classList.remove('d-none')
    }else{
      val.nextElementSibling?.classList.add('d-none')
    }

    let formatted =this.format(Correct)
    val.value =formatted;
    
    
    
  }

  format(data:string){

    let chunkArr =[];
    for (let i = 0; i<data.length; i+=4) {
      chunkArr.push(data.slice(i,i+4))
      
    }
    return chunkArr.join(' ');

  }

  Credit(){
    let para = document.createElement('p');
    para.className = "text-danger d-none"
    para.innerText="Please Enter the Correct details"

    this._elementRef.nativeElement.parentElement.append(para)
  }

  

}
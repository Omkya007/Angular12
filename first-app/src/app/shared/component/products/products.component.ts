import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector:`app-products`,
    templateUrl:`./products.component.html`,
    styleUrls:[`./products.component.scss`]
})
export class ProductsComponent{
 @ViewChild('prod1') prod1!:ElementRef;
 @ViewChild('prod2') prod2!:ElementRef;  
 searched!:string; 
 god!:string;
 searched3!:string;
 
//  onSearch(eve:Event){
//         let val = (eve.target as HTMLInputElement).value;
//         console.log(val);
//     }


    onSearch(eve:Event){
        let val =(eve.target as HTMLInputElement).value;
        this.searched =val;
    }

    
    // on1(eve:Event){
    //     // let v =(eve.target as HTMLInputElement).value;
    //     // this.search =v;

    //     let val =(eve.target as HTMLInputElement).value;
    //     this.searched3 =val;
    // }

    onGet(ele:any){
        console.log(ele.value);
    }


    Prod(ele:HTMLInputElement){
        console.log(ele.value)
    }

    Prod1(){
        console.log(this.prod1.nativeElement.value);
    }

    Prod2(){
        console.log(this.prod2.nativeElement.value)
    }

}
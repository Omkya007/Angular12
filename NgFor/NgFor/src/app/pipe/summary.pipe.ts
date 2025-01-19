import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string,limit :number=50):string {
        console.log(value,limit ) 

        if(value.length===0){
            return '';
        }
        return value.substring(0,limit)+'...' 
       
    }

}
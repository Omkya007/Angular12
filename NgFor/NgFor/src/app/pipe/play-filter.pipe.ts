import { Pipe, PipeTransform } from '@angular/core';
import { Ifoot } from '../shared/models/foot';

@Pipe({
  name: 'playFilter'
})
export class PlayFilterPipe implements PipeTransform {

  transform(value: Array<Ifoot>, findPlay: string):Array<Ifoot>{

    if(!findPlay){
      return value;
    }
    let footballs:Array<Ifoot> =value.filter(ft=>{
      return ft.position.toLowerCase().includes(findPlay.toLowerCase())
    })
    return footballs;
  }

}

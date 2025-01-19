import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../shared/models/players';

@Pipe({
  name: 'crickFilter'
})
export class CrickFilterPipe implements PipeTransform {

  transform(value: Array<Iplayers>,searchedVal:string):Array<Iplayers> |[]{
    

    if(!searchedVal){
      return value
    }
    let fileterdData:Array<Iplayers> =value.filter(player=>{
     return player.team.toLowerCase().includes(searchedVal.toLowerCase())
    })




    return fileterdData;
  }

}

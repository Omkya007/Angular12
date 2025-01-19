import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tabInter';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  selectedFrame:string='vue';
  tabArr:Array<Itab>=[
    {
      tabTitle:'Angular 12',
      frameWork:'angular',
      tabContent:`<p class="alert alert-info">
    <strong>Angular</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, similique aut. A tempore, consequuntur quos aperiam porro non vero blanditiis?
</p>`
    },
    {
      tabTitle:'React 20',
      frameWork:'react',
      tabContent:`<p class="alert alert-info">
    <strong>React</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, similique aut. A tempore, consequuntur quos aperiam porro non vero blanditiis?
</p>`
    },
    {
      tabTitle:'Vue 20',
      frameWork:'vue',
      tabContent:`<p class="alert alert-info">
    <strong>Vue</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, similique aut. A tempore, consequuntur quos aperiam porro non vero blanditiis?
</p>`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onTab(val:string){
    this.selectedFrame=val;
  }

}

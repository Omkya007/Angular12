import { Component, OnInit } from '@angular/core';
import { Iposts } from './shared/models/posts1';
import { posts } from './shared/conts/posts';
import { Imobile } from './shared/models/mobile';
import { mobileProducts } from './shared/conts/mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgFor';
  postsData!:Array<Iposts>
  postsD!:Array<Iposts>
  mobileData!:Array<Imobile>;
  mobileD!:Array<Imobile>;
  ngOnInit(): void {
      this.postsData=posts
      this.mobileData=mobileProducts
      this.postsD=posts
      this.mobileD=mobileProducts
  }
 
}

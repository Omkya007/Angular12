import { Component, OnInit } from '@angular/core';
import { posts} from '../../models/const';
import { Iposts } from '../../models/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts :Array<Iposts>=[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.allPosts)
  }

}

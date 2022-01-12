import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('alinti', { static: true }) small: ElementRef;
  tumbleLog: any;
  json: any;
  title = '';
  totalPost: number;
  blogDescription: string = '';
  blogs = [];

  constructor(
    private postsService: PostsService,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((data) => {
      console.log(data);
      this.tumbleLog = data;
      this.json = this.tumbleLog.tumblelog;
      this.title = this.json.title;
      this.totalPost = this.tumbleLog['posts-total'];
      this.blogDescription = this.json.description;
      this.blogs = this.tumbleLog.posts;

      this.postsService.inner.next(this.blogs);
    });
  }
}

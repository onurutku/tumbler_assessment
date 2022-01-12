import { Directive, ElementRef, Input } from '@angular/core';
import { PostsService } from './posts.service';

@Directive({
  selector: '[appSelector]',
})
export class SelectorDirective {
  inners: string[] = [];
  constructor(private el: ElementRef, private postsService: PostsService) {
    this.postsService.inner.subscribe((data) => {
      this.inners = data;
    });
    console.log(el.nativeElement.innerHTML);
  }
}

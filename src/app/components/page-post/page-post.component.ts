import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/posts';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {
  post$: Observable<Post>;
  post: Post;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.post$ = this.route.data.map(r => r.content);

    this.post$.subscribe((post) => {
      this.post = post;
    });
  }
}

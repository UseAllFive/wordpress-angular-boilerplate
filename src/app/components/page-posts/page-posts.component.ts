import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../interfaces/page';
import { Post } from '../../interfaces/posts';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.scss']
})
export class PagePostsComponent implements OnInit {
  page$: Observable<Page>;
  page: Page;
  posts$: Observable<Post[]>;
  posts: Post[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page$ = this.route.data.map(r => r.content);
    this.posts$ = this.route.data.map(r => r.posts);

    this.page$.subscribe((page) => {
      this.page = page;
    });

    this.posts$.subscribe((posts) => {
      this.posts = posts;
    });
  }
}

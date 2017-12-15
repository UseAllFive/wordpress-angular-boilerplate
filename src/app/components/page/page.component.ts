import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../interfaces/page';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  page$: Observable<Page>;
  page: Page;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page$ = this.route.data.map(r => r.content);

    this.page$.subscribe((page) => {
      this.page = page;
    });
  }
}

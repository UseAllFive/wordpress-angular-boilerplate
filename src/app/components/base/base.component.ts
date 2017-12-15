import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  header$: Observable<any>;
  footer$: Observable<any>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.header$ = this.route.data.map(r => r.header);
    this.footer$ = this.route.data.map(r => r.footer);
  }
}

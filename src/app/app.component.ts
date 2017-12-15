import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
// import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
declare var window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageClass: string;

  constructor(
    private router: Router,
    private slbs: SlimLoadingBarService,
    // private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    this.router.events.subscribe((event) => {
      this.toggleSlimLoadingBar(event);
    });
  }

  toggleSlimLoadingBar(event) {
    if (event instanceof NavigationStart) {
      this.slbs.start();
    }
    if (event instanceof NavigationEnd ) {
      window.scrollTo(0, 0);
      this.setPageClass(event.url);
      this.slbs.complete();
    }
  }

  setPageClass(slug: string) {
    if (slug === '/') {
      this.pageClass = 'page-home';
    } else {
      this.pageClass = `page${slug.replace(/\//g, '-')}`;
    }
  }
}

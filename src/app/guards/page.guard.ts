import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { WpApiPages } from 'wp-api-angular';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageGuard implements Resolve<any> {
  public pages;

  constructor(
    private wpApiPages: WpApiPages,
    private router: Router
  ) {}

  getPage(slug: string) {
    let page;
    if (this.pages && this.pages.length) {
      page = this.pages.filter(item => item.slug === slug);
      page = page && page.length ? page[0] : null;
    }

    // Go home is page not found
    if (!page) {
      this.router.navigate(['/']);
    }

    return page;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // Get slug of current page
    const slug = route.data.force_slug ? route.data.force_slug : route.url.length > 0 ? route.url[route.url.length - 1].path : 'home';

    // Cache list of pages
    // Get WP page based on slug
    if (!this.pages) {
      return this.wpApiPages.getList().toPromise().then(response => response.json()).then(body => {
        // this.pages = cache( body );
        this.pages = body;
        return this.getPage(slug);
      }).catch(error => {
        console.log('ERROR retrieving WP Pages list');
        return {error: error};
      });
    } else {
      return this.getPage(slug);
    }
  }
}

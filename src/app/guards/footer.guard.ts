import { Injectable } from '@angular/core';
import { WpApiPages } from 'wp-api-angular';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FooterGuard implements Resolve<any> {
  public footer;

  constructor(
    private wpApiPages: WpApiPages,
  ) {}

  resolve(): any {
    // Cache list of pages
    if (!this.footer) {
      return this.wpApiPages.getList().toPromise().then(response => response.json()).then(body => {
        if (body && body.length) {
         const  _footer = body.filter(item => item.slug === 'footer');
          this.footer = _footer && _footer.length ? _footer[0] : null;
        }

        return this.footer;
      }).catch(error => {
        console.log('ERROR footer: retrieving WP Pages list');
        return {error: error};
      });
    } else {
      return this.footer;
    }
  }
}

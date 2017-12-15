import { Injectable } from '@angular/core';
import { WpApiPages } from 'wp-api-angular';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeaderGuard implements Resolve<any> {
  public pages;
  public header;

  constructor(
    private wpApiPages: WpApiPages,
  ) {}

  resolve(): any {
    // Cache header page
    if (!this.pages) {
      return this.wpApiPages.getList().toPromise().then(response => response.json()).then(body => {
        const header = body ? body.filter(item => item.slug === 'header') : null;
        this.header = header && header.length ? header[0] : null;
        return this.header;
      }).catch(error => {
        console.log('ERROR header: retrieving WP Pages list');
        return {error: error};
      });
    } else {
      return this.header;
    }
  }
}

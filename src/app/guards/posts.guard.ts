import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsGuard implements Resolve<any> {
  public posts;

  constructor(
    private wpApiPosts: WpApiPosts,
  ) {}

  resolve(): any {
    // Cache list of posts
    if (!this.posts) {
      return this.wpApiPosts.getList().toPromise().then(response => response.json()).then(body => {
        this.posts = body;
        return this.posts;
      }).catch(error => {
        console.log('ERROR posts: retrieving WP Posts list');
        return {error: error};
      });
    } else {
      return this.posts;
    }
  }
}

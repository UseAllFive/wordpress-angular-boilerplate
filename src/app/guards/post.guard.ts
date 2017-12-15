import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostGuard implements Resolve<any> {
  public posts;

  constructor(
    private wpApiPosts: WpApiPosts,
    private router: Router
  ) {}

  getPost(slug: string) {
    let post;
    if (this.posts && this.posts.length) {
      post = this.posts.filter(item => item.slug === slug);
      post = post && post.length ? post[0] : null;
    }

    // Go home is page not found
    if (!post) {
      this.router.navigate(['/blog']);
    }

    return post;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // Get slug of current post
    const slug = route.params.slug;

    // Cache list of posts
    if (!this.posts) {
      return this.wpApiPosts.getList().toPromise().then(response => response.json()).then(body => {
        this.posts = body;
        return this.getPost(slug);
      }).catch(error => {
        console.log('ERROR post: retrieving WP Posts list');
        return {error: error};
      });
    } else {
      return this.getPost(slug);
    }
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGuard } from './guards/page.guard';
import { HeaderGuard } from './guards/header.guard';
import { FooterGuard } from './guards/footer.guard';
import { PostsGuard } from './guards/posts.guard';
import { PostGuard } from './guards/post.guard';
import { BaseComponent } from './components/base/base.component';
import { PageComponent } from './components/page/page.component';
import { PagePostsComponent } from './components/page-posts/page-posts.component';
import { PagePostComponent } from './components/page-post/page-post.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    resolve: {
      header: HeaderGuard,
      footer: FooterGuard
    },
    children: [
      {
        path: 'blog',
        component: PagePostsComponent,
        resolve: {
          content: PageGuard,
          posts: PostsGuard
        }
      },
      {
        path: 'blog/:slug',
        component: PagePostComponent,
        resolve: {
          content: PostGuard,
        }
      },
      {
        path: '**',
        component: PageComponent,
        resolve: {
          content: PageGuard
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

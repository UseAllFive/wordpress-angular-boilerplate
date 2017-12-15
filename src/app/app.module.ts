import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { InlineSVGModule } from 'ng-inline-svg';
import { BaseComponent } from './components/base/base.component';
import { PageComponent } from './components/page/page.component';
import { PageGuard } from './guards/page.guard';
import { HeaderGuard } from './guards/header.guard';
import { FooterGuard } from './guards/footer.guard';
import { PostsGuard } from './guards/posts.guard';
import { PostGuard } from './guards/post.guard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagePostsComponent } from './components/page-posts/page-posts.component';
import { PagePostComponent } from './components/page-post/page-post.component';

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://wp-playground.ua5.land/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    PagePostsComponent,
    PagePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    }),
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [HttpClient, HeaderGuard, FooterGuard, PageGuard, PostsGuard, PostGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SelectorDirective } from './selector.directive';

@NgModule({
  declarations: [AppComponent, SelectorDirective],
  imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

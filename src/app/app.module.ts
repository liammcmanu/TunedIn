import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCardComponent } from './fyp/post-card/post-card.component';
import { FypComponent } from './fyp/fyp.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    FypComponent,
    ProfileCardComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

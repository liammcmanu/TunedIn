import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PostCardComponent } from './fyp/post-card/post-card.component';
import { FypComponent } from './fyp/fyp.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BackgroundComponent } from './background/background.component';
import { AppComponent } from './app.component';
import { SpotifyService } from './services/spotify/spotify.service';

@NgModule({
declarations: [
	AppComponent ,
	PostCardComponent,
	FypComponent,
	ProfileCardComponent,
	ListItemComponent,
	SignInComponent,
	SignUpComponent,
	NotFoundComponent,
	BackgroundComponent,
],
  imports: [
    BrowserModule,
	HttpClientModule,
	ReactiveFormsModule,
	MatSnackBarModule,
	AppRoutingModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

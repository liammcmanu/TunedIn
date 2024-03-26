import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/models/postModel';
import { ViewChild, ElementRef } from '@angular/core';
import { SpotifyService } from './services/spotify/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tunedIn';

  public isSignupOrSignInScreen = false;
  public user: UserModel | undefined;

  @ViewChild('searchInput', { static: false })
  searchInput: ElementRef<HTMLInputElement> | undefined;

  constructor(public appService: AppService, public spotifyService: SpotifyService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
	this.appService.initialising();
	this.router.events.subscribe(() => {
		this.isSignupOrSignInScreen = this.router.url === '/sign-in' || this.router.url === '/sign-up';
	});
	const userId = this.appService.getCurrentUser()
	if (userId) {
		this.appService.findProfile(userId).subscribe((value: any) => {
			this.user = value;
		})
		}
	}

	search() {
		const searchValue = this.searchInput?.nativeElement.value ?? '';
		this.spotifyService.searchSongs(searchValue).subscribe((value: any) => {
			console.log(value);
		});
	}
}

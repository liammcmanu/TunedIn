import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tunedIn';

  public isSignupOrSignInScreen = false;

  constructor(public appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
	this.router.events.subscribe(() => {
		this.isSignupOrSignInScreen = this.router.url === '/sign-in' || this.router.url === '/sign-up';
	});
  }

  public logout() {
	this.appService.setCurrentUser('');
	this.router.navigate(['/sign-in']);
  }
}

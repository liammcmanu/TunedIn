import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/models/postModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tunedIn';

  public isSignupOrSignInScreen = false;
  public user: UserModel | undefined;

  constructor(public appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
	this.appService.initialising();
	this.router.events.subscribe(() => {
		this.isSignupOrSignInScreen = this.router.url === '/sign-in' || this.router.url === '/sign-up';
	});
	this.appService.returnCurrentUser().subscribe((value: any) => {
		const userId = value.id;
		this.appService.findProfile(userId).subscribe((value: any) => {
			this.user = value;
		})
	});
  }

  public logout() {
	this.appService.setCurrentUser('');
	this.router.navigate(['/sign-in']);
  }
}

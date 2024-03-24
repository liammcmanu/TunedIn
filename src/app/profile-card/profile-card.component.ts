import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/postModel';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { set } from 'mongoose';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

	public profile: UserModel | undefined;
	public profiles: UserModel[] | undefined;

	constructor(private _location: Location, public appService: AppService, private router: Router) {}

	ngOnInit() {
		this.appService.initialising();
		this.appService.returnCurrentUser().subscribe((value: any) => {
			if (!value.id) {
				this.router.navigate(['/sign-in']);
			}
		});
		console.log(this.appService.currentUser)
		this.appService.getProfiles.subscribe((profiles: any) => {
			this.profiles = profiles;
			this.profile = profiles[0]
			setTimeout(() => {
				this.appService.loading.next(false);
			}, 1000);
		});
	}

	back() {
		this._location.back();
	}

}


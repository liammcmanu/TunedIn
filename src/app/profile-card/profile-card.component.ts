import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/postModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

	public profile: User | undefined;
	public profiles: User[] | undefined;

	constructor(private _location: Location) {}

	ngOnInit() {
	this.profile = {
		id: '123',
		email: 'mcmanus_liam@yahoo.com',
		displayName: 'mcmanus_liam',
		photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
		emailVerified: true,
		bops: 13,
		stops: 324,
		}
	
	this.profiles = [
		{
			id: '123',
			email: 'mcmanus_liam@yahoo.com',
			displayName: 'mcmanus_liam',
			photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
			emailVerified: true,
			bops: 13,
			stops: 324,
		},
		{
			id: '123',
			email: 'mcmanus_liam@yahoo.com',
			displayName: 'stevenMan',
			photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
			emailVerified: true,
			bops: 13,
			stops: 324,
		},
		{
			id: '123',
			email: 'mcmanus_liam@yahoo.com',
			displayName: 'RapeyRonald',
			photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
			emailVerified: true,
			bops: 13,
			stops: 324,
		},
	]
	}

	back() {
		this._location.back();
	}

}


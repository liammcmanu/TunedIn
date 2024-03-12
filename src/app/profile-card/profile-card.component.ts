import { Component, Input } from '@angular/core';
import { User } from 'src/models/postModel';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

	@Input()
	profile: User | undefined;

}


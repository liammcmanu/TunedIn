import { Component, Input } from '@angular/core';
import { UserModel } from 'src/models/postModel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

	@Input()
	profile: UserModel | undefined;

}

import { Component, Input } from '@angular/core';
import { User } from 'src/models/postModel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

	@Input()
	profile: User | undefined;

}

import { Component } from '@angular/core';
import { User } from 'src/models/postModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tunedIn';

  currentUser: User = {
	id: '123',
	email: 'mcmanus_liam@yahoo.com',
	displayName: 'mcmanus_liam',
	photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
	emailVerified: true,
	}

}

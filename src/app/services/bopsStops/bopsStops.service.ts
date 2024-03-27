import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})

export class BopStopService {

	constructor(private http:HttpClient, private appService: AppService) {
	}

	bopPost(id: any){
		return this.http.post('http://localhost:3000/bopsStops/bop', { post: id, user: this.appService.getCurrentUser()} );
	}

	stopPost(id: any){
		return this.http.post('http://localhost:3000/bopsStops/stop', { post: id, user: this.appService.getCurrentUser()} )
	}

	deleteBop(id: any){
		return this.http.post('http://localhost:3000/bopsStops/deleteBop', { post: id, user: this.appService.getCurrentUser()} )
	}

	deleteStop(id: any){
		return this.http.post('http://localhost:3000/bopsStops/deleteStop', { post: id, user: this.appService.getCurrentUser()} )
	}

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

	constructor(private http:HttpClient) {
	}

	searchSongs(search: any){
		return this.http.post('http://localhost:3000/spotify/search', search)
	}
}
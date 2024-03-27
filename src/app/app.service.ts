import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService{

  private profiles = new BehaviorSubject({})
  private posts = new BehaviorSubject({})
  getProfiles = this.profiles.asObservable();
  getPosts = this.posts.asObservable();

  public currentUser = ''
  public loading = new BehaviorSubject<boolean>(true);

  constructor(private http:HttpClient) {
  }

  initialising() {

	this.http.get('http://localhost:3000/current-user', {responseType: 'text'}).subscribe((value: string) => {
		this.currentUser = value;
	});

	this.http.get('http://localhost:3000/profiles')
	.subscribe((profiles: object) => {
		this.profiles.next(profiles)
    })

	this.http.get('http://localhost:3000/posts')
	.subscribe((posts: any) => {
		this.posts.next(posts)
	})
  }

  createProfile(profile: any){
	this.http.post('http://localhost:3000/profile', profile).subscribe()
  }

  findProfile(id: string){
	return this.http.get('http://localhost:3000/profile', {params: { id: id }});
  }

  setCurrentUser(id: string){
	this.currentUser = id
	this.http.post('http://localhost:3000/current-user', { id: id }).subscribe(
		postedValue => { console.log('posted: ', postedValue); }
	);
  }

  getCurrentUser(){
	const currentUser = this.currentUser
    this.http.get('http://localhost:3000/current-user').subscribe((value: any) => {
      this.currentUser = value
	})
	return currentUser
}

  returnCurrentUser(){
	return this.http.get('http://localhost:3000/current-user')
  }

  authUser(id: string, password: string){
	return this.http.get('http://localhost:3000/authUser', {params: { id: id, password: password }});
  }

  checkDuplicate(username: string){
	return this.http.get('http://localhost:3000/checkDuplicate', {params: { username: username }});
  }

  getPostBops(postId: string){
	return this.http.get('http://localhost:3000/getPostBops', {params: { id: postId }});
  }

  getPostStops(postId: string){
	return this.http.get('http://localhost:3000/getPostStops', {params: { id: postId }});
  }

  userHasBopped(postId: string){
	return this.http.get('http://localhost:3000/userHasBopped', {params: { id: postId }});
  }

  userHasStopped(postId: string){
	return this.http.get('http://localhost:3000/userHasStopped', {params: { id: postId }});
  }
}
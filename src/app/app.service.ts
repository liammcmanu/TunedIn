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

	this.currentUser = localStorage.getItem('currentUser') || '';

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
	console.log(id);
	this.currentUser = id;
	localStorage.setItem('currentUser', id);
  }

  getCurrentUser(){
	return this.currentUser;
  }

  authUser(id: string, password: string) {
	return this.http.get('http://localhost:3000/authUser', {params: { id: id, password: password }})
  }

  checkDuplicate(username: string){
	return this.http.get('http://localhost:3000/checkDuplicate', {params: { username: username }});
  }

  getPostBops(postId: string){
	return this.http.get('http://localhost:3000/bopsStops/getPostBops', {params: { id: postId }});
  }

  getPostStops(postId: string){
	return this.http.get('http://localhost:3000/bopsStops/getPostStops', {params: { id: postId }});
  }

  userHasBopped(postId: string){
	return this.http.get('http://localhost:3000/bopsStops/userHasBopped', {params: { id: postId, user: this.currentUser }});
  }

  userHasStopped(postId: string){
	return this.http.get('http://localhost:3000/bopsStops/userHasStopped', {params: { id: postId, user: this.currentUser }});
  }

}
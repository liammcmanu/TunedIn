import { Component } from '@angular/core';
import { Post, Prompt, Song, User } from 'src/models/postModel';

@Component({
  selector: 'app-fyp',
  templateUrl: './fyp.component.html',
  styleUrls: ['./fyp.component.css']
})
export class FypComponent {

	currentUser: User = {
		id: '123',
		email: 'mcmanus_liam@yahoo.com',
		displayName: 'mcmanus_liam',
		photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
		emailVerified: true,
		bops: 13,
		stops: 324,
	}

	songs: Song[] = [
		{
			name: 'Everything She Wants',
			artist: 'Wham!',
			image: 'https://images.genius.com/555a3ebada9c980f6c256570bc51835b.1000x1000x1.jpg',
			audio: 'https://p.scdn.co/mp3-preview/a30ad785d43fb3497f875dac909de3827dad6e7f?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h?si=3e3e3e3e3e3e3e3e'
		},
		{
			name: 'Shadow on the Sun',
			artist: 'Audioslave',
			image: 'https://i.pinimg.com/474x/25/21/fc/2521fcb9aa1b8647cf4230c3776de057.jpg',
			audio: 'https://p.scdn.co/mp3-preview/28ff311195097bc123db326164aea2fd5a00b0a5?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/album/78guAsers0klWl6RwzgDLd'
		},
		{
			name: 'Back in Black',
			artist: 'AC/DC',
			image: 'https://gcdn.emol.cl/los-80/files/2020/11/ACDC-back-in-black-album.jpg',
			audio: 'https://p.scdn.co/mp3-preview/81e64fa3a306418f6bb51325a93df0c75ea50d42?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj'
		},
		{
			name: 'Stone Free',
			artist: 'Jimmy Hendrix',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Are_You_Experienced_-_US_cover-edit.jpg/1200px-Are_You_Experienced_-_US_cover-edit.jpg',
			audio: 'https://p.scdn.co/mp3-preview/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/track/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c'
		},
		{
			name: 'STARBOY',
			artist: 'THE WEEKEND',
			image: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png',
			audio: 'https://p.scdn.co/mp3-preview/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/track/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c'
		},
		{
			name: 'While my guitar gently wheeps',
			artist: 'The Beetles',
			image: 'https://i1.sndcdn.com/artworks-000144929417-74n783-t500x500.jpg',
			audio: 'https://p.scdn.co/mp3-preview/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c?cid=63de4a74c1264f138c773d26e975b502',
			link: 'https://open.spotify.com/track/6c3a8b4c9c6d0e9f4c0f2e2a9a3b4c5d7e8f3a6c'
		}
	]


	prompts: Prompt[] = [
		{
			name: 'Sweaty Disco Jams',
			body: 'A song that makes you feel like you\'re in a sweaty disco, dancing the night away. 💃🕺'
		},
		{
			name: 'Kickin\' Gnome Grooves',
			body: 'A song that makes you think you could knock out a gnome with a single kick 🍄🧙‍♂️.'
		},
		{
			name: 'Funky Dance Party',
			body: 'A song that makes you want to hit the dance floor and show off your funky moves. 🎶🔥'
		},
		{
			name: 'Epic Guitar Riffs',
			body: 'A song that features an epic guitar riff that will make your head bang. 🎶🔥'
		},
		{
			name: 'I\'m not crying, you are',
			body: 'A song to make you ball your eyes out 😭.'
		}
	]

	posts: Post[] = [
		{
			postDescription: 'Are we whamming it up tonight? 🕺💃',
			song: this.songs[0],
			prompt: this.prompts[0],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 325,
			stops: 324,
		},
		{
			postDescription: 'Gnome grooves for days! 🍄🧙‍♂️',
			song: this.songs[1],
			prompt: this.prompts[1],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 13,
			stops: 124124,
		},
		{
			postDescription: 'Stinky guitar riffs! 🎶🔥',
			song: this.songs[2],
			prompt: this.prompts[2],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 125,
			stops: 21,
		},
		{
			postDescription: 'Dreamy dingo till I die - Sean Macnamara',
			song: this.songs[3],
			prompt: this.prompts[0],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 24,
			stops: 23,
		},
		{
			postDescription: 'Keeping the women away with a shitty stick! 🧙‍♂️',
			song: this.songs[4],
			prompt: this.prompts[3],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 45,
			stops: 35,
		},
		{
			postDescription: 'My guitar been wheeping a long time 😔',
			song: this.songs[5],
			prompt: this.prompts[4],
			profile: this.currentUser,
			userHasBopped: false,
			userHasStopped: false,
			bops: 57,
			stops: 23,
		},
	]

	otherUser: User = {
		id: '231',
		email: 'steve_carrel@yahoo.com',
		displayName: 'steevethepeeve',
		photoURL: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',
		emailVerified: true,
		bops: 13,
		stops: 324,
	}
}

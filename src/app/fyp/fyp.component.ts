import { Component } from '@angular/core';
import { Post } from 'src/models/postModel';

@Component({
  selector: 'app-fyp',
  templateUrl: './fyp.component.html',
  styleUrls: ['./fyp.component.css']
})
export class FypComponent {
	posts: Post[] = [
		{
			profileName: 'Shmexy Lexy',
			profilePicture: 'https://tse3.mm.bing.net/th?id=OIP.SSPcittYk46bK0_NszNVLAHaHa&pid=Api&P=0&h=180',
			
			songName: 'Everything She Wants',
			songArtist: 'Wham!',
			songImage: 'https://images.genius.com/555a3ebada9c980f6c256570bc51835b.1000x1000x1.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Are we whamming it up tonight? 🕺💃',

			promtName: 'Sweaty Disco Jams',
			promtBody: 'A song that makes you feel like you\'re in a sweaty disco, dancing the night away. 💃🕺'
		},
		{
			profileName: 'Jackity Blackity',
			profilePicture: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',

			songName: 'Shadow on the Sun',
			songArtist: 'Audioslave',
			songImage: 'https://i.pinimg.com/474x/25/21/fc/2521fcb9aa1b8647cf4230c3776de057.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Gnome gonna die tonight 😈',

			promtName: 'Kickin\' Gnome Grooves',
			promtBody: 'A song that makes you think you could knock out a gnome with a single kick 🍄🧙‍♂️.'
		},
		{
			profileName: 'Funky Monkey',
			profilePicture: 'http://jstation0.files.wordpress.com/2010/02/funky-monkey-babys-best_cddvd.jpg',
			
			songName: 'Uptown Funk',
			songArtist: 'Mark Ronson ft. Bruno Mars',
			songImage: 'http://4.bp.blogspot.com/-jbwDMfDYhJA/VUSOe07Qd3I/AAAAAAAAKBo/mntiexsEs-g/s1600/uptownfunk.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Get ready to get funky! 🕺💃',

			promtName: 'Funky Dance Party',
			promtBody: 'A song that makes you want to hit the dance floor and show off your funky moves. 🎶🔥'
		},
		{
			profileName: 'Rockin\' Rebel',
			profilePicture: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2016/03/01-1998.jpg',

			songName: 'Back in Black',
			songArtist: 'AC/DC',
			songImage: 'https://gcdn.emol.cl/los-80/files/2020/11/ACDC-back-in-black-album.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Time to rock and roll! 🤘🎸',

			promtName: 'Epic Guitar Riffs',
			promtBody: 'A song that features an epic guitar riff that will make your head bang. 🎶🔥'
		},
		{
			profileName: 'Shmexy Lexy',
			profilePicture: 'https://tse3.mm.bing.net/th?id=OIP.SSPcittYk46bK0_NszNVLAHaHa&pid=Api&P=0&h=180',
			
			songName: 'Everything She Wants',
			songArtist: 'Wham!',
			songImage: 'https://images.genius.com/555a3ebada9c980f6c256570bc51835b.1000x1000x1.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Are we whamming it up tonight? 🕺💃',

			promtName: 'Sweaty Disco Jams',
			promtBody: 'A song that makes you feel like you\'re in a sweaty disco, dancing the night away. 💃🕺'
		},
		{
			profileName: 'Jackity Blackity',
			profilePicture: 'https://tse1.mm.bing.net/th?id=OIP.zE9UoKIthlAzXFQgVgmKqgHaIT&pid=Api&P=0&h=180',

			songName: 'Shadow on the Sun',
			songArtist: 'Audioslave',
			songImage: 'https://i.pinimg.com/474x/25/21/fc/2521fcb9aa1b8647cf4230c3776de057.jpg',
			songAudio: 'https://p.scdn.co/mp3-preview/2cc385470731bc540a08caef5eab31dec7b036a6?cid=63de4a74c1264f138c773d26e975b502',
			
			postDescription: 'Gnome gonna die tonight 😈',

			promtName: 'Kickin\' Gnome Grooves',
			promtBody: 'A song that makes you think you could knock out a gnome with a single kick 🍄🧙‍'
		}
	]
}

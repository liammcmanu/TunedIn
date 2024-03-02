import { Component } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {

	public songName = 'Place in the Sun';
	public songArtist = 'Tania Bowra';

	public postDescription = 'Yo this is a proper good song. It makes me feel like I\'m on a beach in the sun.';

	public promtName = 'Kickin\' Gnome Grooves';
	public promtBody = 'A song that makes you think you could knock out a gnome with a single kick 🍄🧙‍♂️.';
}

import { Component, Input } from '@angular/core';
import { Post } from 'src/models/postModel';

@Component({
	selector: 'app-post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

	@Input()
	post: Post | undefined;

	// Define the fade duration in seconds
	public fadeDuration = 2;
	public audio: HTMLAudioElement;

	constructor() {
		// Create a new audio element
		this.audio = new Audio(this.post?.songAudio);
	}

	// Create a function to fade in the audio
	public fadeIn(audio: HTMLAudioElement) {
	// Set the volume to 0
	audio.volume = 0;

	// Play the audio
	audio.play();

	// Gradually increase the volume
	const interval = setInterval(() => {
		// If the volume is less than 1
		if (audio.volume < 1) {
		// Increase the volume
		audio.volume += 0.01;
		} else {
		// Clear the interval
		clearInterval(interval);
		}
	}, this.fadeDuration * 10);
	}

	// Create a function to fade out the audio
	public fadeOut(audio: HTMLAudioElement) {
	// Gradually decrease the volume
	const interval = setInterval(() => {
		// If the volume is more than 0
		if (audio.volume > 0) {
		// Decrease the volume
		audio.volume -= 0.01;
		} else {
		// Clear the interval
		audio.pause();
		// Reset the audio file to the start
		audio.currentTime = 0;
		// Clear the interval
		clearInterval(interval);
		}
	}, this.fadeDuration * 10);
	}

}
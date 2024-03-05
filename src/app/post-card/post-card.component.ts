import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/models/postModel';

@Component({
	selector: 'app-post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit, OnDestroy {

	@Input()
	post: Post | undefined;

	// Define the fade duration in seconds
	public fadeDuration = 2;
	public audio!: HTMLAudioElement;
	public isPlaying: HTMLElement | null = null;
	public fadeInterval: number | null = null;

	ngOnInit(): void {
		this.audio = new Audio(this.post?.songAudio);
		this.isPlaying = document.getElementById('toggle');
		console.log(this.isPlaying);
	}

	ngOnDestroy() {
		window.removeEventListener('scroll', this.pauseAudio);
		this.isPlaying?.classList.toggle('active');
	}

	@HostListener('window:scroll', ['$event'])
		pauseAudio() {
			if (!this.audio.paused) {
				this.toggleFade();
				this.isPlaying?.classList.toggle('active')
			}
		}

	public play() {
		if (!this.audio.paused) {
			this.toggleFade();
		} else {
			this.toggleFade();
		}
	}

	toggleFade() {
		// Clear any existing fade interval
		if (this.fadeInterval) {
			clearInterval(this.fadeInterval);
			this.fadeInterval = null;
		}

		// If the audio is playing, fade out
		if (!this.audio.paused) {
			this.fadeInterval = window.setInterval(() => {
				if (this.audio.volume > 0.1) {
					this.audio.volume -= 0.1;
				} else {
					// When volume is near 0, clear interval and pause the audio
					clearInterval(this.fadeInterval ?? 0);
					this.audio.pause();
				}
			}, 50);
		} else {
		// If the audio is paused, fade in
		this.audio.play();
		this.fadeInterval = window.setInterval(() => {
			if (this.audio.volume < 1.0) {
				this.audio.volume += 0.1;
			} else {
				// When volume is near 1, clear interval
				clearInterval(this.fadeInterval ?? 0);
			}
		}, 50);
		}
	}

}
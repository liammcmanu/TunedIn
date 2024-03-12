import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/models/postModel';

@Component({
	selector: 'app-post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('toggleButton') toggleButton!: ElementRef;
	@ViewChild('audioProgress') audioProgress!: ElementRef;
	@ViewChild('bop') bopButton!: ElementRef;
	@ViewChild('stop') stopButton!: ElementRef;

	@Input()
	post: Post | undefined;

	// Define the fade duration in seconds
	public fadeDuration = 2;
	public audio!: HTMLAudioElement;
	public isPlaying: HTMLElement | null = null;
	public fadeInterval: number | null = null;

	ngOnInit(): void {
		this.audio = new Audio(this.post?.song.audio ?? '');
		this.isPlaying = document.getElementById('toggle');
	}

	ngOnDestroy(): void {
		window.removeEventListener('scroll', this.pauseAudio);
		this.isPlaying?.classList.toggle('active');
		this.audio.currentTime = 0;
	}

	ngAfterViewInit(): void {
		const updateProgressBar = () => {
			if (this.audio.duration > 0) {
			const progressBar = this.audioProgress.nativeElement as HTMLProgressElement;
			progressBar.value = (this.audio.currentTime / this.audio.duration) * 100;
			}

			// If the audio is not ended, request the next frame
			if (!this.audio.ended) {
			requestAnimationFrame(updateProgressBar);
			}
		};

		this.audio.addEventListener('ended', () => {
			this.audio.currentTime = 0;
			this.audio.play();
		});

		this.audio.addEventListener('play', updateProgressBar);
		}

	@HostListener('window:scroll', ['$event'])
	pauseAudio() {
		if (!this.audio.paused) {
			this.audio.pause();
		}
		this.audio.currentTime = 0;
		this.isPlaying?.classList.remove('active');
	}

	public play() {
		if (!this.audio.paused) {
			this.audio.pause();
		} else {
			this.audio.play();
		}
	}

	public bop() {
		if (this.post) {
			this.post.userHasBopped = !this.post.userHasBopped;
			this.post.userHasStopped = false;
		}
	}

	public stop() {
		if (this.post) {
			console.log('Stopped!');
			this.post.userHasStopped = !this.post.userHasStopped;
			this.post.userHasBopped = false;
		}
	}
}
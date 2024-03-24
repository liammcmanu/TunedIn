import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectId } from 'mongodb';
import { AppService } from 'src/app/app.service';
import { PostModel, UserModel, PromptModel } from 'src/models/postModel';

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
	post: PostModel | undefined;
	user: UserModel | undefined;
	prompt: PromptModel | undefined;
	loading: boolean | undefined;

	public audio!: HTMLAudioElement;
	public isPlaying: HTMLElement | null = null;
	public bops: number | undefined;
	public stops: number | undefined;
	public userHasBopped: boolean | undefined;
	public userHasStopped: boolean | undefined;

	constructor(private router: Router, private appService: AppService) { }

	ngOnInit(): void {
		if (this.post) {
			this.appService.findProfile(this.post.user).subscribe(
				(user: any) => {
					this.user = user
					setTimeout(() => {
						this.loading = false
					}, 2000);
				}
			);
		}
		this.audio = new Audio(this.post?.audio ?? '');
		this.isPlaying = document.getElementById('toggle');
		this.getBops();
		this.getStops();
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

	public getBops() {
		if (this.post?._id) {
			this.appService.getPostBops(this.post?._id).subscribe((value: any) => {
				this.bops = value.count;
			});
		}
	}

	public getStops() {
		if (this.post?._id) {
			this.appService.getPostStops(this.post?._id).subscribe((value: any) => {
				this.stops = value.count;
			});
		}
	}

	public getUserHasBopped() {
		if (this.post?._id) {
			this.appService.userHasBopped(this.post?._id).subscribe((value: any) => {
				this.userHasBopped = value.bopped;
			});
		}
	}

	public getUserHasStopped() {
		if (this.post?._id) {
			this.appService.userHasStopped(this.post?._id).subscribe((value: any) => {
				this.userHasBopped = value.stopped;
			});
		}
	}

	public bop() {
		//
	}

	public stop() {
		// 	if (this.post) {
	}

	public goToProfile(profileId: string | undefined) {
		this.router.navigate(['/profile-page', profileId]);
	}
}
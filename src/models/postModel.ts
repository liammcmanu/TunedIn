export interface Post {
	postDescription: string;
	song: Song;
	prompt: Prompt;
	profile: User;
	userHasBopped: boolean;
	userHasStopped: boolean;
}

export interface Song {
	name: string;
	artist: string;
	image: string;
	audio: string;
	link: string;
}
export interface Prompt {
	name: string;
	body: string;
}

export interface User {
	id: string;
	email: string;
	displayName: string;
	photoURL: string;
	emailVerified: boolean;
}

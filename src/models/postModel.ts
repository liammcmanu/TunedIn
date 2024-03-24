export interface PostModel {
	_id: string;
	songTitle: string;
	songArtits: string;
	songArt: string;
	songLink: string;
	audio: string;
	description: string;
	createdAt: Date;
	user: string;
  }

export interface PromptModel {
	postId: string;
	userId: string;
}

export interface UserModel {
	id: string;
	email: string;
	username: string;
	photoURL: string;
	emailVerified: boolean
	bops: string[];
	stops: string[];
}

// One bop -> One user
// One stop -> One user

// One post -> One song
// One post -> One prompt

// One post -> Many bops
// One post -> Many stops

// One user -> Many posts
// One user -> Many bops
// One user -> Many stops
// One user -> Many playlists

// 
// Everyday you get 5 prompts, these will be randomly generated then you will be given the 
// option to pick a song to go along with the prompt adn this will be your five post for the day
// these posts will be used to fill up the fyp.
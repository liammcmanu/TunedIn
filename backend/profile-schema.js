const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	password: {
	  type: String,
	  required: true
	},
	username: {
	  type: String,
	  required: true
	},
	photoURL: {
	  type: String,
	  required: false
	},
	spotifyLink: {
	  type: String,
	  required: false
	},
	posts: {
	  type: Array,
	  default: []
	},
	matches: {
	  type: [String],
	  default: []
	}
  });

const PostSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	songTitle: {
	  type: String,
	  required: true
	},
	songArtist: {
	  type: String,
	  required: true
	},
	songArt: {
	  type: String,
	  required: true
	},
	spotifyLink: {
	  type: String,
	  required: true
	},
	description: {
	  type: String,
	  default: ''
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	promptID: {
		type: String,
		required: true
	},
    userID: {
		type: String,
		required: true
	  }
  });

const PromptSchema = new mongoose.Schema({
	postId: {
	  type: String,
	  required: true
	},
	userId: {
	  type: String,
	  required: true
	}
});

const bopStopSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	createdAt: {
		type: Date,
		default: Date.now
	  },
	  post: {
		type: String,
		required: true
	  },
	  user: {
		type: String,
		required: true
	}
});

const user = mongoose.model('users', UserSchema)
const posts = mongoose.model('posts', PostSchema)
const prompts = mongoose.model('prompts', PromptSchema)
const bops = mongoose.model('bops', bopStopSchema)
const stops = mongoose.model('stops', bopStopSchema)

module.exports = {
	user,
	posts,
	prompts,
	bops,
	stops
};

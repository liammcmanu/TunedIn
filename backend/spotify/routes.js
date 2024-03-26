var express = require("express");
var spotifyService = require("./spotify.service.js");
var router = express.Router();

router.get("/song", async (req, res) => {
	const query = req.query.q;
	const songs = await spotifyService.searchSongs(query);
	songs.forEach(song => {
		song.preview_url = song.preview_url ? song.preview_url : song.external_urls.spotify;
		console.log('Song:', song.name, song.preview_url);
	});
	res.send(songs);
});

module.exports = router;
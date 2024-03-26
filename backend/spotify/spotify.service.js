const axios = require('axios');
const qs = require('qs');
const cron = require('node-cron');
const express = require('express');

var bearerToken = '';

async function searchSongs(query) {
	try {
		const response = await axios.get('https://api.spotify.com/v1/search', {
			headers: {
				'Authorization': `Bearer ${bearerToken}`
			},
			params: {
				q: query,
				type: 'track',
				limit: 20,
				offset: 0,
				include_external: 'audio',
				sort: 'popularity'
			}
		});

		const { items } = response.data.tracks;
		return items;

	} catch (error) {
		console.error('Error searching songs:', error);
		return [];
	}
}

async function generateBearerToken() {
  try {
    const data = {
      grant_type: 'client_credentials',
      client_id: '63de4a74c1264f138c773d26e975b502',
      client_secret: '26c31113f68544e68599a91a12aa158d'
    };

    const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const access_token = response.data.access_token;
	console.log('Generated bearer token:', access_token)
    bearerToken = access_token;

  } catch (error) {
    console.error('Error generating bearer token:', error);
  }
}

cron.schedule('0 * * * *', () => {
  generateBearerToken();
});

generateBearerToken();

module.exports = {
	searchSongs
};
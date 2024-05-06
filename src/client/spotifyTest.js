// npm i spotify-api.js@latest <<-- TERMINAL? SCARED TO DO THIS SO KEEPING A COMMENT 

//sets up the spotify client 
const Spotify = require("spotify-api.js");
const client = new Spotify.Client({ token: 'token' });
console.log(await client.tracks.get('id'));

// https://spotify-api.js.org/

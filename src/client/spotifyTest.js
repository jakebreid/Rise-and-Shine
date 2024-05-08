// npm i spotify-api.js@latest <<-- TERMINAL? SCARED TO DO THIS SO KEEPING A COMMENT 
import fetch from 'node-fetch';
//sets up the spotify client 
// const Spotify = require("spotify-api.js");
// const client = new Spotify.Client({ token: 'token' });
// console.log(await client.tracks.get('id')); 

// https://spotify-api.js.org/


// const spotifyEndpoint = "https://api.spotify.com/v1/browse/featured-playlists"; // ENDPOINT TO BROWSE FEATURED PLAYLISTS

//sets up with my client id and client secret 
const clientID= '18639efb094a4225ba13cff44084544e'; 
const clientSecret = '3fcd5395f6464ac182d28227fd8e5edf'; 
//endpoint URLS 
const tokenURL = 'https://accounts.spotify.com/api/token'; 
const baseURL = 'https://api.spotify.com/v1'; 

//async function to get the access token 
async function getAccessToken() { 
    const response = await fetch(tokenURL, { 
        method: 'POST', 
        headers: { 
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization': 'Basic '  + btoa(clientID + ':' + clientSecret)
        }, 
        body: 'grant_type=client_credentials'
    }); 
    const data = await response.json(); 
    return data.access_token
}

//async function to make GET requests 
async function makeRequest(url) { 
    const accessToken = await getAccessToken(); 
    const response = await fetch(url, { 
        method: 'GET', 
        headers: {
            'Authorization' : 'Bearer '  + accessToken
        }
    }); 
    return await response.json(); 
}

//connect it to featured elements (playlist, artist, podcast, album)
//because of the scope of my programming abilities + time constraints, these are NOT personalized reccomendations
async function fetchSpotifyData() { 
    const accessToken = await getAccessToken(); 
    const playlistID= '37i9dQZF1DXcBWIGoYBM5M'; //"Today's Top Hits"
    const artistID = '4LLpKhyESsyAXpc4laK94U'; // Mac Miller 
    const albumID = '4m2880jivSbbyEGAKfITCa' ; //Random Access Memories by Daft Punk
    const podcastID = '3DgfoleqaW61T2amZQKINx'; // Crime Junkie
    //get the playlist 
    const playlistURL = `${baseURL}/playlists/${playlistID}`; 
    const playlistData= await makeRequest(playlistURL, accessToken); 
    document.getElementById('playlist').textContent = playlistData.name; //sets the text of the playlist ID to "Today's Top Hits"
    //get the artist 
    const artistURL = `${baseURL}/artists/${artistID}`; 
    const artistData= await makeRequest(artistURL, accessToken); 
    document.getElementById('artist').textContent = artistData.name; //sets the text of the artist ID to "Mac Miller"
    //get the album 
    const albumURL = `${baseURL}/albums/${albumID}`; 
    const albumData= await makeRequest(albumURL, accessToken); 
    document.getElementById('album').textContent = albumData.name; //sets the text of the album ID to "Random Access Memories"
    //get the podcast 
    const podcastURL = `${baseURL}/podcasts/${podcastID}`; 
    const podcastData= await makeRequest(podcastURL, accessToken); 
    document.getElementById('podcast').textContent = podcastData.name; //sets the text of the Podcast ID to "Crme Junkie"
}

fetchSpotifyData(); 
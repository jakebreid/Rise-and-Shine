// // npm i spotify-api.js@latest <<-- TERMINAL? SCARED TO DO THIS SO KEEPING A COMMENT 

// //sets up the spotify client 
// const Spotify = require("spotify-api.js");
// const client = new Spotify.Client({ token: 'token' });
// console.log(await client.tracks.get('id')); 

// // https://spotify-api.js.org/


// const spotifyEndpoint = "https://api.spotify.com/v1/browse/featured-playlists"; // ENDPOINT TO BROWSE FEATURED PLAYLISTS

//sets up with my client id and client secret 
const clientID= '18639efb094a4225ba13cff44084544e'; 
const clientSecret = '3fcd5395f6464ac182d28227fd8e5edf'; 
//endpoint URLS 
const tokenURL = 'https://accounts.spotify.com/api/token'; 
const baseURL = 'https://api.spotify.com/vi'; 

//async function to get the access token 
async function getAccessToken() { 
    const response = await fetch(tokenURL, { 
        method: 'POST', 
        headers: { 
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization': 'Basic' + btoa(clientID + ':' + clientSecret)
        }, 
        body: 'grant_type=client_credentials'
    }); 
    const data = await response.json(); 
    return data.accessToken
}

//async function to make GET requests 
async function makeRequest(url) { 
    const accessToken = await getAccessToken(); 
    const response = await fetch(url, { 
        method: 'GET', 
        headers: {
            'Authorization' : 'Bearer' + accessToken
        }
    }); 
    return await response.json(); 
}

//connect it to featured elements (playlist, artist, podcast, album)
//because of the scope of my programming abilities + time constraints, these are NOT personalized reccomendations
async function mainUsage() { 
    const playlistID= '37i9dQZF1DXcBWIGoYBM5M'; //"Today's Top Hits"
    const artistID = '4LLpKhyESsyAXpc4laK94U'; // Mac Miller 
    const albumID = '4m2880jivSbbyEGAKfITCa' ; //Random Access Memories by Daft Punk
    const podcastID = '3DgfoleqaW61T2amZQKINx'; // Crime Junkie
    //get the playlist 
    const playlistINFO = await makeRequest(`${baseURL}/playlists/${playlistID}`); 
    console.log("Playlist: ", playlistINFO.name); //prints the playlist Name ("Today's Top Hits")
    //get the artist 
    const artistINFO = await makeRequest(`${baseURL}/artists/${artistID}`); 
    console.log("Artist:" , artistINFO.name); //prints the Artist Name (Mac Miller)
    //get the album 
    const albumINFO = await makeRequest(`${baseURL}/albums/${albumID}`); 
    console.log("Album: ", albumINFO.name); //prints the album name (Random Access Memories)
    //get the podcast 
    const podcastINFO = await makeRequest(`${baseURL}/podcasts/${podcastID}`); 
    console.log("Podcast: ", podcastINFO.name); //prints the podcast name (Crime Junkie)
}

mainUsage(); 
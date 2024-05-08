// npm i spotify-api.js@latest <<-- TERMINAL? SCARED TO DO THIS SO KEEPING A COMMENT 

//sets up the spotify client 
const Spotify = require("spotify-api.js");
const client = new Spotify.Client({ token: 'token' });
console.log(await client.tracks.get('id')); 

// https://spotify-api.js.org/


const spotifyEndpoint = "https://api.spotify.com/v1/browse/featured-playlists"; // ENDPOINT TO BROWSE FEATURED PLAYLISTS
const spotifyParams = {
    // Replace with Spotify API parameters
};

const fetchData = async () => {
    const response = await fetch(spotifyEndpoint, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer your_access_token', // Replace with your Spotify access token <<-- unsure where to find this ?????
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(spotifyParams), // Uncomment and modify if needed
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
};

const processData = (data) => {
    // Process Spotify API response data here
    console.log(data);
};

(async () => {
    try {
        const spotifyData = await fetchData();
        processData(spotifyData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();
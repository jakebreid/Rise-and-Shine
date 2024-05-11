    // Set up Spotify API credentials
    const clientId = '18639efb094a4225ba13cff44084544e'; 
    const clientSecret ='3fcd5395f6464ac182d28227fd8e5edf'; 
    const authUrl = 'https://accounts.spotify.com/api/token';
    const apiUrl = 'https://api.spotify.com/v1';

    // Function to get access token
    async function getAccessToken() {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        return data.access_token;
    }

    // Function to search for playlists
    async function searchPlaylists(query, accessToken) {
        const response = await fetch(`${apiUrl}/search?q=${encodeURIComponent(query)}&type=playlist`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data;
    }

    // Function to get playlist details
    async function getPlaylist(playlistId, accessToken) {
        const response = await fetch(`${apiUrl}/playlists/${playlistId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data;
    }

    // Function to display the list of songs
    function displaySongs(playlistDetails) {
        const playlistDiv = document.getElementById('playlist');
        playlistDiv.innerHTML = ''; // Clear previous content
        playlistDetails.tracks.items.forEach((track, index) => {
            const trackName = track.track.name;
            const artists = track.track.artists.map(artist => artist.name).join(', ');
            const trackElement = document.createElement('p');
            trackElement.textContent = `${index + 1}. ${trackName} - ${artists}`;
            playlistDiv.appendChild(trackElement);
        });
    }

    //initialize ten artists, and then they will be used on a rotation --> doing this due to confusion about if you can generate a random artist cus the artist id is highly highly unique 
    const artistOptions = [
{ 
    name: "Kendrick Lamar",  
    artistId: "2YZyLoL8N0Wb9xBt1NhZWg"
}, 
{ 
    name: "The Grateful Dead", 
    artistId: '4TMHGUX5WI7OOm53PqSDAT'
}, 
{ 
    name: "Daft Punk", 
    artistId: '4tZwfgrHOc3mvqYlEYSvVi'
}, 
{ 
    name: "Taylor Swift", 
    artistId: '06HL4z0CvFAxyc27GXpf02'
    
}, 
{
    name: "Lana Del Rey", 
    artistId: '00FQb4jTyendYWaN8pK0wa'
}, 
{ 
    name: "The Beatles", 
    artistId: '3WrFJ7ztbogyGnTHbHJFl2'
    
}, 
{
    name: "Fleetwood Mac", 
    artistId: '08GQAI4eElDnROBrJRGE0X'
}, 
{ 
    name: "Red Hot Chili Peppers", 
    artistId: '0L8ExT028jH3ddEcZwqJJ5'
    
}, 
{
    name: "Aretha Franklin", 
    artistId: '7nwUJBm0HE4ZxD3f5cy5ok'
}, 
{  
    name: "Bad Bunny", 
    artistId: '4q3ewBCX7sLwd24euuV69X'
} ]; 

 // Function to fetch artist details by ID
 async function getArtist(artistId, accessToken) {
        const response = await fetch(`${apiUrl}/artists/${artistId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data;
    }

    // Function to fetch a random artist from the list of artist options
    function getRandomArtist(artistOptions) {
        const randomIndex = Math.floor(Math.random() * artistOptions.length);
        return artistOptions[randomIndex];
    }

    // Function to update the random artist on the page
async function updateRandomArtist(artistOptions) {
const accessToken = await getAccessToken();
const randomArtist = getRandomArtist(artistOptions);
const artistName = randomArtist.name;
const artistId = randomArtist.artistId;

try {
    const artistDetails = await getArtist(artistId, accessToken);
    console.log("Random Artist Name:", artistName);
    // Display the artist name on the HTML page
    const artistDiv = document.getElementById('artist');
    artistDiv.innerHTML = `<p>${artistName}</p>`;
} catch (error) {
    console.error("Error fetching artist:", error);
}
}

    // Call updateRandomArtist when the page loads
    window.onload = function() {
        updateRandomArtist(artistOptions);
    };
//initialize ten albums, and then they will be used on a rotation --> doing this due to confusion about if you can generate a random album cus the artist id is highly highly unique 
const albumOptions = [
{ 
    name: "What's Going On",  
    artist: "Marvin Gaye", 
    albumId: "2v6ANhWhZBUKkg6pJJBs3B"
}, 
{ 
    name: "Pet Sounds",  
    artist: "The Beach Boys", 
    albumId: "2CNEkSE8TADXRT2AzcEt1b"
}, 
{ 
    name: "Blue",  
    artist: "Joni Mitchell", 
    albumId: "1vz94WpXDVYIEGja8cjFNa"
}, 
{ 
    name: "Songs In The Key Of Life",  
    artist: "Stevie Wonder", 
    albumId: "6YUCc2RiXcEKS9ibuZxjt0"
}, 
{
    name: "Revolver(Remastered)",  
    artist: "The Beatles", 
    albumId: "3PRoXYsngSwjEQWR5PsHWR"
}, 
{ 
    name: "Nevermind",  
    artist: "Nirvana", 
    albumId: "2guirTSEqLizK7j9i1MTTZ"
    
}, 
{
    name: "Purple Rain",  
    artist: "Prince", 
    albumId: "7nXJ5k4XgRj5OLg9m8V3zc"
}, 
{ 
    name: "Blood On The Tracks",  
    artist: "Bob Dylan", 
    albumId: "4WD4pslu83FF6oMa1e19mF"
    
}, 
{
    name: "The Miseducation Of Lauryn Hill",  
    artist: "Lauryn Hill", 
    albumId: "1BZoqf8Zje5nGdwZhOjAtD"
}, 
{  
    name: "London Calling (Expanded Edition)",  
    artist: "The Clash", 
    albumId: "3TZuLZx0zB3Q45aQXDswb9"
} ]; 


// Function to fetch album details by ID
async function getAlbum(albumId, accessToken) {
        const response = await fetch(`${apiUrl}/albums/${albumId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data;
    }

    // Function to fetch a random album from the list of artist options
    function getRandomAlbum(albumOptions) {
        const randomIndex = Math.floor(Math.random() * albumOptions.length);
        return albumOptions[randomIndex];
    }

    // Function to update the random album on the page
async function updateRandomAlbum(albumOptions) {
const accessToken = await getAccessToken();
const randomAlbum = getRandomAlbum(albumOptions);
const albumName = randomAlbum.name;
const artistOfAlbum = randomAlbum.artist;
const albumId = randomAlbum.albumId

try {
    const albumDetails = await getAlbum(albumId, accessToken);
    console.log("Random Album Name:", albumName, "By: ", artistOfAlbum);
    // Display the artist name on the HTML page
    const albumDiv = document.getElementById('album');
    albumDiv.innerHTML = `<p>${albumName} By ${artistOfAlbum}</p>`;
} catch (error) {
    console.error("Error fetching album:", error);
}
}

    // Call updateRandomArtist when the page loads
    window.onload = function() {
        updateRandomAlbum(albumOptions);
        updateRandomArtist(artistOptions);
    };

async function main() {
        try {
            const accessToken = await getAccessToken();
            const playlists = await searchPlaylists('Global Top 50', accessToken);
            if (playlists.playlists.items.length > 0) {
                const playlistId = playlists.playlists.items[0].id;
                const playlistDetails = await getPlaylist(playlistId, accessToken);
                console.log("Playlist Name:", playlistDetails.name);
                console.log("Number of Tracks:", playlistDetails.tracks.total);
                displaySongs(playlistDetails);
            } else {
                console.log("No global charts playlist found.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    // Call the main function
    main();
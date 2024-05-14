// Set up Spotify API credentials 
const clientId = '18639efb094a4225ba13cff44084544e'; 
const clientSecret ='3fcd5395f6464ac182d28227fd8e5edf'; 
const authUrl = 'https://accounts.spotify.com/api/token';
const apiUrl = 'https://api.spotify.com/v1';

// This function gets the accesstoken, which is needed to verify all credentials and allow for use of the Spotify API
async function getAccessToken() { 
    const response = await fetch(authUrl, { 
        method: 'POST', 
        headers: { 
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic '+ btoa(clientId + ':' + clientSecret)
        }, 
        body: 'grant_type=client_credentials'
    });
    const data = await response.json(); 
    return data.access_token; //developed using the spotify API documentation 
}

// This function is used to search for playlists based on a query and the access token 
async function searchPlaylists(query, accessToken) { 
    const response = await fetch(`${apiUrl}/search?q=${encodeURIComponent(query)}&type=playlist`, { 
        method: 'GET', 
        headers: { 
            'Authorization' : 'Bearer ' + accessToken
        } 
    }); 
    const data = await response.json(); 
    return data;  //developed using the spotify API documentation
}

//This function is used to get the details of a playlist, using the playlistID and the access token 
async function getPlaylist(playlistId, accessToken) { 
    const response = await fetch(`${apiUrl}/playlists/${playlistId}`, { 
        method: 'GET', 
        headers: { 
            'Authorization' : 'Bearer ' + accessToken
        } 
    });
    const data = await response.json(); 
    return data; 
}

//This function is used to display the list of every song and artist in the playlist. Ties into spotify.html to display for the UI 
function displaySongs(playlistDetails) { 
    const playlistDiv = document.getElementById('playlist'); 
    playlistDiv.innerHTML = " "; //clears the content 
    playlistDetails.tracks.items.forEach((track, index) => { //for each track of each index in the playlist, do the following
        const trackName = track.track.name; //syntax given from Spotify
        const artists = track.track.artists.map(artist => artist.name).join(", "); //mas the artist(s) name(s) to their corresponding track
        const trackElement = document.createElement('p'); //creates a text element for html 
        trackElement.textContent =  `${index + 1}.${trackName} - ${artists}`; // makes it look like " # in playlist. Name-Artist(s)"
        playlistDiv.appendChild(trackElement); //appends generated text to the div
        }); 
    } 
// we have created the way to search for a playlist, get it, and then display it. We have not tied it together (yet); we will after we do 
// the way for randomly generated artists and randomly generated albums


//due to time constraints and logical understanding of the Spotify API, I am going to feed our program a 
//sample of 20 artists, and it will randomly generate one of the twenty each time the page is loaded. 
//i initially wanted to do it for every artist on spotify, but this was outside the scope of my understanding 
const artistOptions = [
    { 
        name: "Kendrick Lamar",  
        artistId: "2YZyLoL8N0Wb9xBt1NhZWg",
        link: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=idr1PSDrR_6y6YwG4wIVnA'
    }, 
    { 
        name: "The Grateful Dead", 
        artistId: '4TMHGUX5WI7OOm53PqSDAT',
        link: 'https://open.spotify.com/artist/4TMHGUX5WI7OOm53PqSDAT?si=OlYA3b8vQtSUx4Ug8Z-4Zw'
    }, 
    { 
        name: "Daft Punk", 
        artistId: '4tZwfgrHOc3mvqYlEYSvVi', 
        link: 'https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi?si=i6UE5KCSQy2HzRsloJm7NQ'
    }, 
    {
        name: "Taylor Swift", 
        artistId: '06HL4z0CvFAxyc27GXpf02', 
        link: 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=rSqonvuPQCu36FduNlY9Tw'
    }, 
    {
        name: "Lana Del Rey", 
        artistId: '00FQb4jTyendYWaN8pK0wa',
        link: 'https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=E5cfFLciQ72v5MgFZ--jUg'
    }, 
    { 
        name: "The Beatles", 
        artistId: '3WrFJ7ztbogyGnTHbHJFl2', 
        link: 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2?si=qEJY7O7mToqti8dwzxMreA'
    }, 
    {
        name: "Fleetwood Mac", 
        artistId: '08GQAI4eElDnROBrJRGE0X',
        link: 'https://open.spotify.com/artist/08GQAI4eElDnROBrJRGE0X?si=wXrWeBH8Re-wi3iO_Cybhw'
    }, 
    { 
        name: "Red Hot Chili Peppers", 
        artistId: '0L8ExT028jH3ddEcZwqJJ5',
        link: 'https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5?si=OjI-9d_fQki6SwImCj_4iA'
    }, 
    {
        name: "Aretha Franklin", 
        artistId: '7nwUJBm0HE4ZxD3f5cy5ok',
        link: 'https://open.spotify.com/artist/7nwUJBm0HE4ZxD3f5cy5ok?si=BblyEwc5RWCHK1iSmozLlw'
    }, 
    {  
        name: "Bad Bunny", 
        artistId: '4q3ewBCX7sLwd24euuV69X', 
        link: 'https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X?si=iPccGG5fTzWI8vQruiYNRw'
    }, 
    { 
        name: "The Weeknd",  
        artistId: "1Xyo4u8uXC1ZmMpatF05PJ",
        link: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=F3DoAB8qRpWdDLHW13KCjg'
    }, 
    { 
        name: "Frank Ocean",  
        artistId: "2h93pZq0e7k5yf4dywlkpM",
        link: 'https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM?si=bdn70ClaQVei1MzEk9usNw'
    },  
    { 
        name: "Micheal Jackson",  
        artistId: "3fMbdgg4jU18AjLCKBhRSm",
        link: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm?si=MrcZb4hrRYqTg4-U7MvC-A'
    }, 
    { 
        name: "Ray Charles",  
        artistId: "1eYhYunlNJlDoQhtYBvPsi",
        link: 'https://open.spotify.com/artist/1eYhYunlNJlDoQhtYBvPsi?si=ay0TFq6jTsO6djDPr0QmFA'
    }, 
    { 
        name: "Beyoncé",  
        artistId: "6vWDO969PvNqNYHIOW5v0m",
        link: 'https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m?si=QQirGy5FT3WHg120ymIcbQ'
    }, 
    { 
        name: "Missy Elliott",  
        artistId: "2wIVse2owClT7go1WT98tk",
        link: 'https://open.spotify.com/artist/2wIVse2owClT7go1WT98tk?si=gaQIsNWNRtiNETpTWwNr_A'
    }, 
    { 
        name: "MF DOOM",  
        artistId: "2pAWfrd7WFF3XhVt9GooDL",
        link: 'https://open.spotify.com/artist/2pAWfrd7WFF3XhVt9GooDL?si=SKSLMkZPQoOmkIzJhNmzjQ'
    },  
    { 
        name: "Wham!",  
        artistId: "5lpH0xAS4fVfLkACg9DAuM",
        link: 'https://open.spotify.com/artist/5lpH0xAS4fVfLkACg9DAuM?si=lqbom18xT36xoIkDxxo5ew'
    },  
    { 
        name: "Miley Cyrus",  
        artistId: "5YGY8feqx7naU7z4HrwZM6",
        link: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6?si=iic0EfN0ThuqExnpMTpbFQ'
    },  
    { 
        name: "Bruno Mars",  
        artistId: "0du5cEVh5yTK9QJze8zA0C",
        link: 'https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C?si=Gtoi4E7JTh2L7vOqz1Ox-w'
    }];  

//This function mimics the getPlaylist function, fetching the artist by ID and accessToken 
async function getArtist(artistId, accessToken) { 
    const response = await fetch(`${apiUrl}/artists/${artistId}`, { 
        method: 'GET', 
        headers: { 
            'Authorization' : 'Bearer ' + accessToken
        } 
    });
    const data = await response.json(); 
    return data; 
}

//This function generates a random index 0-19 (representing one of the artists)
//this index is used to randomly determine which artist will be fetched 
//returns the object of the random artist 
function getRandomArtist(artistOptions){ 
    const randomIndex = Math.floor(Math.random() * artistOptions.length); 
    return artistOptions[randomIndex]; 
}
//This function is used to update the random artist on the HTML page 
async function updateRandomArtist(artistOptions) { 
    const accessToken = await getAccessToken(); //configure the access token
    const randomArtist = getRandomArtist(artistOptions) //gets the random artist 
    //these statements below update various details of the artist so they can be updated in HTML and displayed correctly 
    const artistName = randomArtist.name; 
    const artistId = randomArtist.artistId; 
    const artistLink = document.getElementById("artistLink"); 
    artistLink.href = randomArtist.link; 
    //now, we are debugging, catching errors, sending messages to the console to check the functionality of fetching a random artist, and then displaying the random artist on the page
    try { 
        const artistDetails = await getArtist(artistId, accessToken); 
        console.log("Random Artist Name:", artistName); 
        const artistDiv = document.getElementById("artist"); 
        artistDiv.innerHTML = `<p>${artistName}</p>`; 
        const artistNameElement = document.getElementById("artistName"); 
        artistNameElement.textContent = artistName; 
    } catch (error) { 
        console.error("Error fetching artist:", error); 
    }
}

//now that we have the logic to fetch random artists, we are going to do the same but with random albums

//due to time constraints and logical understanding of the Spotify API, I am going to feed our program a 
//sample of 20 albums, and it will randomly generate one of the twenty each time the page is loaded. 
//i initially wanted to do it for every album on spotify, but this was outside the scope of my understanding 
const albumOptions = [
    { 
        name: "What's Going On",  
        artist: "Marvin Gaye", 
        albumId: "2v6ANhWhZBUKkg6pJJBs3B", 
        link: 'https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B?si=bmQ7icCRSLaR6OKWYp77pg'
    }, 
    { 
        name: "Pet Sounds",  
        artist: "The Beach Boys", 
        albumId: "2CNEkSE8TADXRT2AzcEt1b", 
        link: "https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b?si=s8c8y4FvSdajYizB61PYNQ"
    }, 
    { 
        name: "Blue",  
        artist: "Joni Mitchell", 
        albumId: "1vz94WpXDVYIEGja8cjFNa", 
        link: 'https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa?si=Zf1-HpxwSA6B-J-No1kfWQ'
    }, 
    { 
        name: "Songs In The Key Of Life",  
        artist: "Stevie Wonder", 
        albumId: "6YUCc2RiXcEKS9ibuZxjt0", 
        link: 'https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0?si=7jCJw_bPSX2lXUIvDfBe9Q'
    }, 
    {
        name: "Revolver (Remastered)",  
        artist: "The Beatles", 
        albumId: "3PRoXYsngSwjEQWR5PsHWR", 
        link: 'https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR?si=kAWxJ2BqRbylpVcjPZBLAA'
    }, 
    { 
        name: "Nevermind",  
        artist: "Nirvana", 
        albumId: "2guirTSEqLizK7j9i1MTTZ", 
        link:'https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ?si=DNN0wszwSB-KS0OjqDeZ2Q'
    }, 
    {
        name: "Purple Rain",  
        artist: "Prince", 
        albumId: "7nXJ5k4XgRj5OLg9m8V3zc", 
        link: 'https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=gqw81E3FR3aiJPpNg8xuDA'
    }, 
    { 
        name: "Blood On The Tracks",  
        artist: "Bob Dylan", 
        albumId: "4WD4pslu83FF6oMa1e19mF",
        link: 'https://open.spotify.com/album/4WD4pslu83FF6oMa1e19mF?si=1r3SZWdiRfiBeQaUEne8Nw'
    }, 
    {
        name: "The Miseducation Of Lauryn Hill",  
        artist: "Lauryn Hill", 
        albumId: "1BZoqf8Zje5nGdwZhOjAtD", 
        link: 'https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD?si=OKPLhueLTTiERnphWOkXMg'
    }, 
    {  
        name: "London Calling (Expanded Edition)",  
        artist: "The Clash", 
        albumId: "3TZuLZx0zB3Q45aQXDswb9",
        link: 'https://open.spotify.com/album/3TZuLZx0zB3Q45aQXDswb9?si=_auKtxzRQPivHrP8fWdaOw'
    }, 
    {
        name: "RENAISSANCE",  
        artist: "Beyoncé", 
        albumId: "6FJxoadUE4JNVwWHghBwnb", 
        link: 'https://open.spotify.com/album/6FJxoadUE4JNVwWHghBwnb?si=aUmP1olCS8-mvxIPBnbcFg'
    },
    {
        name: "The Blueprint (Explicit Version)",  
        artist: "JAY-Z", 
        albumId: "69CmkikTHkGKdkrUZTtyWl", 
        link: 'https://open.spotify.com/album/69CmkikTHkGKdkrUZTtyWl?si=hLG7jEQcTd6jqn4Tcy3LCg'
    },
    {
        name: "Back To Black (Deluxe Edition)",  
        artist: "Amy Winehouse", 
        albumId: "0E4xv5gPjykrwBgBZzI8XG", 
        link: 'https://open.spotify.com/album/0E4xv5gPjykrwBgBZzI8XG?si=d_JZ8kk5QiyikoWLr8ysug'
    },
    {
        name: "Kind Of Blue (Legacy Edition)",  
        artist: "Miles Davis ", 
        albumId: "4sb0eMpDn3upAFfyi4q2rw", 
        link: 'https://open.spotify.com/album/4sb0eMpDn3upAFfyi4q2rw?si=3pZP_cmeRViuJJ8XPLVP4g'
    },
    {
        name: "To Pimp A Butterfly",  
        artist: "Kendrick Lamar", 
        albumId: "7ycBtnsMtyVbbwTfJwRjSP", 
        link: 'https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=tEamL-AIRuGODCJdj2Vo_A'
    },
    {
        name: "Hunky Dory (2015 Remastered)",  
        artist: "David Bowie", 
        albumId: "6fQElzBNTiEMGdIeY0hy5l", 
        link: 'https://open.spotify.com/album/6fQElzBNTiEMGdIeY0hy5l?si=M5FthTT8SJerUl1bbh5VDw'
    },
    {
        name: "Watch The Throne",  
        artist: "JAY-Z & Kanye West", 
        albumId: "0OcMap99vLEeGkBCfCwRwS", 
        link: 'https://open.spotify.com/album/0OcMap99vLEeGkBCfCwRwS?si=dhYle0yuQNWJNJnXAfgd_w'
    },
    {
        name: "Exile On Main Street (2010 Re-Mastered)",  
        artist: "The Rolling Stones", 
        albumId: "5U4dnRZsfW8NmwBBkELFPh", 
        link: 'https://open.spotify.com/album/5U4dnRZsfW8NmwBBkELFPh?si=M1A2XjPBQAq8R9PCLiz6Pw'
    },
    {
        name: "Thriller",  
        artist: "Micheal Jackson", 
        albumId: "2ANVost0y2y52ema1E9xAZ", 
        link: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=hdeotY3mReGoAaPVxXH3ZQ'
    },
    {
        name: "Can't Buy A Thrill",  
        artist: "Steely Dan", 
        albumId: "6DlSUW5gmq6Byc3osKDJ2p", 
        link: 'https://open.spotify.com/album/6DlSUW5gmq6Byc3osKDJ2p?si=ExrgHKQyT5SfvvIy14B-Zw'
    }
]; 

//This function mimics the getPlaylist and getArtist function, fetching the album by ID and accessToken 
async function getAlbum(albumId, accessToken) { 
    const response = await fetch(`${apiUrl}/albums/${albumId}`, { 
        method: 'GET', 
        headers: { 
            'Authorization' : 'Bearer ' + accessToken
        } 
    });
    const data = await response.json(); 
    return data; 
}

//This function generates a random index 0-19 (representing one of the albums)
//this index is used to randomly determine which album will be fetched 
//returns the object of the random album
function getRandomAlbum(albumOptions){ 
    const randomIndex = Math.floor(Math.random() * albumOptions.length); 
    return albumOptions[randomIndex]; 
}

//This function is used to update the random album on the HTML page 
async function updateRandomAlbum(artistOptions) { 
    const accessToken = await getAccessToken(); //configure the access token
    const randomAlbum = getRandomAlbum(albumOptions) //gets the random album 
    //these statements below update various details of the album so they can be updated in HTML and displayed correctly 
    const albumName = randomAlbum.name; 
    const artistOfAlbum= randomAlbum.artist; 
    const albumId = randomAlbum.albumId; //hi
    const albumLink = document.getElementById("albumLink");  
    albumLink.href = randomAlbum.link; 
    //now, we are debugging, catching errors, sending messages to the console to check the functionality of fetching a random album, and then displaying the random album on the page
    try { 
        const albumDetails = await getAlbum(albumId, accessToken); 
        console.log("Random Album Name:", albumName, "By: ", artistOfAlbum);
        //display the album on the HTML page 
        const albumDiv = document.getElementById("album"); 
        albumDiv.innerHTML = `<p>${albumName} By ${artistOfAlbum}</p>`;
        const albumNameElement = document.getElementById("albumName");  
        albumNameElement.textContent = `${albumName} By ${artistOfAlbum}`; 
    } catch (error) { 
        console.error("Error fetching album:", error); 
    }
}

//Now, on window refresh, we are going to reload and regenrate the random artist and random album 
window.onload= function() { 
    updateRandomAlbum(albumOptions); 
    updateRandomArtist(artistOptions); 
}

//Here is where we hook it all together. We are creating a main() function that updates the playlist, which stays static, displays it, and is debugged as well. 
//we will call this main function to load the playlist, then we are done! 

async function main(){ 
    try { 
        const accessToken = await getAccessToken(); //configures the needed access token 
        const playlists = await searchPlaylists('Top 50-Global', accessToken); //searches for the "Top 50-Global" playlist 
        const playlistLink = document.getElementById("playlistLink"); 
        playlistLink.href = playlistLink; //updates the HTML element to be the link of the desired playlist 
        if (playlists.playlists.items.length > 0) { 
            const playlistID = playlists.playlists.items[0].id;
            const playlistLink = 'https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF?si=51e61373cd224ea1'; //link to the playlist
            const playlistDetails = await getPlaylist(playlistID, accessToken); 
            console.log("Playlist Name:", playlistDetails.name); //console debugging
            console.log("Number of Tracks:", playlistDetails.tracks.total); //console debugging 
            displaySongs(playlistDetails); //displays the tracks and artist of the tracks in the playlist
            const playlistNameElement = document.getElementById("playlistName"); 
            playlistNameElement.textContent = playlistDetails.name; 
        } else { //if playlist is not found
            console.log("Top 50-Global Playlist not found.")
        }
    } catch (error) { 
        console.error("Error:", error); 
    }
} 

//call the main function, tie it all together, and we're good! 
main(); 
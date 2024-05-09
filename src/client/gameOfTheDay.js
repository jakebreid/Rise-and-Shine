const games = [
    { 
        name: "The Mini", 
        link: "https://www.nytimes.com/crosswords/game/mini", 
        image: 'NYTmini.png'
    }, 
    { 
        name: "The Wordle", 
        link: "https://www.nytimes.com/games/wordle/index.html", 
        image: 'NYTwordle.png'
    }, 
    { 
        name: "The Spelling Bee", 
        link: "https://www.nytimes.com/puzzles/spelling-bee", 
        image: 'NYTspellingbee.png'
    }, 
    { 
        name: "The Connections", 
        link: "https://www.nytimes.com/games/connections", 
        image: 'NYTconnections.png'
    }
];  //initializes all games in a data structure. For complexity reasons, I am sticking to these four games. 

function getRandomGame(games){ 
    const randomIndex = Math.floor(Math.random()*games.length); 
    return games[randomIndex]; //returns a randomly generated index 0-3, representing one of the games 
}

function updateRandomGame(games){ 
    const randomGame = getRandomGame(games); 
   //updates photo 
   const gameImage = document.getElementById('gameImage'); 
   gameImage.src = randomGame.image; 
   //update game link 
   const gameLink = document.getElementById('gameLink'); 
   gameLink.href = randomGame.link; 
   gameLink.textContent = `Play ${randomGame.name}`; 
}
//call updateRandomGame when the page loads and updates the random game and the random photo
window.onload = function(){ 
    updateRandomGame(games); 
}; 


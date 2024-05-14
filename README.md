# CS326-Team-Project

Milestone 2: 
Our team project just needs to be run with npm run milestone-02. When you run it, it will prompt you to enter your name 
which will be stored in PouchDB. From there, you are free to interact with all of the views and data that is presented to you. Other
than that our application is very intuitive! 

Milestone 4: 
To run our project, use npm start to run. 


Weather Element: 
Fetches weather from an open weather map API. Utilizes a API key and the users current latitude and longitude to fetch the current weather for the user, as well as the weather from 3pm over the course of the next 5 days for the user and displays it. More details are included in our video! 

Spotify Element: 
Our Spotify Element uses the Spotify API, and the documentation is located here: https://developer.spotify.com/documentation/web-api. We had to log in with a Spotify account and register our project as a Web Application. Doing so grants you with a CLIENT ID and a CLIENT SECRET, which are needed for API authorization and grant you an ACCESS TOKEN. The access token is used in all API requests/fetches. Without this access token, you cannot access any data from Spotify. Then, I created functions using my access token to retrieve metadata, such as playlistId, albumId, and artistId. We used GET methods with authorization: (access token) in order to retrieve playlist details, artist details, and album details. To run our code related to Spotify, no modifications need to be done. One could add more artists and albums to the working array, or add more criteria such as genre and rely solely on fetching random artists and albums. However, the client id, client secret, and access token persist as long as you are connected to localhost 3260/static, and therefore you will not need to create any new authorization methods to use fetch calls.
    KEY ELEMENTS: client id, client secret, access token, and GET methods. 

News Elements:
Fetch news articles from New York Times, The Guardian, and Miscellaneous news sources. Each API has a key and takes a news category as a search query. The category is taken from the dropdown menu with id "categories" and is used in each string to fetch relevant news data. The Guardian and THeNewsAPI also take dates to ensure the user receives relevant and up to date articles in their feed. 

Built in Location Data:
We use a built in Javascript API which allows us to ask for location data fromm users. This takes the machine's location and updates it whenever they move locations. This is implemented in script.js with the call to navigator.geolocation.watchPosition(). This function takes in two functions as parameters: The first is on success, where the location data is used in the weather API calls, the second is on error, where the error is returned to the console. 
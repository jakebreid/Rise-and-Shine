# CS326-Team-Project

Milestone 2: 
Our team project just needs to be run with npm run milestone-02. When you run it, it will prompt you to enter your name 
which will be stored in PouchDB. From there, you are free to interact with all of the views and data that is presented to you. Other
than that our application is very intuitive! 

Milestone 4: 
To run our project, use npm start to run. 

Spotify Element: 
Our Spotify Element uses the Spotify API, and the documentation is located here: https://developer.spotify.com/documentation/web-api. We had to log in with a Spotify account and register our project as a Web Application. Doing so grants you with a CLIENT ID and a CLIENT SECRET, which are needed for API authorization and grant you an ACCESS TOKEN. The access token is used in all API requests/fetches. Without this access token, you cannot access any data from Spotify. Then, I created functions using my acesss token to retrieve metadata, such as playlistId, albumId, and artistId. We used GET methods with authorization: (access token) in order to retrieve playlist details, artist details, and album details. To run our code related to Spotify, no modifications need to be done. One could add more artists and albums to the working array, or add more criteria such as genre and rely solely on fetching random artists and albums. However, the client id, client secret, and access token persist as long as you are connected to localhost 3260/static, and therefore you will not need to create any new authorization methods to use fetch calls.
    KEY ELEMENTS: client id, client secret, access token, and GET methods. 
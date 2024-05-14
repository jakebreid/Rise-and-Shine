const URL = "http://localhost:3260";
//DAN WORKSPACE HERE  
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Hides all views not specified and displays the current view 
     * @param {string} viewId the view to be displayed
     */
    function navigate(viewId) {
      // Hide all views
      document.querySelectorAll(".view").forEach((view) => {
        view.style.display = "none";
      });
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
    }
  
    document.querySelectorAll(".home").forEach((e) => e.addEventListener("click", () => navigate("homeView")));
    //sets up all views
    document.getElementById("weatherBox").addEventListener("click", () => navigate("weatherView"));
    document.getElementById("newsBox").addEventListener("click", () => navigate("newsView"));
    document.getElementById("stockBox").addEventListener("click", () => navigate("stockView"));
    document.getElementById("spotifyBox").addEventListener("click", () => navigate("spotifyView"));
   
    // Initialize with the home view
    navigate("homeView");
 
});


//LINDSEY WORKSPACE HERE 
//JAKE CODE BELOW

function weatherHandlery(data)
{
let today = data.list[0];

let pusher = "Weather: " + (today.weather[0].description) + "<br>";
pusher = pusher + "Temperature: " + (Math.floor(today.main.temp)).toString() + "<br>";
pusher = pusher + "Humidity: " + today.main.humidity+ "<br>";
let x = "curwe"
document.getElementById(x).innerHTML = pusher;
let icon = today.weather[0].icon; 
x = x + "pic";
icon = icon.toString(); 
icon = icon.substring(0, 2) + "d";
document.getElementById(x).src = icon + ".png";
}

async function successCallback(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=d9abbcf6d13c2409cc9a607c94b99edc`);
  let result = await response.json();
  console.log(result);
  weatherHandlery(result);
};

const errorCallback = (error) => {
  console.log(error, "Unable to access location data");
};

navigator.geolocation.watchPosition(successCallback, errorCallback);




//ROBERT WORKSPACE HERE

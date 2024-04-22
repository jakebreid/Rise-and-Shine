//JAKE WORKSPACE HERE 

import PouchDB from "pouchdb";
const db = new PouchDB("myName");
const userName = await db.get("username");
if (typeof userName == "boolean")
{ 
const userName = prompt("Greetings! We recognize this is your first time here!\nPlease Enter Your Name:", "");
}
document.getElementById("myTitle").innerHTML = "Rise and Shine, " + userName + "!";

//DAN WORKSPACE HERE 
document.addEventListener("DOMContentLoaded", () => {
    function navigate(viewId) {
      // Hide all views
      document.querySelectorAll(".view").forEach((view) => {
        view.style.display = "none";
      });
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
    }
  
    document.getElementById("home").addEventListener("click", () => navigate("homeView"));
    document.getElementById("weatherBox").addEventListener("click", () => navigate("weatherView"));
    document.getElementById("newsBox").addEventListener("click", () => navigate("newsView"));
    document.getElementById("calenderBox").addEventListener("click", () => navigate("calendarView"));
    document.getElementById("spotifyBox").addEventListener("click", () => navigate("spotifyView"));
    document.addEventListener('DOMContentLoaded', function() {
        var weatherBox = document.getElementById('weatherBox');
        weatherBox.addEventListener('click', function() {
            window.location.href = 'weather.html';
        });
    // Initialize with the home view
    navigate("homeView");
})});
//LINDSEY WORKSPACE HERE 
document.addEventListener('DOMContentLoaded', function() {
    var weatherBox = document.getElementById('weatherBox');
    weatherBox.addEventListener('click', function() {
        window.location.href = 'weather.html';
    })});



//ROBERT WORKSPACE HERE

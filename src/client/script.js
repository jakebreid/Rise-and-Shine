//JAKE WORKSPACE HERE 

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
document.addEventListener('DOMContentLoaded', function() {
        var newsBox = document.getElementById('newsBox');
        newsBox.addEventListener('click', function() {
            window.location.href = 'news.html';
        })});
        document.addEventListener('DOMContentLoaded', function() {
         var spotifyBox = document.getElementById('spotifyBox');
        spotifyBox.addEventListener('click', function() {
            window.location.href = 'spotify.html';
        })});
        document.addEventListener('DOMContentLoaded', function() {
            var calenderBox = document.getElementById('calenderBox');
            calenderBox.addEventListener('click', function() {
                window.location.href = 'calender.html';
            })});





//ROBERT WORKSPACE HERE

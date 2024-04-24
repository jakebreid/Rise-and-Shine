//JAKE WORKSPACE HERE 

//DAN WORKSPACE HERE 
/**
 * 
 */
document.addEventListener("DOMContentLoaded", () => {
    function navigate(viewId) {
      // Hide all views
      document.querySelectorAll(".view").forEach((view) => {
        view.style.display = "none";
      });
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
    }
  
    document.querySelectorAll(".home").forEach((e) => e.addEventListener("click", () => navigate("homeView")));

    document.getElementById("weatherBox").addEventListener("click", () => navigate("weatherView"));
    document.getElementById("newsBox").addEventListener("click", () => navigate("newsView"));
    document.getElementById("stockBox").addEventListener("click", () => navigate("stockView"));
    document.getElementById("spotifyBox").addEventListener("click", () => navigate("spotifyView"));
   
    // Initialize with the home view
    navigate("homeView");
// })
});
//LINDSEY WORKSPACE HERE 





//ROBERT WORKSPACE HERE

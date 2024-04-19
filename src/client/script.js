//JAKE WORKSPACE HERE 

//import PouchDB from "pouchdb";
//const db = new PouchDB("myName");
//const userName = await db.get("username");
//if (typeof userName == "boolean")
//{ 
const userName = prompt("Greetings! We recognize this is your first time here!\nPlease Enter Your Name:", "");
//}
document.getElementById("myTitle").innerHTML = "Rise and Shine, " + userName + "!";

//DAN WORKSPACE HERE 
function showView(viewId) {
    //hide all views
    document.querySelectorAll(".view").forEach(function (view) {
        view.style.display = "none";
      });
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
}

document.getElementById("weatherBox").addEventListener("click", function () {
    showView("weatherBox");
  });
  
  document.getElementById("newsBox").addEventListener("click", function () {
    showView("newsBox");
  });
  
  document.getElementById("calenderBox").addEventListener("click", function () {
    showView("calenderBox");
  });

  document.getElementById("spotifyBox").addEventListener("click", function () {
    showView("spotifyBox");
  });
//LINDSEY WORKSPACE HERE 




//ROBERT WORKSPACE HERE

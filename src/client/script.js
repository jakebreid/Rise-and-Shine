//JAKE WORKSPACE HERE 

import PouchDB from "pouchdb";
const db = new PouchDB("myName");
const userName = await db.get("username");
if (typeof userName == "boolean")
{ 
userName = prompt("Greetings! We recognize this is your first time here!\nPlease Enter Your Name:", "");
}

//DAN WORKSPACE HERE 




//LINDSEY WORKSPACE HERE 




//ROBERT WORKSPACE HERE

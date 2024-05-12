//import e = require("express");

const category = document.getElementById("categories");    
const search = document.getElementById("search");


const nytApiKey = "64FLnwskx2n29owrBjMo07HfUpG9x6Sp";
let nytTopURL = "https://api.nytimes.com/svc/topstories/v2/";

const guardianApiKey = "56c1c22f-477d-4934-805d-f166069553f9";
let guardianURL = "https://content.guardianapis.com/search";

const miscApiKey = "dL0hKLndgCkeBOTPhoVOusV3XIhjvdwhpZuoTS4f";
let miscURL = "https://api.thenewsapi.com/v1/news/top";

const date = new Date();

let yesterday = date.getDate() - 3;
let month = date.getMonth() + 1;
let year = date.getFullYear();

let yesterdaysDate = ``;
if(month < 10) {
    if(yesterday < 10) {
        yesterdaysDate = `${year}-0${month}-0${yesterday}`;
    } else {
        yesterdaysDate = `${year}-0${month}-${yesterday}`;
    }
} else {
    if(yesterday < 10) {
        yesterdaysDate = `${year}-${month}-0${yesterday}`;
    } else {
        yesterdaysDate = `${year}-${month}-${yesterday}`;
    }
}


async function readTopNytStories() {
    let section = category.value;
    const response = await fetch(`${nytTopURL}${section}.json?api-key=${nytApiKey}`, {
        method: "GET",
    });
    let result = await response.json();
    let stories = result.results;
    displayNYT(stories, "articleNYT", "picNYT", "linkNYT");
}

async function readGuardianStories() {
    let section = category.value;
    const response = await fetch(`${guardianURL}?q=${section}&from-date=${yesterdaysDate}&order-by=relevance&show-fields=thumbnail&api-key=${guardianApiKey}`, {
        method: "GET",
    });
    let result = await response.json();
    let stories = result.response.results;
    displayGuardian(stories, "articleGuardian", "picGuardian", "linkGuardian");
}

async function readMiscStories() {
    let section = category.value;
    console.log(yesterdaysDate);
    const response = await fetch(`${miscURL}?api_token=${miscApiKey}&search=${section}&published_after=${yesterdaysDate}&sort=relevance_score&language=en&locale=us`, {
        method: "GET",
    });
    let result = await response.json();
    console.log(result);
    let stories = result.data;
    displayMisc(stories, "articleMisc", "picMisc", "linkMisc");
}


function displayNYT(arr, id, idImg, linkId) {
    let i = Math.floor(Math.random()*arr.length);
    document.getElementById(id).innerHTML = arr[i].title + "<br>";
    document.getElementById(idImg).src = arr[i]["multimedia"][2].url;
    document.getElementById(linkId).href = arr[i].url;
}

function displayGuardian(arr, id, idImg, linkId) {
    let i = Math.floor(Math.random()*arr.length);
    document.getElementById(id).innerHTML = arr[i].webTitle + "<br>";
    document.getElementById(idImg).src = arr[i]["fields"]["thumbnail"];
    document.getElementById(linkId).href = arr[i].webUrl;
}


function displayMisc(arr, id, idImg, linkId) {
    let i = Math.floor(Math.random()*arr.length);
    document.getElementById(id).innerHTML = arr[i].title + "<br>";
    document.getElementById(idImg).src = arr[i].image_url;
    document.getElementById(linkId).href = arr[i].url;
}

search.addEventListener("click", readTopNytStories);
search.addEventListener("click", readGuardianStories);
search.addEventListener("click", readMiscStories);


//create and update name
//
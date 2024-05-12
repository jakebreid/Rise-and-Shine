const category = document.getElementById("categories");    
const search = document.getElementById("search");


const nytApiKey = "64FLnwskx2n29owrBjMo07HfUpG9x6Sp";
let nytTopURL = "https://api.nytimes.com/svc/topstories/v2/";

const guardianApiKey = "56c1c22f-477d-4934-805d-f166069553f9";
let guardianURL = "https://content.guardianapis.com/search";

const date = new Date();

let yesterday = date.getDate() - 3;
let month = date.getMonth() + 1;
let year = date.getFullYear();

let yesterdaysDate = `${year}-${month}-${yesterday}`;


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

search.addEventListener("click", readTopNytStories);
search.addEventListener("click", readGuardianStories);

//create and update name
//
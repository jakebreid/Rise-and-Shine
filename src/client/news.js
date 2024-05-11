const category = document.getElementById("categories");    
const search = document.getElementById("search");


const nytApiKey = "64FLnwskx2n29owrBjMo07HfUpG9x6Sp";
let nytTopURL = "https://api.nytimes.com/svc/topstories/v2/";


async function readTopNytStories() {
    let section = category.value;
    const response = await fetch(`${nytTopURL}${section}.json?api-key=${nytApiKey}`, {
        method: "GET",
    });
    let result = await response.json();
    let stories = result.results;
    displayNews(stories, "articleNYT");
    console.log(result);
}



function displayNews(arr, id) {
    let i = Math.floor(Math.random()*arr.length);
    let info = arr[i].title + "<br>";
    info += arr[i].abstract + "<br>";
    info += arr[i].url;
    document.getElementById(id).innerHTML = info;
}

search.addEventListener("click", readTopNytStories);

//create and update name
//
function wordHighlighter(){
    let word1 = document.getElementById('keyword').value;
    let all_items = document.getElementsByTagName("section");
    let x = all_items.length();
    let current_item = all_items.item(0);
    let current_HTML = "";
    let new_HTML = "";
    for(let i = 0; i < x; i++){
        current_item = all_items.item(0);
        current_HTML = current_item.innerHTML;
        if(current_HTML.indexOf(word1) != -1){
            new_HTML += current_HTML.substring(0, current_HTML.indexOf(word1));
            new_HTML += "<span class=\"highlight\">" + word1 + "</span>";
            current_HTML = current_HTML.substring(current_HTML.indexOf(word1) + word1.length);
        }
        current_item.innerHTML = new_HTML;
    }
}

document.getElementById("button").addEventListener("click", wordHighlighter());

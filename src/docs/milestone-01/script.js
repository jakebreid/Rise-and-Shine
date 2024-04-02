function wordHighlighter() {
    let word1 = document.getElementById('keyword').value;
    let all_items = document.getElementsByTagName("section");
    //let x = all_items.length();
    let current_item = all_items.item(0);
    
    let current_HTML = "";
    let new_HTML = "";
    let index = -1;
    
    for(let i = 0; i < all_items.length();; i++){
        current_item = all_items.item(x); //Get current section
        current_HTML = current_item.innerHTML; //Get HTML of current section
        index = current_HTML.toLowercase().indexOf(word1.toLowercase());
        while(index !== -1){ //while index of input is found
            new_HTML += current_HTML.substring(0, index);
            new_HTML += '<span class="highlight">' + word1 + '</span>';
            new_HTML += current_HTML.substring(index + word1.length);
            //current_HTML = current_HTML.substring(current_HTML.indexOf(word1) + word1.length);
         
            index = current_HTML.toLowercase().indexOf(word1.toLowercase(), index + 1); // find next index of word.
        }
        current_item.innerHTML = new_HTML;
    }
}

document.getElementById("button").addEventListener("click", wordHighlighter());

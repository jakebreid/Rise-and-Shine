function wordHighlighter() {
    //remove previous highlight
    let highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.outerHTML = highlight.innerHTML;
    });

    let word1 = document.getElementById('keyword').value;
    let all_items = document.getElementsByTagName("section");
    let current_item = all_items.item(0);
    
    let current_HTML = "";
    let new_HTML = "";
    let index = -1;
    
    for(let i = 0; i < all_items.length; i++){
        current_item = all_items.item(i); //Get current section
        current_HTML = current_item.innerHTML; //Get HTML of current section
        new_HTML = "";
        index = current_HTML.toLowerCase().indexOf(word1.toLowerCase());
        while(index !== -1){ //while index of input is found
            new_HTML += current_HTML.substring(0, index) + 
                        '<span class="highlight">' + 
                        current_HTML.substring(index, index + word1.length) + '</span>';
            current_HTML = current_HTML.substring(index + word1.length);
            
            index = current_HTML.toLowerCase().indexOf(word1.toLowerCase()); // find next index of word.
        }
        new_HTML += current_HTML;
        current_item.innerHTML = new_HTML;
    }
}

document.getElementById("button").addEventListener("click", wordHighlighter);
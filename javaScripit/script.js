// read more btn script
let changeReadMore = document.querySelector("#read-more-btn")
function readMoreScript() {
    if (changeReadMore.textContent === "Read More...") {
         changeReadMore.textContent = "Read Less..."     
    } else if (changeReadMore.textContent === "Read Less...") {
        changeReadMore.textContent = "Read More..."
    } else {
        changeReadMore.textContent = "Read Less..."
    } 
}



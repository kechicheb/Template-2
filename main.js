function show() {
    const nav = document.getElementById("links");

    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }

}

function block() {
    const nav = document.getElementById("links");
    if (nav.style.display === "block")
        nav.style.display = "none";

}


var date = new Date();
var year = date.getFullYear();

document.getElementById('copyright-year').innerHTML = ("&copy; " + year);

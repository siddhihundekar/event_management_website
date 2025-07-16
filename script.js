//search button
function searchWebsite() {
    var input, filter, content, textContent, i, found;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    content = document.body.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
    
    for (i = 0; i < content.length; i++) {
        textContent = content[i].textContent || content[i].innerText;
        found = textContent.toUpperCase().indexOf(filter) > -1;
        if (found) {
            content[i].style.backgroundColor = "#f39c12";
        } else {
            content[i].style.backgroundColor = "";
        }
    }
}

// Incremental numbers for happy customers and others
let happyCustomers = 0;
let completedEvents = 0;
let corporateEvents = 0;
let partners = 0;

setInterval(() => {
    if (happyCustomers < 500) happyCustomers++;
    if (completedEvents < 150) completedEvents++;
    if (corporateEvents < 100) corporateEvents++;
    if (partners < 50) partners++;

    document.getElementById("happy-customers").textContent = happyCustomers;
    document.getElementById("completed-events").textContent = completedEvents;
    document.getElementById("corporate-events").textContent = corporateEvents;
    document.getElementById("partners").textContent = partners;
}, 100);
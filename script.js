const saveButton = document.getElementById("save-button");
const deleteAllButton = document.getElementById("delete-all-button");
const linkList = document.getElementById("link-list");

let myLinks = JSON.parse(localStorage.getItem("myLinks")) || [];
render(myLinks);

saveButton.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const pageInfo = {
            title: tabs[0].title,
            url: tabs[0].url
        };

        const exists = myLinks.some(link => link.url === pageInfo.url);

        if (!exists) {
            myLinks.push(pageInfo);
            localStorage.setItem("myLinks", JSON.stringify(myLinks));
            render(myLinks);
        } else {
            console.log("Este link já está na sua lista!");
        }
    });
});

deleteAllButton.addEventListener("dblclick", () => {
    localStorage.clear();
    myLinks = [];
    render(myLinks);
})

linkList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-item")) {
        const index = e.target.dataset.index;
        myLinks.splice(index, 1);
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        render(myLinks);
    }
})

function render(links) {
    let listItems = "";
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a href="${links[i].url}" target="_blank">${links[i].title}</a>
                <button class="delete-item" data-index="${i}">Delete</button>
            </li>`;
    }
    linkList.innerHTML = listItems;
}
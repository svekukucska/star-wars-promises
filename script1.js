let baseUrl = `https://swapi.co/api/`;
let sectionUrl = `films/`;
let url = baseUrl + sectionUrl;

let getJson = function() {
    //fetches JSOn from API URL
    fetch(url)
    //parses JSON to JS object
    .then(response => response.json())
    .then(json => {
        let path = window.location.pathname;
        let page = path.split("/").pop();
        let myList = [2, 1, 3, 0, 5, 4, 6];
        for(let i = 1; i <= myList.length; i++) {
            //checks if we are on the homepage/index.html page or not
            if (page == "index.html") {
                let movieTitle = document.querySelector('#movies-list'); 
                movieTitle.innerHTML += `<a href="/episode${i}.html">${i }. ${json.results[myList[i - 1]].title}</a><br/>`;
            } else {
                let container = document.querySelector('#container');
                if(container.className == `container${i}`){
                    container.innerHTML +=
                        `<div class="subtitle">Star Wars: ${json.results[myList[i - 1]].title}</div>
                        <div class="items"><strong>Title:</strong> "${json.results[myList[i - 1]].title}"</div>
                        <div class="items"><strong>Release Date:</strong> ${json.results[myList[i - 1]].release_date}</div>
                        <div class="items"><strong>Opening Crawl:</strong> ${json.results[myList[i - 1]].opening_crawl}</div>
                        <div class="items"><strong>Characters: </strong></div>`;
                    let charactersList = json.results[i - 1].characters;
                    //fetches the characters for each film
                    charactersList.map(function(currentValue, index, arr) {
                        fetch(currentValue)
                        .then(response => response.json())
                        .then(json2 => {  
                            container.innerHTML += `<span class="title-list"> ${json2.name}; </span>`; 
                        });
                    });
                }
            };  
        };
    })
    //catches (alerts & console logs) errors
    .catch((err) => {
        console.error("There is a great disturbance in the Force! (ERROR: " + err);
        alert("There is a great disturbance in the Force! (ERROR: " + err);
    })
    //hides onload spinner/logo
    .finally(() => {
        document.querySelector('#spinner').style.display = 'none';
    });
  };

getJson();




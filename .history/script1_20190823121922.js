let baseUrl = `https://swapi.co/api/`;
let sectionUrl = `films/`;
let indexUrl = '1';
let url = baseUrl + sectionUrl;





 
let getJson = function() {
        //gets json from api/url
        fetch(url)
        //parses json
        .then(response => response.json())
        //adds content into HTML
        .then(json => {
            let path = window.location.pathname;
            let page = path.split("/").pop();
            console.log(page);  // REMOVE

            let myList = [4, 2, 1, 3, 6, 5, 7];

            for(let i = 1; i <= 7; i++) {  // for # 1
                if (page == "index.html") {
                        let movieTitle = document.querySelector('#movies-list'); 
                        movieTitle.innerHTML += `<div><a href="/episode${i}.html">${i}. ${json.results[i - 1].title}</a></div>`;
                        console.log(movieTitle); // REMOVE
                } else {
                        // let movieTitle = document.querySelector('#movies-list'); // remove 
                        let container = document.querySelector('#container');

                        if(container.className == `container${i}`){
                            // container.innerHTML +=  `<div class="subtitle">Star Wars: ${json.results[i - 1].title}</div>
                            container.innerHTML +=  `<div class="subtitle">Star Wars: ${json.results[myList[i - 1]].title}</div>
                                                <div class="items"><strong>Title:</strong> "${json.results[i - 1].title}"</div>
                                                <div class="items"><strong>Release Date:</strong> ${json.results[i - 1].release_date}</div>
                                                <div class="items"><strong>Opening Crawl:</strong> ${json.results[i - 1].opening_crawl}</div>
                                                <div class="items"><strong>Characters:</strong> ${json.results[i - 1].characters}</div>
                                                `;                        
                        }
                    };  
            };

   





        })
        // catches errors & logs + alerts them
        .catch((err) => {
            console.error("There is a great disturbance in the Force! (ERROR: " + err);
            //  >>>>>>>>>>> UNCOMMENT ALERT WHEN FINISHED  <<<<<<<<<<<<<<<<<
            // alert("There is a great disturbance in the Force! (ERROR: " + err);
        })

        // hides onload / spinning image after content is loaded
        .finally(() => {
            document.querySelector('#spinner').style.display = 'none';
        });

  };


  getJson();




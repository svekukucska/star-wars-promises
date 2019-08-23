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




            if (page == "index.html") {
                for(let i = 1; i <= 7; i++) {  // for # 1
                    let movieTitle = document.querySelector('#movies-list'); 
                    movieTitle.innerHTML += `<div>${i}. ${json.results[i - 1].title}</div>`;
                }; //for # 1
            } else {
                for(let i = 1; i <= 7; i++) {  // for # 2
                    let movieTitle = document.querySelector('#movies-list'); // remove 
                    let container = document.querySelector('#container');

                    if(container.className == `container${i}`){
                        container.innerHTML +=  `<div class="subtitle">Star Wars: ${json.results[i - 1].title}</div>
                                            <div class="items"><strong>Title:</strong> "${json.results[i - 1].title}"</div>
                                            <div class="items"><strong>Release Date:</strong> ${json.results[i - 1].release_date}</div>
                                            <div class="items"><strong>Opening Crawl:</strong> ${json.results[i - 1].opening_crawl}</div>
                                            <div class="items"><strong>Characters:</strong> ${json.results[i - 1].characters}</div>
                                            `;                        
                    }
                };  //for # 2
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



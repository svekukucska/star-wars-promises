let baseUrl = `https://swapi.co/api/`;
let sectionUrl = `films/`;
let indexUrl = '1';
let url = baseUrl + sectionUrl;
 
let getJson = function() {
        fetch(url)
        .then(response => response.json())


        // catches errors & logs + alerts them
        .catch((err) => {
            console.error("There is a great disturbance in the Force! (ERROR: " + err);
            //  >>>>>>>>>>> UNCOMMENT ALERT WHEN FINISHED  <<<<<<<<<<<<<<<<<
            // alert("There is a great disturbance in the Force! (ERROR: " + err);
        })


        
        .then(json => {



            for(let i = 1; i <= 7; i++) {
                let movieTitle = document.querySelector('#movies-list');
                let container = document.querySelector('#container');
                if(container.className == `container${i}`){

                    container.innerHTML +=  `<div class="subtitle">Star Wars: ${json.results[i - 1].title}</div>
                                            <div class="items"><strong>Title:</strong> "${json.results[i - 1].title}"</div>
                                            <div class="items"><strong>Release Date:</strong> ${json.results[i - 1].release_date}</div>
                                            <div class="items"><strong>Opening Crawl:</strong> ${json.results[i - 1].opening_crawl}</div>
                                            <div class="items"><strong>Characters:</strong> ${json.results[i - 1].characters}</div>
                                            `;
                }

                movieTitle.innerHTML += `<div>${i}${json.results[i - 1].title}</div>`

            };   
            
  


        })

        // hides onload / spinning image after content is loaded
        .finally(() => {
            document.querySelector('#spinner').style.display = 'none';
        });

  };


  getJson();




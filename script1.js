let baseUrl = `https://swapi.co/api/`;
let sectionUrl = `films/`;
let indexUrl = '1';
let url = baseUrl + sectionUrl + indexUrl;
 
let myPromise = new Promise(function(resolve, reject) {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            document.querySelector(`#episode_${indexUrl}`).innerHTML +=  `<div class="subtitle">Star Wars: ${json.title}</div>`;
            document.querySelector(`#episode_${indexUrl}`).innerHTML +=  `<div class="items"><strong>Title:</strong> "${json.title}"</div>
                                                                <div class="items"><strong>Release Date:</strong> ${json.release_date}</div>
                                                                <div class="items"><strong>Opening Crawl:</strong> ${json.opening_crawl}</div>
                                                                <div class="items"><strong>Characters:</strong> ${json.characters}</div>
                                                                `;
        })
        // catches errors & logs + alerts them
        .catch((err) => {
            console.log("There is a great disturbance in the Force! (ERROR: " + err);
            //  >>>>>>>>>>> UNCOMMENT ALERT WHEN FINISHED  <<<<<<<<<<<<<<<<<
            // alert("There is a great disturbance in the Force! (ERROR: " + err);
        })
        // hides onload / spinning image after content is loaded
        .finally((x) => {
            document.querySelector('#spinner').style.display = 'none';
        });

  });






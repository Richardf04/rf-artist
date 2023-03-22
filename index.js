let artistNameRef = document.getElementById("artist-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from api

let getArtist = () => {
    let artistName = artistNameRef.value.toLowerCase();

    if(artistName.length <= 0){
        result.innerHTML = `<h2 class = "msg">Please enter an artist</h3>`;
    }
    else{
        let obj = list.find(o => o.Artist === artistName);
        if(obj == undefined){
            result.innerHTML = `<h2 class = "msg">No artist found</h3>`;
        }
        else{
            result.innerHTML = `
                <div class="info">
                    <div>
                        <h2>${obj.Artist.toUpperCase()}</h2>
                    </div>
                    <div class ="details">
                        <span>Score: ${obj.Score}</span><br>
                        <span>Rank: ${obj.Rank}</span><br>
                        <span>Number of Albums: ${obj["Number Of Albums"]}</span>
                    </div>
                </div>
            `;
        }
        
    }

    
}

searchBtn.addEventListener("click", getArtist);
const key = 'http://www.omdbapi.com/?i=tt3896198&apikey=a7018fe4'

const movieNameRef = document.getElementById('movie-name')
const searchBtn = document.getElementById('search-btn')
const result = document.getElementById('result')

let findMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&
    apikey=${key}`
    if (movieName.trim().length <= 0) {
        result.innerHTML = `<h2 class='msg'> Please Enter A Movie Name</h2>`
    } else {
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                if (data.Response) {
                    result.innerHTML = ''
                    result.innerHTML = `
                    <div class='info'>
                    <h2>${data.Title}</h2>
                    <div class='info-1'>
                    <div>
                    
                    <div class='rating'>
                     <img src="./images/star.png">
                     <h4>${data.imdbRating}</h4>
                    </div>
                        <p><strong>Year: </strong>${data.Year}</p>
                        <p><strong>Runtime: </strong>${data.Runtime}</p>
                        <p><strong>Language: </strong>${data.Language}</p>
                        <p><strong>Awards: </strong>${data.Awards}</p>
                        <p><strong>Released: </strong>${data.Released}</p>
                        <p><strong>Cast:</strong>${data.Actors}</p>
                        <div class='genre'><strong>${data.Genre}</strong></div>
                    </div>
                    
                      
                    <img src=${data.Poster} class='poster'>
                    </div>
                    

                    <p><strong>Plot:</strong>${data.Plot}</p>
                    </div>
                    `
                    
                } else {
                    result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`
                }
            })
            .catch(() => {
                result.innerHTML = `<h3 class='msg'>Something went wrong!</h3>`
            })
    }
};
searchBtn.addEventListener('click', findMovie)
movieNameRef.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      findMovie();
    }
  });
window.addEventListener('load', findMovie)

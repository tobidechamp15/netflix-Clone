var token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDA2ZmE0MmFjMjgwM2Y1MDk1ZmRlNjFjM2ZlM2EyMCIsIm5iZiI6MTc4NDEwNTE3My4xODgsInN1YiI6IjZhNTc0OGQ1OThhNDAzNDU2OGE2YTFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9Cvu--sumF8fA7Vp5q3WPZ68vEN28sAPBPd9CvNU_s";

const options2 = {
  //   method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: ` Bearer ${token}`,
  },
};
console.log(token);

// function to like movie3
function likeMovie(id) {
  console.log(id); // to check if the movie has an id or to check the if the function is working
  let likedMovies = localStorage.getItem("likedMovies") || "";
  //remove id if already added

  // accomodation -> "dation"
  //likedMovies = "" first time user no id found in the local storage
  if (likedMovies.includes(id)) {
    // check if the clicked movie id exist in the string of ids
    // returns either true or false ( Boolean )
    // Remove the ID - handle different cases
    // using the accomodation.replace("a","b") method -> bccomodbtion
    // using the accomodation.replace("a","") method -> ccomodtion
    likedMovies = likedMovies.replace("," + id + ",", ",");
    likedMovies = likedMovies.replace("," + id, "");
    likedMovies = likedMovies.replace(id + ",", "");
    likedMovies = likedMovies.replace(id, "");

    // explaining why we are removing trailing commas
    // "id1,id2,id3,i4"=>"id1,id2,,id4"
    //,,,,,id1,,,,id3
    localStorage.setItem("likedMovies", likedMovies);
    return;
  }
  // likedMovies.push(id);

  // add the id to be liked and concatinate it with the existing string of ids
  localStorage.setItem("likedMovies", likedMovies + "," + id);
}

function getLiked(id) {
  // Get id of the liked movies from localStorage, parse as array
  const likedMovies = localStorage.getItem("likedMovies") || "";

  // Check if the id exists in the array
  const isLiked = likedMovies.includes(id);

  // console.log(`Movie ${id} is ${isLiked ? "liked" : "not liked"}`);
  return isLiked;
}

async function fetchMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options2,
    );

    console.log(response);

    const data = await response.json();

    console.log(data);

    console.log(data.results);
    const movieData = data.results;

    movieData.map(function (eachMovie) {
      const img = document.createElement("img");
      const section = document.createElement("section");
      const button = document.createElement("button");
      img.src = `https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`;
      section.classList.add("imageContainer");
      img.classList.add("posterImg");
      // img.height = "2000px";
      // console.log(
      //   `https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`,
      // );
      button.onclick = function () {
        likeMovie(eachMovie.id);
        // Change the text content based on the current content
        button.textContent === "Like"
          ? (button.textContent = "Unlike")
          : (button.textContent = "Like");
      };
      // console.log(img);
      const imgUnlike = document.createElement("img");
      const imgLike = document.createElement("img");
      imgUnlike.src = "/src/assets/icons8-unlike-50.png";
      imgLike.src = "/src/assets/icons8-like-50.png";
      // button.height = "100%";
      const liked = getLiked(eachMovie.id);
      liked ? (button.textContent = "Unlike") : (button.textContent = "Like");
      section.appendChild(img);
      section.appendChild(button);
      document.querySelector(".topRated").appendChild(section);
      // document.querySelector(".topRated").appendChild(button);
    });
  } catch (error) {
    console.error("Error from fetchMovies", error);
  }
  // const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  // const optionsIMDB = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': '6bfceb1eb5mshb1604e98803c5aap117ee3jsn84ee1c7aba10',
  //     'x-rapidapi-host': 'imdb236.p.rapidapi.com',
  //     'Content-Type': 'application/json'
  //   }
  // };

  // try {
  //   const response = await fetch(url, optionsIMDB);
  //   const result = await response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }
}

fetchMovies();

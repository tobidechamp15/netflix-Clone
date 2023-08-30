fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const datum = data.results;
    datum.map((item) => {
      const poster = item.poster_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
      const topRated = `<li class="flex flex-col gap-3 "><section class="imageContainer"><img class="posterImg" src="${fullPosterUrl}"></section></li>`;
      document.querySelector(".topRated").innerHTML += topRated;
    });
  })
console.log("object");

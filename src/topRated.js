const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ',
  },
};
fetch(
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  options2,
)
  .then((response) => response.json())
  .then((data) => {
    const datum = data.results;
    datum.map((item) => {
      const poster = item.poster_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
      const topRated = `<li class="flex flex-col gap-3 "><section class="imageContainer"><img class="posterImg" src="${fullPosterUrl}"></section></li>`;
      document.querySelector('.topRated').innerHTML += topRated;
      return true;
    });
  });

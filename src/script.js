const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ',
  },
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then((response) => response.json())
  .then((data) => {
    const datum = data.results;
    datum.forEach((item) => {
      const arrayOfId = [];

      const eachMovieId = item.id;

      arrayOfId.push(eachMovieId);

      const poster = item.poster_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
      const movie = `<li class="flex flex-col gap-3 "><section  class="imageContainer"><img id=${eachMovieId}  class="posterImg"  src="${fullPosterUrl}"></section></li>`;
      document.querySelector('.movies').innerHTML += movie;
      const posterImages = document.querySelectorAll('.posterImg');
      posterImages.forEach((posterImg) => {
        posterImg.addEventListener('click', () => {
          const movieId = posterImg.id;

          // Fetch and display video content based on movieId
          const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
          fetch(movieUrl, options)
            .then((response) => response.json())
            .then((data) => data);
        });
      });

      return true;
    });
  });

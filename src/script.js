const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ',
  },
};
function fetchingMovie() {
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
        const movie = `<li class="flex flex-col gap-3 "><section  class="imageContainer">
        <img id=${eachMovieId}  class="posterImg"  src="${fullPosterUrl}"></section></li>`;
        document.querySelector('.movies').innerHTML += movie;

        const posterImages = document.querySelectorAll('.posterImg');
        posterImages.forEach((posterImg) => {
          posterImg.addEventListener('click', () => {
            const movieId = posterImg.id;

            // Fetch and display video content based on movieId
            const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
            fetch(movieUrl, options)
              .then((response) => response.json())
              .then((data) => {
                if (data.backdrop_path !== null) {
                  const backDropImagePath = data.backdrop_path;
                  const backDropImageUrl = `https://image.tmdb.org/t/p/original/${backDropImagePath}`;
                  const backDropImage =
                    document.querySelector('.selectedBackdrop');
                  backDropImage.src = backDropImageUrl;
                  const selectedTitle = data.original_title;
                  const titleContainer =
                    document.querySelector('.titleContainer');
                  titleContainer.textContent = selectedTitle;
                  const overviewContent = data.overview;
                  const details = document.querySelector('.details');
                  details.textContent = overviewContent;

                  const genreArray = data.genres;

                  genreArray.forEach((item) => {
                    const genreList = document.createElement('li');
                    genreList.textContent = `${item.name}  |`;
                    const genres = document.querySelector('.genre');
                    genres.append(genreList);
                  });

                  // const movieDetails = document.querySelector('.movieDetails');
                  // movieDetails.append(backDropImage);

                  const mainContent = document.querySelector('.mainContent');
                  const movieDetails = document.querySelector('.movieDetails');
                  movieDetails.classList.remove('-top-full');
                  movieDetails.classList.add('easeIn');
                  mainContent.style.opacity = '20%';
                  mainContent.addEventListener('click', () => {
                    movieDetails.classList.add('-top-full');
                    mainContent.style.opacity = '100%';
                    movieDetails.classList.remove('easeIn');
                    movieDetails.classList.add('ease-out', 'duration-1000');
                  });
                } else if (
                  data.backdrop_path == null ||
                  data.original_title == null ||
                  data.overview == null
                ) {
                  const mainContent = document.querySelector('.mainContent');
                  const error = document.querySelector('.cards');
                  error.classList.remove('-top-full');
                  error.classList.add('errorPop-up');
                  mainContent.style.opacity = '20%';
                  mainContent.addEventListener('click', () => {
                    error.classList.add('-top-full');
                    error.classList.remove('errorPop-up');
                    mainContent.style.opacity = '100%';
                  });
                  return true;
                }

                return 0;
              });
          });
        });

        return true;
      });
    });
}
fetchingMovie();

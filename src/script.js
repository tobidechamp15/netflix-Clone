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
    datum.map((item) => {
      const poster = item.poster_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
      const movie = `<li class="flex flex-col gap-3 "><section class="imageContainer"><img class="posterImg"  src="${fullPosterUrl}"></section></li>`;
      document.querySelector('.movies').innerHTML += movie;
      const eachMovie = document.querySelectorAll('.posterImg');
      const oneMovie = [];
      oneMovie.push(eachMovie);
      const e = oneMovie[0];

      e.forEach((i) => {
        i.addEventListener('click', () => {
          window.location.href = './movieDetails.html';
        });
      });

      return true;
    });
  });

const menuBar = document.querySelector('.ham');
menuBar.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
});

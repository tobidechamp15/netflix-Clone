const optionsTv = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ',
  },
};

fetch(
  'https://api.themoviedb.org/3/watch/providers/tv?language=en-US',
  optionsTv,
)
  .then((response) => response.json())
  .then((data) => {
    const allTv = data.results;
    const n = 50;
    const selectedTv = [];
    allTv.forEach((element, index) => {
      if (index < n) {
        selectedTv.push(element);
      }
    });
    selectedTv.forEach((element) => {
      const tvPoster = element.logo_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original${tvPoster}`;
      const tvProviders = `<li class="flex flex-col gap-3 "><img class="tvProvider" src="${fullPosterUrl}"></li>`;
      document.querySelector('.tvProviders').innerHTML += tvProviders;
    });
  });

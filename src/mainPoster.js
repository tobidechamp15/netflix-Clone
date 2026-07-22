const optionsPoster = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  optionsPoster,
)
  .then((response) => response.json())
  .then((data) => {
    const datum = data.results;

    //   console.log(datum)
    datum.forEach((element) => {
      const poster = element.backdrop_path;
      const fullPosterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
      const movie = `
    <section class="eachPoster" >
      <img class="mainBackdrop "  src="${fullPosterUrl}">        
    </section>`;

      document.querySelector(".mainPoster").innerHTML += movie;
    });
  })
  .catch((err) => err);
const container = document.getElementById("scrollContainer");

function scrollLeft() {
  container.scrollBy({
    left: -container.offsetWidth,
    behavior: "smooth",
  });
}

function scrollRight() {
  container.scrollBy({
    left: container.offsetWidth,
    behavior: "smooth",
  });
}
const scrollToLeft = document.querySelector(".scrollLeft");
const scrollToRight = document.querySelector(".scrollRight");

scrollToLeft.addEventListener("click", scrollLeft);
scrollToRight.addEventListener("click", scrollRight);

scrollToLeft.addEventListener("dblclick", scrollLeft);
scrollToRight.addEventListener("dblclick", scrollRight);

// const element = document.getElementById("video-container")
// Joined concerns 
function alertMe() {
  alert("videp");
}
function alertMe1() {
  alert("videp");
}
function alertMe2() {
  alert("videp");
}
function functionToAlertElementIds(event, id, functionName) {
  const element = document.getElementById(id);

  element.addEventListener(event, functionName);
}

functionToAlertElementIds("click", "video-container", alertMe);
functionToAlertElementIds("click", "video-container", alertMe);
functionToAlertElementIds("click", "video-container", alertMe);

//Seperating concerns
const videoContainer = document.getElementById("video-container")

videoContainer.addEventListener("click",function() {
  
})

// const image=document.createElement("span")

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRmNDlkOWFmMWJjMTFmYWI4MDE0MGVhODM0N2IyMCIsInN1YiI6IjY0ZWE1MDdjNTI1OGFlMDE0ZGYyZDEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iW2S4RopStbFn_abwAoapxsTQlMH-4nHDzpACiSRfRQ",
//   },
// };

// fetch("https://api.themoviedb.org/3/configuration", options)
//   .then((response) => response.json())
//     .then((response) => {
//         console.log(response);
//         const imageSource = response.change_keys;
//         console.log(imageSource);

//         //loop through imageSource and assign each value to image?
//         for (let i = 0; i < imageSource.length; i++) {
//           let image = new Image();
//           image.src = imageSource[i];
//           document.appendChild(image);
//         }

//     })
//   .catch((err) => console.error(err));

// const span = document.querySelector("span")
// image.append("span")

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const loadingSection = document.querySelector(".loadingSection");
//     const mainContent = document.querySelector(".mainContent");
//     loadingSection.style.display = "none";
//     mainContent.style.display = "block";
//     mainContent.classList.add("fadeIn");
//   }, 5000);
// });

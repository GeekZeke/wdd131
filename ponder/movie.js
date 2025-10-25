const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  }
];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const img = document.createElement("img");
  img.src = movie.imgSrc;
  img.alt = movie.imgAlt;

  const info = document.createElement("div");
  info.classList.add("movie-info");

  const titleStars = document.createElement("div");
  titleStars.classList.add("title-stars");

  const title = document.createElement("h2");
  title.classList.add("movie-title");
  title.textContent = movie.title;

  const stars = document.createElement("p");
  stars.classList.add("movie-rating");
  stars.textContent = movie.stars;

  titleStars.appendChild(title);
  titleStars.appendChild(stars);

  const date = document.createElement("p");
  date.classList.add("movie-details");
  date.textContent = `Release Date: ${movie.date}`;

  const desc = document.createElement("p");
  desc.classList.add("movie-details");
  desc.textContent = movie.description;

  const details = document.createElement("p");
  details.classList.add("movie-details");
  details.textContent = `Rated: ${movie.ages} | Genre: ${movie.genre}`;

  info.appendChild(titleStars);
  info.appendChild(date);
  info.appendChild(desc);
  info.appendChild(details);

  card.appendChild(img);
  card.appendChild(info);

  movieList.appendChild(card);
});

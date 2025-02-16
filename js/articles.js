const response = await fetch("api/cars.json");
const cars = await response.json();

export default function articlesCars(cars) {
  let carsHtml = "";
  for (const car of cars) {
    carsHtml += `
      <article class="article__cars">
        <img class="article__car" src="${car.image}" alt="${car.title}">
        <h3>${car.title}</h3>
      </article>
    `;
  }
  const carsContainer = document.querySelector(".cars__list");
  carsContainer.innerHTML = carsHtml;

  console.log("articles.js подгружен" + cars);
}

articlesCars(cars);

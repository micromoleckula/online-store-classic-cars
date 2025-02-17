export async function articlesCars() {
  try {
    const response = await fetch("api/cars.json");
    if (!response.ok) throw new Error("Ошибка загрузки JSON");

    const cars = await response.json();
    let carsHtml = "";

    for (const car of cars) {
      if (!car.images || car.images.length === 0) continue;

      carsHtml += `
        <article class="article__cars">
          <img class="article__cars__img" src="${car.images[0]}" alt="${car.title}" data-images='${JSON.stringify(car.images)}'>
          <div class="article__cars__text">
            <h3 class="article__cars__title">${car.title}</h3>
            <p class="article__cars__engine">${car.engine}L ${car.transmission} ${car.drivetrain}</p>
            <div class="article__cars__info">
              <p class="article__cars__year">${car.year}</p>
              <p class="article__cars__mileage">${car.mileage} Kilometres</p>
            </div>
            <p class="article__cars__price">${car.price}$</p>
          </div>
        </article>
      `;
    }

    const carsContainer = document.querySelector(".articles__cars__list");
    if (carsContainer) {
      carsContainer.innerHTML = carsHtml;

      document.querySelectorAll(".article__cars__img").forEach(img => {
        let index = 0;
        const images = JSON.parse(img.getAttribute("data-images"));

        img.addEventListener("mouseenter", function () {
          if (images.length > 1) {
            index = 1;
            this.dataset.interval = setInterval(() => {
              this.src = images[index];
              index = (index + 1) % images.length;
            }, 1000);
          }
        });

        img.addEventListener("mouseleave", function () {
          clearInterval(this.dataset.interval);
          this.src = images[0];
        });
      });

    } else {
      console.error("Элемент .articles__cars__list не найден в DOM");
    }

    console.log("articles.js подгружен");
  } catch (error) {
    console.error("Ошибка в articlesCars():", error);
  }
}

document.addEventListener("DOMContentLoaded", articlesCars);

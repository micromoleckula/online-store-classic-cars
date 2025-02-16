export async function articlesCars() {
  try {
    const response = await fetch("api/cars.json");
    if (!response.ok) throw new Error("Ошибка загрузки JSON");
    
    const cars = await response.json();
    let carsHtml = "";
    
    for (const car of cars) {
      carsHtml += `
        <article class="article__cars">
          <img class="article__cars__img" src="${car.image}" alt="${car.title}">
          <div class="article__cars__text">
            <h3 class="article__cars__title">${car.title}</h3>
            <p class="article__cars__engine">${car.engine}L</p>
            <p class="article__cars__description">${car.description}</p>
            <p class="article__cars__mileage">${car.mileage} Kilometres</p>
            <p class="article__cars__price">${car.price}$</p>
          </div>
        </article>
      `;
    }

    const carsContainer = document.querySelector(".articles__cars__list");
    if (carsContainer) {
      carsContainer.innerHTML = carsHtml;
    } else {
      console.error("Элемент .cars__list не найден в DOM");
    }

    console.log("articles.js подгружен");
  } catch (error) {
    console.error("Ошибка в articlesCars():", error);
  }
}

// Выполняем после загрузки DOM
document.addEventListener("DOMContentLoaded", articlesCars);

export async function coverSlides() {
  const response = await fetch("api/cars.json");
  const cars = await response.json();

  let currentIndex = 0;
  const carsContainer = document.querySelector(".cover__slides");

  function renderCar(index) {
    const car = cars[index];
    carsContainer.style.opacity = 0;
    setTimeout(() => {
      carsContainer.innerHTML = `
        <div class="cover__cars">
          <div class="cover__top">
            <img class="cover__hero__img" src="${car.images[0]}" alt="${car.name}">
            <div class="cover__text">
              <h2 class="cover__text__title">${car.year} ${car.title}</h2>
              <p class="cover__text__description">${car.description}</p>
              <p class="cover__text__regular">Engine: ${car.engine}</p>
              <p class="cover__text__regular">Mileage: ${car.mileage}</p>
              <p class="cover__text__regular">Transmission: ${car.transmission}</p>
              <p class="cover__text__regular">Drivetrain: ${car.drivetrain}</p>
              <p class="cover__text__regular">Body style: ${car.bodyStyle}</p>
              <p class="cover__text__price">${car.price}$</p>
            </div>
          </div>
          <div class="cover__bottom">
            <img class="cover__img" src="${car.images[1]}" alt="${car.name}">
            <img class="cover__img" src="${car.images[2]}" alt="${car.name}">
            <img class="cover__img" src="${car.images[3]}" alt="${car.name}">
            <img class="cover__img" src="${car.images[4]}" alt="${car.name}">
          </div>
        </div>
      `;
      carsContainer.style.opacity = 1;
    }, 500);
  }

  renderCar(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cars.length;
    renderCar(currentIndex);
  }, 5000);
  console.log('coverSlideShow.js загружен!')
}

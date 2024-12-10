// rendering the recommended cars
const recommendedCarsWrapper = document.getElementById("recommended-cars");

class RecommendedCar {
  constructor(name, imgUrl, isPinned) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.isPinned = isPinned;
  }
}
const cars = [
  new RecommendedCar(
    "Mazda CX-5",
    "/assets/img/catalog/slideshow/car1.png",
    true
  ),
  new RecommendedCar(
    "Toyota Alphard",
    "/assets/img/catalog/slideshow/car2.png",
    false
  ),
  new RecommendedCar(
    "Subaru Outback",
    "/assets/img/catalog/slideshow/car3.png",
    true
  ),
  new RecommendedCar(
    "Toyota RAV4",
    "/assets/img/catalog/slideshow/car4.png",
    false
  ),
  new RecommendedCar(
    "Honda Civic",
    "/assets/img/catalog/slideshow/car5.png",
    true
  ),
];

// mapping the assets and create the slides
cars.forEach((car, index) => {
  const slideElement = document.createElement("div");
  slideElement.className = "swiper-slide swiper-car";
  slideElement.setAttribute("style", "width: 300px;");
  slideElement.id = `recommended-car-${index}`;
  slideElement.innerHTML = `
        <div class="h-74 bg-white shadow-md overflow-hidden">
            <img src="${
              car.imgUrl
            }" alt="Toyota Alphard Hybrid" class="h-40 lg:w-full object-cover" />
            <div class="p-4">
                <div class="flex flex-row space-x-4 justify-between">
                    <p class="md:text-xl text-lg text-gray-700 font-bold mb-2">${
                      car.name
                    }</p>
                    <div class="flex flex-row items-center justify-between text-sm text-gray-500 mb-4">
                        <button class="flex items-center p-2 ${
                          !car.isPinned ? "bg-white shadow-md" : ""
                        }" type="button">
                            <span>
                                <span class="mr-1">お気に入り</span>
                                <span>解除</span>
                            </span>
                            ${
                              car.isPinned
                                ? "<img src='/assets/img/icon/pinCheck.png' class='h-8 w-8 object-scale-down' alt=''>"
                                : "<img src='/assets/img/icon/pin.png' class='h-8 w-8 object-scale-down' alt=''>"
                            }
                        </button>
                    </div>
                </div>
                <div class="px-8">
                    <button class="w-full flex items-center justify-center text-gray-500 text-sm py-2 hover:bg-primary hover:text-white transition ring-1 ring-black">
                        <span>詳細を見る</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
  recommendedCarsWrapper.appendChild(slideElement);
});

const swiper2 = new Swiper(".swiper-recommended-cars", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-recommended-cars",
    prevEl: ".swiper-button-prev-recommended-cars",
  },
  // Breakpoints for responsiveness
  breakpoints: {
    480: {
      slidesPerView: 1, // Mobile
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2, // Tablet
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4, // Desktop
      spaceBetween: 20,
    },
  },
});

// rendering the carousel or hero section
let swiperWrapper = document.getElementById("swiper-wrapper-id");
// store the assets
const carouselImages = [
  "/assets/img/catalog/slideshow/top/car1.jpg",
  "/assets/img/catalog/slideshow/top/car2.jpg",
  "/assets/img/catalog/slideshow/top/car3.jpg",
  "/assets/img/catalog/slideshow/top/car4.jpg",
  "/assets/img/catalog/slideshow/top/car5.jpg",
  "/assets/img/catalog/slideshow/top/car6.jpg",
  "/assets/img/catalog/slideshow/top/car7.jpg",
  "/assets/img/catalog/slideshow/top/car8.jpg",
];
// mapping the assets and create the slides
carouselImages.forEach((image, index) => {
  const slideElement = document.createElement("div");
  slideElement.className = "swiper-slide h-full";
  slideElement.id = `carousel-${index}`;
  slideElement.innerHTML = `
                 <span class="text-xl font-bold h-full flex items-center justify-center">
                        <img src="${image}" class="h-full w-full object-cover">
                    </span>
            `;
  swiperWrapper.appendChild(slideElement);
});

// initialize Swiper after adding slides
const swiper = new Swiper(".swiper-top-cars", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

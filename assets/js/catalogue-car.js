const catalogeCars = document.getElementById("catalogue-cars");

class CatalogueCar {
  constructor(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
const catalogeCarsData = [
  new CatalogueCar("Suzuki Spacia", "/assets/img/catalog/content/car1.png"),
  new CatalogueCar("Suzuki Swift", "/assets/img/catalog/content/car2.png"),
  new CatalogueCar("Toyota Sienta", "/assets/img/catalog/content/car3.png"),
  new CatalogueCar("Honda Accord", "/assets/img/catalog/content/car4.png"),
  new CatalogueCar("Subaru BRZ", "/assets/img/catalog/content/car5.png"),
  new CatalogueCar("BMW 2 Series", "/assets/img/catalog/content/car6.png"),
  new CatalogueCar(
    "Mitsubishi Outlander",
    "/assets/img/catalog/content/car7.png"
  ),
  new CatalogueCar(
    "Honda Civic Type R",
    "/assets/img/catalog/content/car8.png"
  ),
  new CatalogueCar("Toyota Alphard", "/assets/img/catalog/content/car9.png"),
];
// mapping the assets and create the slides
catalogeCarsData.forEach((car, index) => {
  const slideElement = document.createElement("div");
  slideElement.className = "catalogue-car flex flex-col items-center space-y-2";
  slideElement.id = `catalogue-${index}`;
  slideElement.innerHTML = `
                            <img src="${car.imgUrl}" alt="軽自動車" class="w-full object-cover">
                            <div class="flex justify-between w-full">
                                <span class="text-sm">${car.name}</span>
                                <input type="checkbox" class="form-checkbox h-6 w-6">
                            </div>
            `;
  catalogeCars.appendChild(slideElement);
});

const catalogeCarsRight = document.getElementById("catalogue-cars-right");

const catalogeCarsRightData = [
  new CatalogueCar("Suzuki Spacia", "/assets/img/catalog/content/car1.png"),
  new CatalogueCar("Suzuki Swift", "/assets/img/catalog/content/car2.png"),
  new CatalogueCar("Toyota Sienta", "/assets/img/catalog/content/car3.png"),
];
// mapping the assets and create the element
catalogeCarsRightData.forEach((car, index) => {
  const slideElement = document.createElement("div");
  slideElement.className = "catalogue-car flex flex-col items-center space-y-2";
  slideElement.id = `catalogue-right-${index}`;
  slideElement.innerHTML = `
                <img src="${car.imgUrl}" alt="軽自動車" class="w-full object-cover">
                <div class="flex justify-between w-full">
                    <span class="text-sm">${car.name}</span>
                    <input type="checkbox" class="form-checkbox h-6 w-6">
                    </div>
                    `;
  catalogeCarsRight.appendChild(slideElement);
});

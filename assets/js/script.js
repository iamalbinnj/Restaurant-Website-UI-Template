var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  navigation: {
    nextEl: "#next-slide",
    prevEl: "#prev-slide",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});

function fetchDishData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network issue");
      }
      return response.json();
    })
    .then((products) => {
      const dishContainer = document.getElementById("dish-cards");
      const categoryContainer = document.getElementById("categories-cards");
      dishContainer.innerHTML = "";
      categoryContainer.innerHTML = "";

      const categories = [];
      products.map((product) => {
        let isUnique = true;
        for (let i = 0; i < categories.length; i++) {
          if (categories[i] == product.category) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          categories.push(product.category);
        }
      });

      products.forEach((product) => {
        const dishCard = document.createElement("div");
        dishCard.classList.add("swiper-slide");

        dishCard.innerHTML = `
                      <div class="col-lg-3 col-md-4 col-sm-6">
                          <div class="card dish-card p-4 border-0 rounded-5">
                              <img src="${product.image}" alt="${product.title}" class="img-fluid rounded-3">
                              <h2 class="fs-5 fw-semibold mt-3">${product.title}</h2>
                              <div class="d-flex justify-content-between align-items-center">
                                  <p class="fw-semibold mb-0 price">$${product.price}</p>
                                  <p class="text-warning mb-0">
                                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_1_97)">
                                              <path
                                                  d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4024 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3977 20.2473 21.8333 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1393 24.0472 9.44249 23.8365 8.79569C23.6258 8.1489 23.216 7.58523 22.6658 7.18521C22.1156 6.78519 21.4531 6.56927 20.7728 6.56831H16.3998L15.0728 2.43231C14.8641 1.78126 14.4541 1.21332 13.9018 0.810371C13.3495 0.407422 12.6835 0.190292 11.9998 0.190292C11.3161 0.190292 10.6501 0.407422 10.0978 0.810371C9.54553 1.21332 9.13548 1.78126 8.9268 2.43231L7.5998 6.56831H3.2308C2.55054 6.56927 1.88799 6.78519 1.33778 7.18521C0.787564 7.58523 0.377837 8.1489 0.167118 8.79569C-0.0436018 9.44249 -0.0445344 10.1393 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z"
                                                  fill="#FFE605" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_1_97">
                                                  <rect width="24" height="24" fill="white" />
                                              </clipPath>
                                          </defs>
                                      </svg>
                                      ${product.rating.rate}
                                  </p>
                              </div>
                              <button class="btn btn-primary-custom mt-3" onclick="viewProduct(${product.id})">View Details</button>
                          </div>
                      </div>
                  `;

        dishContainer.appendChild(dishCard);
      });

      categories.forEach(function (category) {
        const categoryCard = document.createElement("div");
        categoryCard.classList.add("col-lg-3", "col-md-4", "col-sm-6");

        categoryCard.innerHTML = `
            <div class="card custom-card">
              <div class="circle-container">
                <!-- Use a placeholder image or a category-specific image if available -->
                <img src="./assets/images/popular-food-1.png" alt="${category}" class="img-dish">
              </div>
              <h2>${category}</h2>
              <p>(${
                products.filter((product) => product.category === category)
                  .length
              } dishes)</p> <!-- Dynamic dish count -->
            </div>
          `;

        categoryContainer.appendChild(categoryCard);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchDishData();
});

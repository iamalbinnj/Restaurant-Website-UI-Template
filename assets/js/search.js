document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  const searchContainer = document.querySelector(".search-container");
  searchButton.addEventListener("click", function (event) {
    event.stopPropagation();
    searchInput.classList.toggle("expanded");
    if (searchInput.classList.contains("expanded")) {
      searchInput.focus();
    }
  });
  document.addEventListener("click", function (event) {
    if (!searchContainer.contains(event.target)) {
      searchInput.classList.remove("expanded");
    }
  });
});

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  if (query === "") {
    resultsContainer.innerHTML = "";
    resultsContainer.classList.remove("show");
    return;
  }
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      if (filteredProducts.length > 0) {
        resultsContainer.innerHTML = filteredProducts
          .map(
            (product) => `
                          <a href="product-details.html?id=${product.id}" class="dropdown-item">${product.title}</a>
                      `
          )
          .join("");
        resultsContainer.classList.add("show");
      } else {
        resultsContainer.innerHTML =
          '<p class="dropdown-item text-muted">No products found.</p>';
        resultsContainer.classList.add("show");
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      resultsContainer.innerHTML =
        '<p class="dropdown-item text-danger">Error loading products.</p>';
      resultsContainer.classList.add("show");
    });
});

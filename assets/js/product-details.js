document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            document.getElementById("categories").textContent = data.category;
            document.getElementById("product-name").textContent = data.title;
            document.getElementById("product-image").src = data.image;
            document.getElementById("product-price").textContent = `$${data.price}`;
            document.getElementById("product-rating").textContent = data.rating.rate;
            document.getElementById("product-details").textContent = data.description;
        })
    } else {
        console.error("Product ID not found in the URL");
    }
});
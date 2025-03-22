document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("change", function () {
        if (this.checked) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
    });

    // Cart and Wishlist Count Update (Placeholder)
    const likeButton = document.querySelector(".like span");
    const cartButton = document.querySelector(".cart span");

    let likeCount = 0;
    let cartCount = 0;

    document.querySelector(".like").addEventListener("click", function (e) {
        e.preventDefault();
        likeCount++;
        likeButton.textContent = likeCount;
    });

    document.querySelector(".cart").addEventListener("click", function (e) {
        e.preventDefault();
        cartCount++;
        cartButton.textContent = cartCount;
    });

    // Search Functionality (Basic)
    document.querySelector(".search-box").addEventListener("submit", function (e) {
        e.preventDefault();
        let query = document.querySelector(".search-input").value.trim();
        if (query) {
            alert("Searching for: " + query);
            // Implement actual search logic here
        }
    });
});

// 
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let filter = searchInput.value.toLowerCase();

            let products = document.querySelectorAll(".product-card");

            products.forEach(function (product) {

                let title = product.querySelector("h3").textContent.toLowerCase();

                let description = product.querySelector("p").textContent.toLowerCase();

                if (
                    title.includes(filter) ||
                    description.includes(filter)
                ) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }

            });

        });

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Current Year Auto Update

const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
 

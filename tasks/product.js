// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    alert("Welcome to our Product Information Page!");

    // Buy Now Button Functionality
    const buyButton = document.querySelector(".buy-btn");

    buyButton.addEventListener("click", function () {
        alert("Thank you for choosing HP Pavilion Laptop!\nYour order has been added successfully.");
    });

});
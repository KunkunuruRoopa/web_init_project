document.addEventListener("DOMContentLoaded", () => {

    // Welcome Message
    alert("Welcome to the Book Information Portal!");

    // Read More Button
    const readBtn = document.getElementById("readBtn");

    readBtn.addEventListener("click", () => {

        alert(
           "This book is a complete beginner-to-intermediate guide for designing, developing, styling, and publishing modern websites using HTML5, CSS3, JavaScript, and jQuery."
        );

    });

});
document.addEventListener("DOMContentLoaded", () => {

    console.log("College Information Portal Loaded");

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                `${link.textContent} page opened`
            );

        });

    });

});
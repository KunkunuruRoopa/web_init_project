document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            `Thank you, ${name}! Your request has been submitted successfully.`
        );

        form.reset();

    });

});
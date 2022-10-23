console.log("Witaj programisto! Ten projekt został dodany do repozytorium GIT.");

let headerButtonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

headerButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--black");
    if (themeName.innerText === "Tryb Ciemny") {
        themeName.innerText = "Tryb jasny";
    } else {
        themeName.innerText = "Tryb Ciemny";
    }
});


{
    const welcomeMessage = () => {
        console.log("Witaj programisto!");
    }

    const buttonClickEvent = () => {
        const headerButtonElement = document.querySelector(".js-button");

        headerButtonElement.addEventListener("click", toggleBackground)
    }

    const toggleBackground = () =>{
        const bodyElement = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        bodyElement.classList.toggle("body--black");
        themeName.innerHTML = bodyElement.classList.contains("body--black") ? "Tryb jasny" : "Tryb ciemny";
    }
    
    const init = () => {
        welcomeMessage();
        buttonClickEvent();
    }

    init();
}
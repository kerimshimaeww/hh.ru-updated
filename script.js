let scrollBtn = document.querySelector(".scrollBtn");
let menu = document.querySelector(".menu");
let vacancyCards = document.querySelectorAll(".vacancCard")
let searchInput = document.querySelector(".search-form_text")
let searchButton = document.querySelector(".search-button")
let wrapper = document.querySelector(".wrapper")
let filteredVacancies = [];

searchButton.addEventListener("click", () => {
    let searchValue = searchInput.value.toLowerCase()
    wrapper.innerHTML = ''
    for (let i = 0; i < vacancyCards.length; i++) {
        let vacancyTitle = vacancyCards[i].querySelector("h1")
        if (vacancyTitle.innerHTML.toLowerCase().includes(searchValue)) {
            wrapper.innerHTML += vacancyCards[i].outerHTML
        }
    }
})


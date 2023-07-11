const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const listEL = document.querySelector(".social-lists")
const liEl = document.querySelectorAll(".social-lists li")

menuEl.addEventListener("mouseenter",()=>{
    listEL.classList.toggle("hide")
    menuEl.classList.toggle("rotate")
})

liEl.forEach(liEl=> {
    liEl.addEventListener("click",()=>{
        menuTextEl.innerHTML = liEl.innerHTML;
        menuEl.classList.toggle("rotate")
        listEL.classList.add("hide")
    })
})
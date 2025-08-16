let listNav = document.querySelector(".listNav");
let joinUs = document.querySelector(".joinus");
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");

show.addEventListener("click", ()=>{
    listNav.style.right = "5%";
    joinUs.style.right = "25%";
})

hide.addEventListener("click",()=>{
    listNav.style.right = "255%";
    joinUs.style.right = "255%";
    listNav.style.transition = "0.5s";
    joinUs.style.transition = "0.5s";

})
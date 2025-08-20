let listNav = document.querySelector(".listNav");
let joinUs = document.querySelector(".joinus");
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");

show.addEventListener("click", ()=>{
    listNav.style.right = "0";
    joinUs.style.right = "18%";
})

hide.addEventListener("click",()=>{
    listNav.style.right = "255%";
    joinUs.style.right = "255%";
    listNav.style.transition = "0.5s";
    joinUs.style.transition = "0.5s";

});


// ------------------------- see more--------------

const seeMore = document.querySelectorAll(".see-more");

seeMore.forEach(btnsee =>{
    btnsee.addEventListener("click",()=>{
         const box = btnsee.parentElement;
         const moreText = box.querySelector(".seeMore");
         if(moreText.style.display === "inline"){
            btnsee.textContent = "see more";
            moreText.style.display = "none";
         }
         else{
            
            moreText.style.display = "inline";
            btnsee.textContent = "see less";
            
         }

        //  moreText.forEach(moreTextTarget=>{
        //     moreTextTarget.style.display = "inline";
        //     if (moreTextTarget.target.style.display != "inline"){
        //         moreTextTarget.parentElement.style.maxPadding = "100px";
        //     }
        //  })


    })
   

})




// -------------------------------------
// testimonial
const sliders = document.querySelectorAll(".reveiws .reveiw");
let index = 0;

function showSlide(i){
    sliders.forEach(s=>{
        s.classList.remove("slide");
    })
    let index = sliders[i].classList.add("slide");

}

const next = document.querySelector(".next");
next.addEventListener("click",()=>{
    index = (index +1)%sliders.length;
    showSlide(index);
})




const prev = document.querySelector(".prev");
prev.addEventListener("click",()=>{
    index = (index -1 +sliders.length)% sliders.length;
    showSlide(index);
})
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
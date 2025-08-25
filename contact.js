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


fetch("footer.html")
.then(res=>{
    if(!res.ok){
        throw new error("HTTP error",+res.status);
        
        
    }
    return res.text();
    
})
.then(data=>{
    document.getElementById("footer").innerHTML = data;

})
.catch(err=>{
    document.getElementById("footer").innerHTML = "you Failed to fetch the footer data"
    console.log(err);
    
})
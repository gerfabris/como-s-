const navbar = document.getElementById("navbar");
const scrollTop = window.addEventListener("scroll", (e) =>{
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 2){
        navbar.classList.add("navbar__background");
    }else{
        navbar.classList.remove("navbar__background");
    }
})

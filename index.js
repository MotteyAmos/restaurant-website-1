const getElement = (element)=>{
   return document.querySelector(element);
}
const getElements = (element)=>{
    return document.querySelector(element);
}


//TOGGLE MENU 
getElement(".ctr").addEventListener("click",()=>{
    getElement("header .container").classList.toggle("open");
})


//Animation 

window.sr = ScrollReveal();


sr.reveal(".animate-right",{
    origin:"right",
    duration:900,
    distance:"10rem",
    opacity:0,
    delay:300,
    reset: true
});

sr.reveal(".animate-left",{
    origin:"left",
    duration:900,
    distance:"10rem",
    opacity:0,
    delay:300,
    reset: true
});

sr.reveal(".animate-top",{
    origin:"top",
    duration:900,
    distance:"10rem",
    opacity:0,
    delay:300,
    reset: true
});

sr.reveal(".animate-bottom",{
    origin:"bottom",
    duration:900,
    distance:"10rem",
    opacity:0,
    delay:300,
    reset: true
});

const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click",function(){
    trailerContainerEl.classList.remove("hide");
})

closeIconEl.addEventListener("click",function(){
    trailerContainerEl.classList.add("hide");
    videoEl.pause();
    videoEl.currentTime = 0;
})

/* smartphones slider start */
let slides = document.querySelectorAll(".phoneSlider");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let currentPhone = 0;
prevBtn.onclick = function(){
    prev();
}
nextBtn.onclick = function(){
    next();
}
function prev(){
    if(currentPhone == 0){
        currentPhone = slides.length-1;
    } else{
        currentPhone--;
    }
    document.querySelector(".phoneSlider.sliderBlock").classList.remove("sliderBlock");
    slides[currentPhone].classList.add("sliderBlock");
}
function next(){
    if(currentPhone == slides.length-1){
        currentPhone = 0;
    } else{
        currentPhone++;
    }
    document.querySelector(".phoneSlider.sliderBlock").classList.remove("sliderBlock");
    slides[currentPhone].classList.add("sliderBlock");
}
/* smartphones slider end */
/* television slider start */
let teleSlides = document.querySelectorAll(".teleSlider");
let telePrev = document.querySelector(".prevTele");
let teleNext = document.querySelector(".nextTele");
let currentTele = 0;
telePrev.onclick = function(){
    prevTelevision();
}
teleNext.onclick = function(){
    nextTelevision();
}
function prevTelevision(){
    if(currentTele == 0){
        currentTele = teleSlides.length-1;
    } else{
        currentTele--;
    }
    document.querySelector(".teleSlider.teleBlock").classList.remove("teleBlock");
    teleSlides[currentTele].classList.add("teleBlock");
}
function nextTelevision(){
    if(currentTele == teleSlides.length-1){
        currentTele = 0;
    } else{
        currentTele++;
    }
    document.querySelector(".teleSlider.teleBlock").classList.remove("teleBlock");
    teleSlides[currentTele].classList.add("teleBlock");
}
/* television slider end */
/* laptop and tablets slider start */
let tabSliders = document.querySelectorAll(".tabSlider");
let tabPrev = document.querySelector(".prevTab");
let tabNext = document.querySelector(".nextTab");
let currentTab = 0;
tabPrev.onclick = function(){
    prevTab();
}
tabNext.onclick = function(){
    nextTab();
}
function prevTab(){
    if(currentTab == 0){
        currentTab = tabSliders.length-1;
    } else{
        currentTab--;
    }
    document.querySelector(".tabSlider.tabBlock").classList.remove("tabBlock");
    tabSliders[currentTab].classList.add("tabBlock");
}
function nextTab(){
    if(currentTab == tabSliders.length-1){
        currentTab = 0;
    } else{
        currentTab++;
    }
    document.querySelector(".tabSlider.tabBlock").classList.remove("tabBlock");
    tabSliders[currentTab].classList.add("tabBlock");
}
// laptop and tablets slider end 
/* audio slider start */
let audioSliders = document.querySelectorAll(".audioSlider");
let audioPrev = document.querySelector(".prevAudio");
let audioNext = document.querySelector(".nextAudio");
let currentAudio = 0;
audioPrev.onclick = function(){
    prevAudio();
}
audioNext.onclick = function(){
    nextAudio();
}
function prevAudio(){
    if(currentAudio == 0){
        currentAudio = audioSliders.length-1;
    } else{
        currentAudio--;
    }
    document.querySelector(".audioSlider.audioBlock").classList.remove("audioBlock");
    audioSliders[currentAudio].classList.add("audioBlock");
}
function nextAudio(){
    if(currentAudio == audioSliders.length-1){
        currentAudio = 0;
    } else{
        currentAudio++;
    }
    document.querySelector(".audioSlider.audioBlock").classList.remove("audioBlock");
    audioSliders[currentAudio].classList.add("audioBlock");
}
/* audio slider end */
// home appliances slider start
let applianceSlider = document.querySelectorAll(".appliance");
let appliancePrev = document.querySelector(".prevAppliance");
let applianceNext = document.querySelector(".nextAppliance");
let currentAppliance = 0;
appliancePrev.onclick = function(){
    prevAppliance();
}
applianceNext.onclick = function(){
    nextAppliance();
}
function prevAppliance(){
    if(currentAppliance == 0){
        currentAppliance = applianceSlider.length-1;
    } else{
        currentAppliance--;
    }
    document.querySelector(".appliance.appliance-block").classList.remove("appliance-block");
    applianceSlider[currentAppliance].classList.add("appliance-block");
}
function nextAppliance(){
    if(currentAppliance == applianceSlider.length-1){
        currentAppliance = 0;
    } else{
        currentAppliance++;
    }
    document.querySelector(".appliance.appliance-block").classList.remove("appliance-block");
    applianceSlider[currentAppliance].classList.add("appliance-block");
}
// home appliances slider end
// smartLife slider start
let smartSlider = document.querySelectorAll(".smartLife");
let smartPrev = document.querySelector(".prevSmartLife");
let smartNext = document.querySelector(".nextSmartLife");
let currentSmart = 0;
smartPrev.onclick = function(){
    prevSmart();
}
smartNext.onclick = function(){
    nextSmart();
}
function prevSmart(){
    if(currentSmart == 0){
        currentSmart = smartSlider.length-1;
    } else{
        currentSmart--;
    }
    document.querySelector(".smartLife.smartLifeBlock").classList.remove("smartLifeBlock");
    smartSlider[currentSmart].classList.add("smartLifeBlock");
}
function nextSmart(){
    if(currentSmart == smartSlider.length-1){
        currentSmart = 0;
    } else{
        currentSmart++;
    }
    document.querySelector(".smartLife.smartLifeBlock").classList.remove("smartLifeBlock");
    smartSlider[currentSmart].classList.add("smartLifeBlock");
}
// smartLife slider end
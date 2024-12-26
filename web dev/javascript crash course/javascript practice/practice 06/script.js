var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var homeTxt = document.querySelector("#home-text");
var aboutTxt = document.querySelector("#about-text");
var contactTxt = document.querySelector("#contact-text");


home.addEventListener("click",function(){
    saaratexthatao();

    homeTxt.style.display="block";
    homeTxt.style.width="50%";

    // contactTxt.style.display="none";   
    // aboutTxt.style.display="none";
})

about.addEventListener("click",function(){
    saaratexthatao();
    aboutTxt.style.display="block";
    aboutTxt.style.width="50%";
    
    // homeTxt.style.display="none";
    // contactTxt.style.display="none";
})

contact.addEventListener("click",function(){
    saaratexthatao();
contactTxt.style.display="block";
contactTxt.style.width="50%";

    // homeTxt.style.display="none";
    // aboutTxt.style.display="none";
})

function saaratexthatao() {
    document.querySelectorAll("h3").forEach(function (h3) {
        h3.style.display = "none";
    });

}
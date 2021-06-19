var typed = new Typed(".typing",{
    strings: ["Designer","Software Engineer","Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop: true
});

// tab content
(() =>{
    const aboutSection = document.querySelector('.about-section'),
    tabContainer = document.querySelector(".about-tabs");

    tabContainer.addEventListener("click", (event) =>{

        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabContainer.querySelector(".active").classList.remove("outer-shadow",
            "active");
            event.target.classList.add("active","outer-shadow");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");

        }
    })
})();
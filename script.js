const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const forHomeTag = document.querySelector(".forHome");
const forServicesTag = document.querySelector(".forServices");
const forAboutUsTag = document.querySelector(".forAboutUs");
const forContactUsTag = document.querySelector(".forContactUs");
const forLoginTag = document.querySelector(".forLogin");

const tabs = [ "home" , "services" , "about us" , "contact us" , "login" ];

const handleTabChange = (event) => {
    const clickTabId = event.target.id;
    const clickLiTag = document.getElementById(clickTabId);
    const clickLiTagWidth = clickLiTag.offsetWidth;
    const clickLiTagoffsetLeft = clickLiTag.offsetLeft;
    sliderTag.style.width = clickLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickLiTagoffsetLeft}px)`;

    let counter = clickTabId;
    switch (counter) {
        case "0":
            forHomeTag.style.display = "block";
            forServicesTag.style.display = "none";
            forAboutUsTag.style.display = "none";
            forContactUsTag.style.display = "none";
            forLoginTag.style.display = "none";
        break;

        case "1":
            forHomeTag.style.display = "none";
            forServicesTag.style.display = "block";
            forAboutUsTag.style.display = "none";
            forContactUsTag.style.display = "none";
            forLoginTag.style.display = "none";
        break;

        case "2":
            forHomeTag.style.display = "none";
            forServicesTag.style.display = "none";
            forAboutUsTag.style.display = "block";
            forContactUsTag.style.display = "none";
            forLoginTag.style.display = "none";
        break;

        case "3":
            forHomeTag.style.display = "none";
            forServicesTag.style.display = "none";
            forAboutUsTag.style.display = "none";
            forContactUsTag.style.display = "block";
            forLoginTag.style.display = "none";
        break;

        default:
            forHomeTag.style.display = "none";
            forServicesTag.style.display = "none";
            forAboutUsTag.style.display = "none";
            forContactUsTag.style.display = "none";
            forLoginTag.style.display = "block";
    }
};

for ( let i = 0; i < tabs.length; i ++ ) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click" , handleTabChange);
    ulTag.append(liTag);
    if ( i === 0 ) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    } 
};
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



//Put appropriate text in nav links
const links = document.querySelectorAll("nav a");

let count = 0;
for(let key in siteContent.nav){
  if(key !== "img-src"){
    links[count].textContent = siteContent.nav[key];
    count++;
  }
}

const nav = document.getElementsByTagName("nav")[0];
const linkAppend = document.createElement("a");
const linkPrepend = document.createElement("a");
linkAppend.setAttribute("href", "#");
linkAppend.style.color = "green";
linkAppend.textContent = "Append";
linkPrepend.setAttribute("href", "#");
linkPrepend.style.color = "green";
linkPrepend.textContent = "Prepend";
nav.append(linkAppend);
nav.insertBefore(linkPrepend, nav.childNodes[0]);

const ctaHeader = document.querySelector(".cta h1");
ctaHeader.innerHTML = siteContent.cta.h1.split(" ").join("<br>");

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

const topContent = document.querySelectorAll(".top-content .text-content");

for(let i = 0; i < topContent.length; i++){
  const textContent = topContent[i];
  const h4 = textContent.querySelector("h4");
  const p = textContent.querySelector("p");
  if(i === 0){
    h4.textContent = siteContent["main-content"]["features-h4"];
    p.textContent = siteContent["main-content"]["features-content"];
  }else {
    h4.textContent = siteContent["main-content"]["about-h4"];
    p.textContent = siteContent["main-content"]["about-content"];
  }
}

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelectorAll(".bottom-content .text-content");

for(let i = 0; i < bottomContent.length; i++){
  const textContent = bottomContent[i];
  const h4 = textContent.querySelector("h4");
  const p = textContent.querySelector("p");
  if(i === 0){
    h4.textContent = siteContent["main-content"]["services-h4"];
    p.textContent = siteContent["main-content"]["services-content"];
  }else if(i === 1){
    h4.textContent = siteContent["main-content"]["product-h4"];
    p.textContent = siteContent["main-content"]["product-content"];
  }else {
    h4.textContent = siteContent["main-content"]["vision-h4"];
    p.textContent = siteContent["main-content"]["vision-content"];
  }
}

const contactSection = Array.from(document.getElementsByClassName("contact")[0].children);

for(let i = 0; i < contactSection.length; i++){
  const element = contactSection[i];
  switch (i){
    case 0:
      element.textContent = siteContent.contact["contact-h4"];
      break;
    case 1:
      element.innerHTML = siteContent.contact.address.slice(0, 18) + "<br>" + siteContent.contact.address.slice(18) ;
      break;
    case 2:
      element.textContent = siteContent.contact.phone
      break;
    default:
      element.textContent = siteContent.contact.email
  }
}

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;
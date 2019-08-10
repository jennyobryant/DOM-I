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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
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

//all nar content appears 
let nar = document.getElementsByTagName("a");
nar[0].textContent = siteContent.nav['nav-item-1'];
nar[1].textContent = siteContent.nav['nav-item-2'];
nar[2].textContent = siteContent.nav['nav-item-3'];
nar[3].textContent = siteContent.nav['nav-item-4'];
nar[4].textContent = siteContent.nav['nav-item-5'];
nar[5].textContent = siteContent.nav['nav-item-6'];

//top content cta
let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent.cta.h1;

// button appear get started
let ctaButton = document.querySelector("button"); 
ctaButton.textContent = siteContent.cta.button;

//image appear
let ctaImage = document.querySelector("#cta-img"); 
ctaImage.setAttribute('src', siteContent.cta['img-src']);  

//body content
let Features = document.querySelector(".top-content .text-content h4"); 
Features.textContent = siteContent['main-content']['features-h4']; 
let Featuresparagraph = document.querySelector(".top-content .text-content p"); 
Featuresparagraph.textContent = siteContent['main-content']['features-content']; 

let about = document.querySelectorAll(".top-content .text-content h4")[1];
about.textContent = siteContent['main-content']['about-h4']; 
let aboutparagraph = document.querySelectorAll(".top-content .text-content p")[1]; 
aboutparagraph.textContent = siteContent['main-content']['about-content']; 

//image appear
let Image = document.querySelector("#middle-img"); 
Image.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom element
let bottomHeaders = document.querySelectorAll('.bottom-content h4');
let servicesHeader = bottomHeaders[0];
let productHeader = bottomHeaders[1];
let visionHeader = bottomHeaders[2]; 

servicesHeader.textContent = siteContent['main-content']['services-h4']; 
productHeader.textContent = siteContent['main-content']['product-h4']; 
visionHeader.textContent = siteContent['main-content']['vision-h4']; 

let bottomPara = document.querySelectorAll('.bottom-content p');
let servicesPara = bottomPara[0];
let productPara = bottomPara[1];
let visionPara = bottomPara[2]; 

servicesPara.textContent = siteContent['main-content']['services-content']; 
productPara.textContent = siteContent['main-content']['product-content']; 
visionPara.textContent = siteContent['main-content']['vision-content']; 

//contact
let contact = document.querySelector(".contact h4"); 
contact.textContent = siteContent['contact']['contact-h4']; 

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML= siteContent.contact.address; 
contactPara[1].textContent= siteContent.contact.phone; contactPara[2].textContent= siteContent.contact.email; 

//footer
let footer = document.querySelector("footer p"); 
footer.textContent = siteContent['footer']['copyright'];

//nav becomes green
document.querySelectorAll("a").forEach(a =>
  a.style.color = "green");

//appendchild and prepend (blog or more)
let nav = document.querySelector('nav');
let newone = document.createElement('a');
newone.textContent = "blog"; 
nav.prepend(newone); 

newone = document.createElement('a');
newone.textContent = "more"; 
nav.appendChild(newone); 

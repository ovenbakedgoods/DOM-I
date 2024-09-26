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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const logoIMG = document.querySelector("#cta-img");
logoIMG.setAttribute('src', "img/header-img.png");

const headerOne = document.getElementsByTagName("h1")[0];
headerOne.textContent = siteContent["cta"]["h1"];

const button = document.getElementsByTagName("button")[0];
button.textContent = siteContent["cta"]["button"];

const anchortags = document.querySelectorAll('a');
//anchortags.style.color = "green";
let i = 0;
//anchortags.forEach(a => a.textContent = siteContent["nav"]["nav-item-" + i], i++);
for(let j = 1; j < 7; j++)
{
  anchortags[i].textContent = siteContent["nav"]["nav-item-" + j];
  anchortags[i].style.color = "green"
  i++;
}

const middleIMG = document.querySelector(".middle-img");
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let features = document.querySelector(".text-content");
features = document.getElementsByTagName("h4")[0];
features.textContent = siteContent["main-content"]["features-h4"];

let featurepara = document.querySelector(".text-content");
featurepara = document.getElementsByTagName("p")[0];
featurepara.textContent = siteContent["main-content"]["features-content"]

let about = document.querySelector(".text-content");
about = document.getElementsByTagName("h4")[1];
about.textContent = siteContent["main-content"]["about-h4"];

let aboutspara = document.querySelector(".text-content");
aboutspara = document.getElementsByTagName("p")[1];
aboutspara.textContent = siteContent["main-content"]["about-content"];

let services = document.querySelector(".text-content");
services = document.getElementsByTagName("h4")[2];
services.textContent = siteContent["main-content"]["services-h4"];

let servicespara = document.querySelector(".text-content");
servicespara = document.getElementsByTagName("p")[2];
servicespara.textContent = siteContent["main-content"]["services-content"];

let product = document.querySelector(".text-content");
product = document.getElementsByTagName("h4")[3];
product.textContent = siteContent["main-content"]["product-h4"];

let productpara = document.querySelector(".text-content");
productpara = document.getElementsByTagName("p")[3];
productpara.textContent = siteContent["main-content"]["product-content"];

let vision = document.querySelector(".text-content");
vision = document.getElementsByTagName("h4")[4];
vision.textContent = siteContent["main-content"]["vision-h4"];

let visionpara = document.querySelector(".text-content");
visionpara = document.getElementsByTagName("p")[4];
visionpara.textContent = siteContent["main-content"]["vision-content"]

let foothead = document.querySelector(".contact");
foothead = foothead.querySelector('h4');
foothead.textContent = siteContent["contact"]["contact-h4"];

let footparagraphs = document.querySelector(".contact");
let footparagraph = footparagraphs.getElementsByTagName('p')[0];
footparagraph.textContent = siteContent["contact"]["address"];

footparagraph = footparagraphs.getElementsByTagName('p')[1];
footparagraph.textContent = siteContent["contact"]["phone"];

footparagraph = footparagraphs.getElementsByTagName('p')[2];
footparagraph.textContent = siteContent["contact"]["email"];

//let footer = document.getElementsByTagName('footer');
let footer = document.getElementsByTagName("p")[5];
footer.textContent = siteContent["footer"]["copyright"];
//footer.textContent = "hello";



let element = document.createElement("a");                 
var textnode = document.createTextNode("home");         
node.appendChild(textnode);   


let container = document.querySelector('.container');
container.prepend('prepend() just checking');



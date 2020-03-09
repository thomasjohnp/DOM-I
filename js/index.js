const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll("a");
navLinks.forEach(
  (_, i) => (navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`])
);

navLinks.forEach(link => {
  link.style.color = "green";
});

let newA = document.createElement("a");
newA.textContent = "Blargh";
let newA2 = document.createElement("a");
newA2.textContent = "Donkey";
let navParent = document.querySelector("nav");

navParent.prepend(newA);
navParent.append(newA2);

newA.style.color = "green";
newA2.style.color = "green";

let h1Var = document.querySelector("h1");
h1Var.innerHTML = "DOM <br>Is<br> Awesome";

let buttonyButton = document.querySelector("button");
buttonyButton.textContent = siteContent["cta"]["button"];

let earthImg = document.getElementById("cta-img");
earthImg.setAttribute("src", siteContent["cta"]["img-src"]);

let codeImg = document.getElementById("middle-img");
codeImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let cardTitles = document.querySelectorAll(".text-content h4");
let cardContent = document.querySelectorAll(".text-content p");

let namesArray = ["features", "about", "services", "product", "vision"];

for (let i = 0; i < namesArray.length; i++) {
  cardTitles[i].textContent = siteContent["main-content"][`${namesArray[i]}-h4`]
  cardContent[i].textContent = siteContent["main-content"][`${namesArray[i]}-content`]
};

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"];

let contactsArr = ["address", "phone", "email"];

let contactText = document.querySelectorAll(".contact p");
contactText.forEach ((one, i) => (
  one.textContent = siteContent["contact"][`${contactsArr[i]}`]
));

let theFooter = document.querySelector("footer p");
theFooter.textContent = siteContent["footer"]["copyright"];

const resources = [
  {
    category: "HTML",
    text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
    sources: [
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/html/",
      },
      {
        title: "HTML Living standard",
        url: "https://html.spec.whatwg.org/multipage/",
      },
      {
        title: "HTML.com Tutorials",
        url: "https://html.com/",
      },
    ],
  },
  {
    category: "CSS",
    text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
    sources: [
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/css/",
      },
      {
        title: "W3C HTML & CSS Standards",
        url: "https://www.w3.org/standards/webdesign/htmlcss.html",
      },
      {
        title: "W3C CSS Validator",
        url: "https://jigsaw.w3.org/css-validator/",
      },
      {
        title: "CSS Tricks",
        url: "https://css-tricks.com/",
      },
    ],
  },
  {
    category: "JavaScript",
    text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
    sources: [
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/js/",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "How to read JavaScript Documentation",
        url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
      },
    ],
  },
  {
    category: "React",
    text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
    sources: [
      {
        title: "React documentation",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      },
      {
        title: "How to read JavaScript Documentation",
        url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
      },
    ],
  },
  {
    category: "Sanity and headless CMS",
    text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
    sources: [
      {
        title: "Sanity documentation",
        url: "https://www.sanity.io/docs",
      },
      {
        title: "OnCrawl: a beginners guide to headless CMS",
        url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
      },
      {
        title: "Section.io: Getting started with Sanity CMS",
        url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
      },
    ],
  },
];

function showArticle() {
  let menuHTML = ``;
  let listHTML = ``;

  resources.map(
    (header, i) =>
      (menuHTML += `<button onClick="toggleActive(${i})" class="hide" id="category-header-${i}"> ${header.category}</button> `)
  );

  resources.map(
    (info, i) =>
      (listHTML += `<article id="list-items-${i}" class="hidden">  
  <h2>${info.category}</h2>
  <p>${info.text}</p>
  <ul>
   ${info.sources
     .map((link) => `<li><a href="${link.url}">${link.title}</a></li>`)
     .join("")}
     </ul>
  </article>`)
  );
  // Kilder for å mappe: https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/map-og-filter
  // Hentet også mye inspirasjon fra legodudes webshop for å lage artikkelkort med javascript.

  document.querySelector("body").innerHTML += menuHTML;
  document.querySelector("body").innerHTML += listHTML;
  document.querySelector("article").classList.remove("hidden");
  document.querySelector("category-header").classList.replace("hide", "show");
}
function toggleActive(i) {
  const btns = document.querySelectorAll("button");
  btns.forEach((category) => {
    category.classList.replace("show", "hide");
  });

  const list = document.querySelectorAll("article");
  list.forEach((category) => {
    category.classList.add("hidden");
  });
  //Kilder for å legge til classer til flere elementer samtidig: https://codingbeautydev.com/blog/javascript-add-class-to-all-elements/

  document
    .querySelector("#category-header-" + i)
    .classList.replace("hide", "show");
  document.querySelector("#list-items-" + i).classList.remove("hidden");
}
showArticle();

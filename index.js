
var menuLinks = [
  { text: "about", href: "/about" },

  { text: "catalog", href: "/catalog" },

  { text: "orders", href: "/orders" },

  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");

mainEl.innerHTML = "<h1> DOM Manipulation</h1>";

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", link.href);
  linkElement.textContent = link.text;
  topMenuEl.appendChild(linkElement);
  
});

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
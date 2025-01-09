document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    alert("Merci pour votre message, je vous répondrai dès que possible !");
    this.reset();
  });

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    const offsetTop = targetElement.offsetTop;
    const elementHeight = targetElement.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollPosition = offsetTop - windowHeight / 2 + elementHeight / 2;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const images = document.querySelectorAll(".about-slider img");

let index = 0;

function changeImage() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(changeImage, 3000);

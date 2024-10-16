let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function moveSlide(n) {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + n + totalItems) % totalItems;
  items[currentIndex].classList.add("active");
}

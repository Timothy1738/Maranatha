//SCROLL TO TOP
const scrollToTopButton = document.querySelector(".scroll-to-top");
// Add click event listener to scroll-to-top button
scrollToTopButton.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    scrollToTopButton.classList.add("scroll");
  } else {
    scrollToTopButton.classList.remove("scroll");
  }
});


//TOGGLE NAVBAR

document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('active');
});


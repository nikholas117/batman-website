//moblie menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

//slider
// Slider

const slides = document.querySelectorAll(".slides img");
const captions = document.querySelectorAll(".NightWing");
const dots = document.querySelectorAll(".dots .dot"); // Correctly select all dots
function showSlide(index) {
  // Hide all slides
  const slides = document.querySelectorAll(".NightWing");
  slides.forEach((slide) => slide.classList.remove("displaySlide"));

  // Show the active slide
  slides[index].classList.add("displaySlide");
}

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    captions[slideIndex].classList.add("displaySlide");
    dots[slideIndex].checked = true; // Set the initial active dot
    intervalId = setInterval(nextSlide, 5000000);
  }

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(intervalId); // Pause the auto-slide
      slideIndex = index; // Update the slide index based on the clicked dot
      showSlide(slideIndex);
    });
  });
}

function showSlide(index) {
  // Handle slide wrapping
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and captions
  slides.forEach((slide) => slide.classList.remove("displaySlide"));
  captions.forEach((caption) => caption.classList.remove("displaySlide"));
  dots.forEach((dot) => (dot.checked = false)); // Uncheck all dots

  // Show the active slide, caption, and check the active dot
  slides[slideIndex].classList.add("displaySlide");
  captions[slideIndex].classList.add("displaySlide");
  dots[slideIndex].checked = true; // Highlight the active dot
}

function prevSlide() {
  clearInterval(intervalId); // Pause the auto-slide
  slideIndex--;
  showSlide(slideIndex); // Update slide and dot
}

function nextSlide() {
  clearInterval(intervalId); // Pause the auto-slide
  slideIndex++;
  showSlide(slideIndex); // Update slide and dot
}

// Implement logic to toggle between card sets when the buttons are clicked. for Villians

// Select card sets and navigation buttons

document.addEventListener("DOMContentLoaded", () => {
  const cardSets = document.querySelectorAll(".card-set");
  const prevButton = document.querySelector(".prev-villians"); // Updated class name
  const nextButton = document.querySelector(".next-villians"); // Updated class name
  let currentIndex = 0;

  // Function to update active card set
  function updateActiveCardSet(newIndex) {
    cardSets[currentIndex].classList.remove("active");
    currentIndex = newIndex;
    cardSets[currentIndex].classList.add("active");
  }

  // Event listeners for buttons
  prevButton.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + cardSets.length) % cardSets.length;
    updateActiveCardSet(newIndex);
  });

  nextButton.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % cardSets.length;
    updateActiveCardSet(newIndex);
  });

  // Initialize first card set as active
  if (cardSets.length > 0) {
    cardSets[0].classList.add("active");
  }
});

// Arrow for movies

// Select the rows and the buttons
const rows = document.querySelectorAll(
  ".movierowanimation-1, .movierowanimation-2"
);
const leftArrow = document.querySelector(".moviearrow button:first-child");
const rightArrow = document.querySelector(".moviearrow button:last-child");

// Track the current row index
let currentIndex = 0;

// Function to update the active row
function updateActiveRow(newIndex) {
  // Remove 'active' from the current row
  rows[currentIndex].classList.remove("active");

  // Update the index (wrap around if needed)
  currentIndex = newIndex < 0 ? rows.length - 1 : newIndex % rows.length;

  // Add 'active' to the new row
  rows[currentIndex].classList.add("active");
}

// Event listeners for the arrows
leftArrow.addEventListener("click", () => {
  updateActiveRow(currentIndex - 1); // Move to the previous row
});

rightArrow.addEventListener("click", () => {
  updateActiveRow(currentIndex + 1); // Move to the next row
});

// Initialize by showing the first row
rows[currentIndex].classList.add("active");

// Arrow for Batman Games
// Select the navigation buttons
const prevButton = document.querySelector(".moviearrow1 button:nth-child(1)");
const nextButton = document.querySelector(".moviearrow1 button:nth-child(2)");

// Select the game sections
const gameSections = document.querySelectorAll(
  ".bat-game-section-1, .bat-game-section-2"
);

// Track the current active section
let currentSectionIndex = 0;

// Function to show the active section
function showActiveSection(index) {
  // Remove the active class from all sections
  gameSections.forEach((section) => section.classList.remove("active"));

  // Add the active class to the current section
  gameSections[index].classList.add("active");
}

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  // Decrease the index and loop to the last section if it goes below 0
  currentSectionIndex =
    (currentSectionIndex - 1 + gameSections.length) % gameSections.length;
  showActiveSection(currentSectionIndex);
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  // Increase the index and loop back to the first section if it exceeds the length
  currentSectionIndex = (currentSectionIndex + 1) % gameSections.length;
  showActiveSection(currentSectionIndex);
});

// Initialize by showing the first section
showActiveSection(currentSectionIndex);

// Select the button for scroll up button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Show the button when the user scrolls down 100px
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

// Add a click event listener to the button
scrollTopBtn.addEventListener("click", () => {
  // Smoothly scroll back to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//
document.querySelectorAll(".faq-title").forEach((title) => {
  title.addEventListener("click", () => {
    const symbol = title.querySelector(".toggle-symbol");
    symbol.textContent = symbol.textContent === "+" ? "-" : "+";
  });
});

//for the button (Tbale of content)

document.addEventListener("DOMContentLoaded", () => {
  const tocToggle = document.getElementById("toc-toggle");
  const tocContainer = document.getElementById("toc-container");

  // Toggle the TOC when clicking the button
  tocToggle.addEventListener("click", () => {
    tocContainer.classList.toggle("open"); // Open or close the TOC
  });
});

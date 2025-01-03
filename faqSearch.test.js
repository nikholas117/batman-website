/**
 * @jest-environment jsdom
 */

const faqHeadings = [
  { name: "About Batman", link: "#about-batman" },
  { name: "Fun Facts", link: "#fun-facts" },
  { name: "History of Batman", link: "#history-of-batman" },
  { name: "Batman Comic Eras", link: "#batman-comic-eras" },
  { name: "Batman’s 85th Anniversary", link: "#batman-85th-anniversary" },
  { name: "Latest News On Batman", link: "#latest-news" },
  { name: "Batman’s Greatest Allie", link: "#batmans-greatest-allie" },
  { name: "Bat-family", link: "#bat-family" },
  { name: "Teams Batman is In", link: "#teams-batman-in" },
  { name: "Batman’s Greatest Villains", link: "#batmans-greatest-villains" },
  { name: "Classic Batman Comics", link: "#classic-batman-comics" },
  { name: "Other Versions of Batman", link: "#other-versions" },
  { name: "Batman Gadgets", link: "#batman-gadgets" },
  {
    name: "Best Batman Movies (Live Action)",
    link: "#best-live-action-movies",
  },
  { name: "Best Batman Movies (Animation)", link: "#best-animation-movies" },
  { name: "Best Batman TV Shows", link: "#best-tv-shows" },
  { name: "Best Batman Games", link: "#best-games" },
  { name: "Famous Batman Products", link: "#famous-products" },
  { name: "Useful Videos of Batman", link: "#useful-videos" },
  { name: "FAQ", link: "#faq" },
];

describe("FAQ Search Functionality", () => {
  let faqSearchInput, faqSuggestionsBox;

  beforeEach(() => {
    // Mock HTML Structure
    document.body.innerHTML = `
      <input type="search" id="search-1" placeholder="Search...">
      <div id="faqSuggestions" class="suggestions-box"></div>
    `;

    faqSearchInput = document.getElementById("search-1");
    faqSuggestionsBox = document.getElementById("faqSuggestions");

    // Attach the JavaScript functionality
    faqSearchInput.addEventListener("input", function () {
      const query = faqSearchInput.value.toLowerCase();
      faqSuggestionsBox.innerHTML = ""; // Clear previous suggestions

      if (query) {
        const filteredHeadings = faqHeadings
          .filter((heading) => heading.name.toLowerCase().includes(query))
          .slice(0, 5); // Limit to 5 suggestions

        if (filteredHeadings.length > 0) {
          filteredHeadings.forEach((heading) => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = heading.name;

            suggestionItem.addEventListener("click", function () {
              window.location.href = heading.link; // Navigate to the section
              faqSearchInput.value = ""; // Clear input
              faqSuggestionsBox.style.display = "none"; // Hide suggestions
            });

            faqSuggestionsBox.appendChild(suggestionItem);
          });

          faqSuggestionsBox.style.display = "block"; // Show suggestions box
        } else {
          faqSuggestionsBox.style.display = "none"; // Hide if no matches
        }
      } else {
        faqSuggestionsBox.style.display = "none"; // Hide when input is empty
      }
    });
  });

  //Test start Here!

  test("should display suggestions when input matches FAQ headings", () => {
    // Simulate user input
    faqSearchInput.value = "batman";
    faqSearchInput.dispatchEvent(new Event("input"));

    // Verify suggestions
    expect(faqSuggestionsBox.children.length).toBeGreaterThan(0);
    expect(faqSuggestionsBox.children[0].textContent).toBe("About Batman");
  });

  test("should limit suggestions to 5 items", () => {
    // Simulate user input
    faqSearchInput.value = "bat";
    faqSearchInput.dispatchEvent(new Event("input"));

    // Verify only 5 suggestions are displayed
    expect(faqSuggestionsBox.children.length).toBe(5);
  });

  test("should clear suggestions when input is empty", () => {
    // Simulate user input
    faqSearchInput.value = "";
    faqSearchInput.dispatchEvent(new Event("input"));

    // Verify no suggestions are displayed
    expect(faqSuggestionsBox.children.length).toBe(0);
    expect(faqSuggestionsBox.style.display).toBe("none");
  });

  test("should hide suggestions when no matches are found", () => {
    // Simulate user input
    faqSearchInput.value = "xyz";
    faqSearchInput.dispatchEvent(new Event("input"));

    // Verify no suggestions are displayed
    expect(faqSuggestionsBox.children.length).toBe(0);
    expect(faqSuggestionsBox.style.display).toBe("none");
  });

  test("should navigate to the correct link when a suggestion is clicked", () => {
    // Simulate user input
    faqSearchInput.value = "batman";
    faqSearchInput.dispatchEvent(new Event("input"));

    // Simulate clicking the first suggestion
    const firstSuggestion = faqSuggestionsBox.children[0];
    firstSuggestion.click();

    // Verify window location (mocked)
    expect(window.location.href).toBe("#about-batman");
  });
});

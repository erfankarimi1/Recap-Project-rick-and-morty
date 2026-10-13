export const NavButton = () => {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.textContent = "Next";

  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.textContent = "Previous";

  return { prevButton, nextButton };
};

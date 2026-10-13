export const form = document.createElement("form");

export const SearchBar = () => {
  const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]',
  );
  form.classList.add("search-bar");
  form.setAttribute("data-js", "search-bar");
  form.setAttribute("action", "");

  const input = document.createElement("input");
  input.setAttribute("name", "query");
  input.classList.add("search-bar__input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");

  const img = document.createElement("img");
  img.classList.add("search-bar__icon");
  img.src = "assets/magnifying-glass.png";
  img.setAttribute("alt", "");

  searchBarContainer.append(form);
  form.append(input, button);
  button.append(img);
  return searchBarContainer;
};

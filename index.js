import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const mainAPI = "https://rickandmortyapi.com/api/character/";
let parameter = "";

async function fetchCharacters() {
  if (searchQuery != "") {
    parameter = `?page=${page}&name=${searchQuery}`;
  } else {
    page = 1;
    parameter = `?page=${page}`;
  }

  const url = mainAPI + parameter;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log(data);

  maxPage = data.info.pages;
  pagination.textContent = `Page ${page} of ${maxPage}`;

  cardContainer.innerHTML = "";

  for (const result of results) {
    cardContainer.append(createCharacterCard(result));
  }
}

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

fetchCharacters();

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = e.target.elements.query.value;
  searchQuery = searchValue;
  fetchCharacters();
});

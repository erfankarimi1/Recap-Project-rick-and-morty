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

async function fetchCharacters() {
  const api = "https://rickandmortyapi.com/api/character";
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
}

cardContainer.innerHTML = createCharacterCard();

fetchCharacters();
createCharacterCard();

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

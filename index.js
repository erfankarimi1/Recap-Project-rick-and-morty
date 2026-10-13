import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { SearchBar, form } from "./components/SearchBar/SearchBar.js";
const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBar = form;
SearchBar();
const navigation = document.querySelector('[data-js="navigation"]');

const { prevButton, nextButton } = NavButton();
const pagination = NavPagination();
navigation.append(prevButton, pagination, nextButton);

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
    parameter = `?page=${page}`;
  }

  const url = mainAPI + parameter;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  maxPage = data.info.pages;
  pagination.textContent = `Page ${page} of ${maxPage}`;

  cardContainer.innerHTML = "";

  for (const result of results) {
    cardContainer.append(createCharacterCard(result));
  }
}

function nextBtn() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}
function prevBtn() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

function searchData(e) {
  e.preventDefault();
  const searchValue = searchBar.query.value;
  searchQuery = searchValue;
  fetchCharacters();
}

fetchCharacters();

searchBar.addEventListener("click", searchData);
nextButton.addEventListener("click", nextBtn);
prevButton.addEventListener("click", prevBtn);

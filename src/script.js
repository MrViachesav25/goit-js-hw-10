
import { fetchCountries } from './fetchCountries.js';
import { createCountriesListMarkup } from './countriesListMarkup.js';
import { createCountriesInfoMarkup  } from './countriesInfoMarkup.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const searchBoxEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchBoxEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    return;
  }
  fetchCountries(inputValue)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length === 1) {
        const language = Object.values(countries[0].languages).join(', ');
        const country = countries[0];
        createCountriesInfoMarkup(
          countryInfoEl,
          country.flags.svg,
          country.name.official,
          country.capital,
          country.population,
          language
        );
      } else if (countries.length > 1 && countries.length <= 10) {
        countries.forEach(country => {
          createCountriesListMarkup(countryListEl, country.flags.svg, country.name.official);
        });
      } else {
        Notify.failure('Oops, there is no country with that name');
      }
    })
    .catch(err => console.log(err));
}
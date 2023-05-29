
  function createCountriesListMarkup(elem, flag, name) {
    const markup = `<li class="country-list-el"><img src="${flag}" alt="${name}" width="40" />${name}</li>`;
    elem.insertAdjacentHTML('beforeend', markup);
  }
  export { createCountriesListMarkup };

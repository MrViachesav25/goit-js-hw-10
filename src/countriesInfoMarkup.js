function createCountriesInfoMarkup(elem, flag, name, capital, population, language) {
    const markup = `
  <div class="wrapper">
      <img src="${flag}" alt="${name}" width="40" />
      <h2>${name}</h2>
  </div>
  <p><b>Capital: </b>${capital}</p>
  <p><b>Population: </b>${population}</p>
  <p><b>Languages: </b>${language}</p>
  `;
    elem.insertAdjacentHTML('beforeend', markup);
  }
  export { createCountriesInfoMarkup };
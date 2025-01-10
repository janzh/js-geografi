// const countriesEl = document.querySelector('#countries')

import countries from "../data/countries.js";

const countriesEl = document.createElement('div');
countriesEl.id = 'countries';

countries.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.className = 'country';
    countriesEl.appendChild(countryEl)

    const nameNode = document.createElement('p');
    nameNode.innerHTML = country.name
    countryEl.appendChild(nameNode);

    const capital = document.createElement('p');
    capital.innerHTML = country.capital;
    countryEl.appendChild(capital);

    document.body.appendChild(countriesEl);
})

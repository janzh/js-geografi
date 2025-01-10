import countries from "../data/countries.js";

const countriesEl = document.createElement('div');
countriesEl.id = 'countries';

countries.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.className = 'country';
    countriesEl.appendChild(countryEl)

    const nameNode = document.createElement('span');
    nameNode.innerHTML = country.name
    countryEl.appendChild(nameNode);

    const capital = document.createElement('span');
    capital.innerHTML = country.capital;
    countryEl.appendChild(capital);

    document.body.appendChild(countriesEl);
})

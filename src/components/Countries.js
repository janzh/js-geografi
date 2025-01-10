import countries from "../../data/countries.js";

class Country extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" });

        const name = this.getAttribute("name");
        const capital = this.getAttribute("capital");

        shadow.innerHTML = `
            <style>
            :root{
    --font-base: 16px
}

.country {
    margin-bottom: calc(var(--font-base) * 1);

    span:not(:last-child) {
        margin-right: calc(var(--font-base) * 0.5);
    }
}
            </style>
            <div class="country">
                <span>${name}</span>
                <span>${capital}</span>
            </div>
        `;
    }
}

class Countries extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
        #countries {
            :root{
                --font-base: 16px
            }
            margin-bottom: calc(var(--font-base) * 2);
        }
        </style>
        <div class="countries"></div>
        `;

        this.listContainer = shadow.querySelector(".countries")
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        countries.forEach((country) => {
            const countryEl = document.createElement("div")

            countryEl.setAttribute("name", country.name);
            countryEl.setAttribute("capital", country.capital);

            shadow.appendChild(countryEl)
        })
    }
}

customElements.define('country-list', Countries);

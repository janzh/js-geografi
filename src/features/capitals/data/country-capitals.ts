export enum Continent {
  AFRICA,
  AMERICA,
  ASIA,
  EUROPE,
  OCEANIA,
}

export interface CountryCapital {
  country: string;
  city?: string;
  continent?: Continent;
}

const countryCapitals: CountryCapital[] = [
  {
    country: "Afghanistan",
    city: "Kabul",
    continent: Continent.ASIA,
  },
  {
    country: "Albania",
    city: "Tirana",
    continent: Continent.EUROPE,
  },
  {
    country: "Algeria",
    city: "Alger",
    continent: Continent.AFRICA,
  },
  {
    country: "Andorra",
    city: "Andorra la Vella",
    continent: Continent.EUROPE,
  },
  {
    country: "Angola",
    city: "Luanda",
    continent: Continent.AFRICA,
  },
  {
    country: "Antigua og Barbuda",
    city: "Saint John's",
    continent: Continent.AMERICA,
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    continent: Continent.AMERICA,
  },
  {
    country: "Armenia",
    city: "Jerevan",
    continent: Continent.ASIA,
  },
  {
    country: "Australia",
    city: "Canberra",
    continent: Continent.OCEANIA,
  },
  {
    country: "Aserbajdsjan",
    city: "Baku",
    continent: Continent.ASIA,
  },
  {
    country: "Bahamas",
    city: "Nassau",
    continent: Continent.AMERICA,
  },
  {
    country: "Bahrain",
    city: "Manama",
    continent: Continent.ASIA,
  },
  {
    country: "Bangladesh",
    city: "Dhaka",
    continent: Continent.ASIA,
  },
  {
    country: "Barbados",
    city: "Bridgetown",
    continent: Continent.AMERICA,
  },
  {
    country: "Belarus",
    city: "Minsk",
    continent: Continent.EUROPE,
  },
  {
    country: "Belgium",
    city: "Brussel",
    continent: Continent.EUROPE,
  },
  {
    country: "Belize",
    city: "Belmopan",
    continent: Continent.AMERICA,
  },
  {
    country: "Benin",
    city: "Porto-Novo",
    continent: Continent.AFRICA,
  },
  {
    country: "Bhutan",
    city: "Thimphu",
    continent: Continent.ASIA,
  },
  {
    country: "Bolivia",
    city: "Sucre",
    continent: Continent.AMERICA,
  },
  {
    country: "Bosnia-Hercegovina",
    city: "Sarajevo",
    continent: Continent.EUROPE,
  },
  {
    country: "Botswana",
    city: "Gaborone",
    continent: Continent.AFRICA,
  },
  {
    country: "Brasil",
    city: "Brasilia",
    continent: Continent.AMERICA,
  },
  {
    country: "Brunei",
    city: "Bandar Seri Begawan",
    continent: Continent.ASIA,
  },
  {
    country: "Bulgaria",
    city: "Sofia",
    continent: Continent.EUROPE,
  },
  {
    country: "Burkina Faso",
    city: "Ouagadougou",
    continent: Continent.AFRICA,
  },
  {
    country: "Burundi",
    city: "Gitega",
    continent: Continent.AFRICA,
  },
  {
    country: "Canada",
    city: "Ottawa",
    continent: Continent.AMERICA,
  },
  {
    country: "Chile",
    city: "Santiago de Chile",
    continent: Continent.AMERICA,
  },
  {
    country: "Colombia",
    city: "Bogota",
    continent: Continent.AMERICA,
  },
  {
    country: "Costa Rica",
    city: "San Jose",
    continent: Continent.AMERICA,
  },
  {
    country: "Cuba",
    city: "Havanna",
    continent: Continent.AMERICA,
  },
  {
    country: "Denmark",
    city: "København",
    continent: Continent.EUROPE,
  },
  {
    country: "Djibouti",
    city: "Djibouti",
    continent: Continent.ASIA,
  },
  {
    country: "Dominica",
    city: "Roseau",
    continent: Continent.OCEANIA,
  },
  {
    country: "Den dominikanske republikk",
    city: "Santo Domingo",
    continent: Continent.AMERICA,
  },
  {
    country: "Ecuador",
    city: "Quito",
    continent: Continent.AMERICA,
  },
  {
    country: "Egypt",
    city: "Kairo",
    continent: Continent.AFRICA,
  },
  {
    country: "El Salvador",
    city: "San Salvador",
    continent: Continent.AMERICA,
  },
  {
    country: "Elfenbenskysten",
    city: "Yamoussoukro",
    continent: Continent.AFRICA,
  },
  {
    country: "Ekvatorial-Guinea",
    city: "Malabo",
    continent: Continent.AFRICA,
  },
  {
    country: "Eritrea",
    city: "Asmara",
    continent: Continent.AFRICA,
  },
  {
    country: "Estland",
    city: "Tallinn",
    continent: Continent.EUROPE,
  },
  {
    country: "Eswatini",
    city: "Mbabane",
    continent: Continent.AFRICA,
  },
  {
    country: "Etiopia",
    city: "Addis Abeba",
    continent: Continent.AFRICA,
  },
  {
    country: "Fiji",
    city: "Suva",
    continent: Continent.OCEANIA,
  },
  {
    country: "Filippinene",
    city: "Manila",
    continent: Continent.ASIA,
  },
  {
    country: "Finland",
    city: "Helsinki",
    continent: Continent.EUROPE,
  },
  {
    country: "De forente arabiske emirater",
    city: "Abu Dhabi",
    continent: Continent.ASIA,
  },
  {
    country: "Frankrike",
    city: "Paris",
    continent: Continent.EUROPE,
  },
  {
    country: "Fransk Guiana",
    city: "Cayenne",
    continent: Continent.AMERICA,
  },
  {
    country: "Gabon",
    city: "Libreville",
    continent: Continent.AFRICA,
  },
  {
    country: "Gambia",
    city: "Banjul",
    continent: Continent.AFRICA,
  },
  {
    country: "Georgia",
    city: "Tbilisi",
    continent: Continent.EUROPE,
  },
  {
    country: "Ghana",
    city: "Accra",
    continent: Continent.AFRICA,
  },
  {
    country: "Grenada",
    city: "Saint George's",
    continent: Continent.AMERICA,
  },
  {
    country: "Guatemala",
    city: "Guatemala",
    continent: Continent.AMERICA,
  },
  {
    country: "Guinea",
    city: "Conakry",
    continent: Continent.AFRICA,
  },
  {
    country: "Guinea-Bissau",
    city: "Bissau",
    continent: Continent.AFRICA,
  },
  {
    country: "Guyana",
    city: "Georgetown",
    continent: Continent.AMERICA,
  },
  {
    country: "Haiti",
    city: "Port-au-Prince",
    continent: Continent.AMERICA,
  },
  {
    country: "Hellas",
    city: "Athen",
    continent: Continent.EUROPE,
  },
  {
    country: "Honduras",
    city: "Tegucigalpa",
    continent: Continent.AMERICA,
  },
  {
    country: "India",
    city: "New Delhi",
    continent: Continent.ASIA,
  },
  {
    country: "Indonesia",
    city: "Jakarta",
    continent: Continent.ASIA,
  },
  {
    country: "Iran",
    city: "Teheran",
    continent: Continent.ASIA,
  },
  {
    country: "Irak",
    city: "Bagdad",
    continent: Continent.ASIA,
  },
  {
    country: "Irland",
    city: "Dublin",
    continent: Continent.EUROPE,
  },
  {
    country: "Island",
    city: "Reykjavík",
    continent: Continent.EUROPE,
  },
  {
    country: "Israel",
    city: "Jerusalem",
    continent: Continent.ASIA,
  },
  {
    country: "Italia",
    city: "Roma",
    continent: Continent.EUROPE,
  },
  {
    country: "Jamaica",
    city: "Kingston",
    continent: Continent.AMERICA,
  },
  {
    country: "Japan",
    city: "Tokyo",
    continent: Continent.ASIA,
  },
  {
    country: "Jemen",
    city: "Sanaa",
    continent: Continent.ASIA,
  },
  {
    country: "Jordan",
    city: "Amman",
    continent: Continent.ASIA,
  },
  {
    country: "Kapp Verde",
    city: "Praia",
    continent: Continent.AFRICA,
  },
  {
    country: "Kambodsja",
    city: "Phnom Penh",
    continent: Continent.ASIA,
  },
  {
    country: "Kamerun",
    city: "Yaounde",
    continent: Continent.AFRICA,
  },
  {
    country: "Kazakhstan",
    city: "Astana",
    continent: Continent.ASIA,
  },
  {
    country: "Kenya",
    city: "Nairobi",
    continent: Continent.AFRICA,
  },
  {
    country: "Kina",
    city: "Beijing",
    continent: Continent.ASIA,
  },
  {
    country: "Kiribati",
    city: "Bairiki",
    continent: Continent.OCEANIA,
  },
  {
    country: "Komorene",
    city: "Moroni",
    continent: Continent.OCEANIA,
  },
  {
    country: "Den demokratiske republikken Kongo",
    city: "Kinshasa",
    continent: Continent.AFRICA,
  },
  {
    country: "Republikken Kongo",
    city: "Brazzaville",
    continent: Continent.AFRICA,
  },
  {
    country: "Kosovo",
    city: "Prishtina",
    continent: Continent.EUROPE,
  },
  {
    country: "Kroatia",
    city: "Zagreb",
    continent: Continent.EUROPE,
  },
  {
    country: "Kuwait",
    city: "Kuwait",
    continent: Continent.ASIA,
  },
  {
    country: "Kypros",
    city: "Nikosia",
    continent: Continent.EUROPE,
  },
  {
    country: "Kirgisistan",
    city: "Bishkek",
    continent: Continent.ASIA,
  },
  {
    country: "Laos",
    city: "Vientiane",
    continent: Continent.ASIA,
  },
  {
    country: "Latvia",
    city: "Riga",
    continent: Continent.EUROPE,
  },
  {
    country: "Lesotho",
    city: "Maseru",
    continent: Continent.AFRICA,
  },
  {
    country: "Libanon",
    city: "Beirut",
    continent: Continent.ASIA,
  },
  {
    country: "Liberia",
    city: "Monrovia",
    continent: Continent.AFRICA,
  },
  {
    country: "Libya",
    city: "Tripoli",
    continent: Continent.AFRICA,
  },
  {
    country: "Liechtenstein",
    city: "Vaduz",
    continent: Continent.EUROPE,
  },
  {
    country: "Litauen",
    city: "Vilnius",
    continent: Continent.EUROPE,
  },
  {
    country: "Luxembourg",
    city: "Luxembourg",
    continent: Continent.EUROPE,
  },
  {
    country: "Madagascar",
    city: "Antananarivo",
    continent: Continent.AFRICA,
  },
  {
    country: "Malawi",
    city: "Lilongwe",
    continent: Continent.AFRICA,
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    continent: Continent.ASIA,
  },
  {
    country: "Maldivene",
    city: "Male",
    continent: Continent.ASIA,
  },
  {
    country: "Mali",
    city: "Bamako",
    continent: Continent.AFRICA,
  },
  {
    country: "Malta",
    city: "Valletta",
    continent: Continent.EUROPE,
  },
  {
    country: "Marokko",
    city: "Rabat",
    continent: Continent.AFRICA,
  },
  {
    country: "Marshalløyene",
    city: "Majuro",
    continent: Continent.OCEANIA,
  },
  {
    country: "Mauritania",
    city: "Nouakchott",
    continent: Continent.AFRICA,
  },
  {
    country: "Mauritius",
    city: "Port Louis",
    continent: Continent.AFRICA,
  },
  {
    country: "Mexico",
    city: "Mexico by",
    continent: Continent.AMERICA,
  },
  {
    country: "Mikronesia",
    city: "Palikir",
    continent: Continent.OCEANIA,
  },
  {
    country: "Moldova",
    city: "Chisinau",
    continent: Continent.EUROPE,
  },
  {
    country: "Monaco",
    city: "Monaco",
    continent: Continent.EUROPE,
  },
  {
    country: "Mongolia",
    city: "Ulan Bator",
    continent: Continent.ASIA,
  },
  {
    country: "Montenegro",
    city: "Podgorica",
    continent: Continent.EUROPE,
  },
  {
    country: "Mosambik",
    city: "Maputo",
    continent: Continent.AFRICA,
  },
  {
    country: "Myanmar",
    city: "Nay Pyi Taw",
    continent: Continent.ASIA,
  },
  {
    country: "Namibia",
    city: "Windhoek",
    continent: Continent.AFRICA,
  },
  {
    country: "Nauru",
    city: "Yaren",
    continent: Continent.OCEANIA,
  },
  {
    country: "Nedeland",
    city: "Amsterdam",
    continent: Continent.EUROPE,
  },
  {
    country: "Nepal",
    city: "Kathmandu",
    continent: Continent.ASIA,
  },
  {
    country: "New Zealand",
    city: "Wellington",
    continent: Continent.OCEANIA,
  },
  {
    country: "Nicaragua",
    city: "Managua",
    continent: Continent.AMERICA,
  },
  {
    country: "Niger",
    city: "Niamey",
    continent: Continent.AFRICA,
  },
  {
    country: "Nigeria",
    city: "Abuja",
    continent: Continent.AFRICA,
  },
  {
    country: "Nord-Korea",
    city: "Pyongyang",
    continent: Continent.ASIA,
  },
  {
    country: "Nord-Makedonia",
    city: "Skopje",
    continent: Continent.EUROPE,
  },
  {
    country: "Norge",
    city: "Oslo",
    continent: Continent.EUROPE,
  },
  {
    country: "Ny-Caledonia",
    city: "Noum",
    continent: Continent.OCEANIA,
  },
  {
    country: "Oman",
    city: "Muskat",
    continent: Continent.ASIA,
  },
  {
    country: "Pakistan",
    city: "Islamabad",
    continent: Continent.ASIA,
  },
  {
    country: "Palau",
    city: "Ngerulmud",
    continent: Continent.OCEANIA,
  },
  {
    country: "Panama",
    city: "Panama by",
    continent: Continent.AMERICA,
  },
  {
    country: "Papua New Guinea",
    city: "Port Moresby",
    continent: Continent.OCEANIA,
  },
  {
    country: "Paraguay",
    city: "Asuncion",
    continent: Continent.AMERICA,
  },
  {
    country: "Peru",
    city: "Lima",
    continent: Continent.AMERICA,
  },
  {
    country: "Polen",
    city: "Warszawa",
    continent: Continent.EUROPE,
  },
  {
    country: "Portugal",
    city: "Lisboa",
    continent: Continent.EUROPE,
  },
  {
    country: "Qatar",
    city: "Doha",
    continent: Continent.ASIA,
  },
  {
    country: "Romania",
    city: "Bucuresti",
    continent: Continent.EUROPE,
  },
  {
    country: "Russland",
    city: "Moskva",
    continent: Continent.EUROPE,
  },
  {
    country: "Rwanda",
    city: "Kigali",
    continent: Continent.AFRICA,
  },
  {
    country: "Saint Kitts og Nevis",
    city: "Basseterre",
    continent: Continent.AMERICA,
  },
  {
    country: "Saint Lucia",
    city: "Castries",
    continent: Continent.AMERICA,
  },
  {
    country: "Saint Vincent og Grenadinene",
    city: "Kingstown",
    continent: Continent.AMERICA,
  },
  {
    country: "Salomonøyene",
    city: "Honiara",
    continent: Continent.OCEANIA,
  },
  {
    country: "Samoa",
    city: "Apia",
    continent: Continent.OCEANIA,
  },
  {
    country: "San Marino",
    city: "San Marino",
    continent: Continent.EUROPE,
  },
  {
    country: "Sao Tome og Principe",
    city: "Sao Tome",
    continent: Continent.AFRICA,
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    continent: Continent.ASIA,
  },
  {
    country: "Senegal",
    city: "Dakar",
    continent: Continent.AFRICA,
  },
  {
    country: "Den sentralafrikanske republikk",
    city: "Bangui",
    continent: Continent.AFRICA,
  },
  {
    country: "Serbia",
    city: "Beograd",
    continent: Continent.EUROPE,
  },
  {
    country: "Seychellene",
    city: "Victoria",
    continent: Continent.AFRICA,
  },
  {
    country: "Sierra Leone",
    city: "Freetown",
    continent: Continent.AFRICA,
  },
  {
    country: "Singapore",
    city: "Singapore",
    continent: Continent.ASIA,
  },
  {
    country: "Slovakia",
    city: "Bratislava",
    continent: Continent.EUROPE,
  },
  {
    country: "Slovenia",
    city: "Ljubljana",
    continent: Continent.EUROPE,
  },
  {
    country: "Somalia",
    city: "Mogadishu",
    continent: Continent.AFRICA,
  },
  {
    country: "Spania",
    city: "Madrid",
    continent: Continent.EUROPE,
  },
  {
    country: "Sri Lanka",
    city: "Colombo",
    continent: Continent.ASIA,
  },
  {
    country: "Storbritannia",
    city: "London",
    continent: Continent.EUROPE,
  },
  {
    country: "Sudan",
    city: "Khartoum",
    continent: Continent.AFRICA,
  },
  {
    country: "Surinam",
    city: "Paramaribo",
    continent: Continent.AMERICA,
  },
  {
    country: "Sveits",
    city: "Bern",
    continent: Continent.EUROPE,
  },
  {
    country: "Sverige",
    city: "Stockholm",
    continent: Continent.EUROPE,
  },
  {
    country: "Syria",
    city: "Damaskus",
    continent: Continent.ASIA,
  },
  {
    country: "Sør-afrika",
    city: "Pretoria",
    continent: Continent.AFRICA,
  },
  {
    country: "Sør-korea",
    city: "Seoul",
    continent: Continent.ASIA,
  },
  {
    country: "Sør-sudan",
    city: "Juba",
    continent: Continent.AFRICA,
  },
  {
    country: "Tadsjikistan",
    city: "Dusjanbe",
    continent: Continent.ASIA,
  },
  {
    country: "Tanzania",
    city: "Dodoma",
    continent: Continent.AFRICA,
  },
  {
    country: "Taiwan",
    city: "Taipei",
    continent: Continent.ASIA,
  },
  {
    country: "Thailand",
    city: "Bangkok",
    continent: Continent.ASIA,
  },
  {
    country: "Togo",
    city: "Lome",
    continent: Continent.AFRICA,
  },
  {
    country: "Tonga",
    city: "Nuku'alofa",
    continent: Continent.OCEANIA,
  },
  {
    country: "Trinidad og Tobago",
    city: "Port of spain",
    continent: Continent.AMERICA,
  },
  {
    country: "Tsjad",
    city: "N'Djamena",
    continent: Continent.AFRICA,
  },
  {
    country: "Tsjekkia",
    city: "Praha",
    continent: Continent.EUROPE,
  },
  {
    country: "Tunisia",
    city: "Tunis",
    continent: Continent.AFRICA,
  },
  {
    country: "Turkmenistan",
    city: "Asgabat",
    continent: Continent.ASIA,
  },
  {
    country: "Tuvalu",
    city: "Funafuti",
    continent: Continent.OCEANIA,
  },
  {
    country: "Tyrkia",
    city: "Ankara",
    continent: Continent.EUROPE,
  },
  {
    country: "Tyskland",
    city: "Berlin",
    continent: Continent.EUROPE,
  },
  {
    country: "Uganda",
    city: "Kampala",
    continent: Continent.AFRICA,
  },
  {
    country: "Ukraina",
    city: "Kyiv",
    continent: Continent.EUROPE,
  },
  {
    country: "Ungarn",
    city: "Budapest",
    continent: Continent.EUROPE,
  },
  {
    country: "Uruguay",
    city: "Montevideo",
    continent: Continent.AMERICA,
  },
  {
    country: "USA",
    city: "Washington",
    continent: Continent.AMERICA,
  },
  {
    country: "Usbekistan",
    city: "Tasjkent",
    continent: Continent.ASIA,
  },
  {
    country: "Vanuatu",
    city: "Port vila",
    continent: Continent.OCEANIA,
  },
  {
    country: "Vatikanstaten",
    city: "Vatikanstaten",
    continent: Continent.EUROPE,
  },
  {
    country: "Venezuela",
    city: "Caracas",
    continent: Continent.AMERICA,
  },
  {
    country: "Vietnam",
    city: "Hanoi",
    continent: Continent.ASIA,
  },
  {
    country: "Zambia",
    city: "Lusaka",
    continent: Continent.AFRICA,
  },
  {
    country: "Zimbabwe",
    city: "Harare",
    continent: Continent.AFRICA,
  },
  {
    country: "Øst-timor",
    city: "Dili",
    continent: Continent.ASIA,
  },
  {
    country: "Østerrike",
    city: "Wien",
    continent: Continent.EUROPE,
  },
];

export default countryCapitals;

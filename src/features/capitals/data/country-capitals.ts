interface CountryCapital {
  country: string;
  city?: string;
}

const countryCapitals: CountryCapital[] = [
  {
    country: "Afghanistan",
    city: "Kabul",
  },
  {
    country: "Albania",
    city: "Tirana",
  },
  {
    country: "Algeria",
    city: "Alger",
  },
  {
    country: "Andorra",
    city: "Andorra la Vella",
  },
  {
    country: "Angola",
    city: "Luanda",
  },
  {
    country: "Antigua og Barbuda",
    city: "Saint John's",
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
  },
  {
    country: "Armenia",
    city: "Jerevan",
  },
  {
    country: "Australia",
    city: "Canberra",
  },
  {
    country: "Aserbajdsjan",
    city: "Baku",
  },
  {
    country: "Bahamas",
    city: "Nassau",
  },
  {
    country: "Bahrain",
    city: "Manama",
  },
  {
    country: "Bangladesh",
    city: "Dhaka",
  },
  {
    country: "Barbados",
    city: "Bridgetown",
  },
  {
    country: "Belarus",
    city: "Minsk",
  },
  {
    country: "Belgium",
    city: "Brussel",
  },
  {
    country: "Belize",
    city: "Belmopan",
  },
  {
    country: "Benin",
    city: "Porto-Novo",
  },
  {
    country: "Bhutan",
    city: "Thimphu",
  },
  {
    country: "Bolivia",
    city: "Sucre",
  },
  {
    country: "Bosnia-Hercegovina",
    city: "Sarajevo",
  },
  {
    country: "Botswana",
    city: "Gaborone",
  },
  {
    country: "Brasil",
    city: "Brasilia",
  },
  {
    country: "Brunei",
    city: "Bandar Seri Begawan",
  },
  {
    country: "Bulgaria",
    city: "Sofia",
  },
  {
    country: "Burkina Faso",
    city: "Ouagadougou",
  },
  {
    country: "Burundi",
    city: "Gitega",
  },
  {
    country: "Canada",
    city: "Ottawa",
  },
  {
    country: "Chile",
    city: "Santiago de Chile",
  },
  {
    country: "Colombia",
    city: "Bogota",
  },
  {
    country: "Costa Rica",
    city: "San Jose",
  },
  {
    country: "Cuba",
    city: "Havanna",
  },
  {
    country: "Denmark",
    city: "København",
  },
  {
    country: "Djibouti",
    city: "Djibouti",
  },
  {
    country: "Dominica",
    city: "Roseau",
  },
  {
    country: "Den dominikanske republikk",
    city: "Santo Domingo",
  },
  {
    country: "Ecuador",
    city: "Quito",
  },
  {
    country: "Egypt",
    city: "Kairo",
  },
  {
    country: "El Salvador",
    city: "San Salvador",
  },
  {
    country: "Elfenbenskysten",
    city: "Yamoussoukro",
  },
  {
    country: "Ekvatorial-Guinea",
    city: "Malabo",
  },
  {
    country: "Eritrea",
    city: "Asmara",
  },
  {
    country: "Estland",
    city: "Tallinn",
  },
  {
    country: "Eswatini",
    city: "Mbabane",
  },
  {
    country: "Etiopia",
    city: "Addis Abeba",
  },
  {
    country: "Fiji",
    city: "Suva",
  },
  {
    country: "Filippinene",
    city: "Manila",
  },
  {
    country: "Finland",
    city: "Helsinki",
  },
  {
    country: "De forente arabiske emirater",
    city: "Abu Dhabi",
  },
  {
    country: "Frankrike",
    city: "Paris",
  },
  {
    country: "Fransk Guiana",
    city: "Cayenne",
  },
  {
    country: "Gabon",
    city: "Libreville",
  },
  {
    country: "Gambia",
    city: "Banjul",
  },
  {
    country: "Georgia",
    city: "Tbilisi",
  },
  {
    country: "Ghana",
    city: "Accra",
  },
  {
    country: "Grenada",
    city: "Saint George's",
  },
  {
    country: "Guatemala",
    city: "Guatemala",
  },
  {
    country: "Guinea",
    city: "Conakry",
  },
  {
    country: "Guinea-Bissau",
    city: "Bissau",
  },
  {
    country: "Guyana",
    city: "Georgetown",
  },
  {
    country: "Haiti",
    city: "Port-au-Prince",
  },
  {
    country: "Hellas",
    city: "Athen",
  },
  {
    country: "Honduras",
    city: "Tegucigalpa",
  },
  {
    country: "India",
    city: "New Delhi",
  },
  {
    country: "Indonesia",
    city: "Jakarta",
  },
  {
    country: "Iran",
    city: "Teheran",
  },
  {
    country: "Irak",
    city: "Bagdad",
  },
  {
    country: "Irland",
    city: "Dublin",
  },
  {
    country: "Island",
    city: "Reykjavík",
  },
  {
    country: "Israel",
    city: "Jerusalem",
  },
  {
    country: "Italia",
    city: "Roma",
  },
  {
    country: "Jamaica",
    city: "Kingston",
  },
  {
    country: "Japan",
    city: "Tokyo",
  },
  {
    country: "Jemen",
    city: "Sanaa",
  },
  {
    country: "Jordan",
    city: "Amman",
  },
  {
    country: "Kapp Verde",
    city: "Praia",
  },
  {
    country: "Kambodsja",
    city: "Phnom Penh",
  },
  {
    country: "Kamerun",
    city: "Yaounde",
  },
  {
    country: "Kazakhstan",
    city: "Astana",
  },
  {
    country: "Kenya",
    city: "Nairobi",
  },
  {
    country: "Kina",
    city: "Beijing",
  },
  {
    country: "Kiribati",
    city: "Bairiki",
  },
  {
    country: "Komorene",
    city: "Moroni",
  },
  {
    country: "Den demokratiske republikken Kongo",
    city: "Kinshasa",
  },
  {
    country: "Republikken Kongo",
    city: "Brazzaville",
  },
  {
    country: "Kosovo",
    city: "Prishtina",
  },
  {
    country: "Kroatia",
    city: "Zagreb",
  },
  {
    country: "Kuwait",
    city: "Kuwait",
  },
  {
    country: "Kypros",
    city: "Nikosia",
  },
  {
    country: "Kirgisistan",
    city: "Bishkek",
  },
  {
    country: "Laos",
    city: "Vientiane",
  },
  {
    country: "Latvia",
    city: "Riga",
  },
  {
    country: "Lesotho",
    city: "Maseru",
  },
  {
    country: "Libanon",
    city: "Beirut",
  },
  {
    country: "Liberia",
    city: "Monrovia",
  },
  {
    country: "Libya",
    city: "Tripoli",
  },
  {
    country: "Liechtenstein",
    city: "Vaduz",
  },
  {
    country: "Litauen",
    city: "Vilnius",
  },
  {
    country: "Luxembourg",
    city: "Luxembourg",
  },
  {
    country: "Madagascar",
    city: "Antananarivo",
  },
  {
    country: "Malawi",
    city: "Lilongwe",
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
  },
  {
    country: "Maldivene",
    city: "Male",
  },
  {
    country: "Mali",
    city: "Bamako",
  },
  {
    country: "Malta",
    city: "Valletta",
  },
  {
    country: "Marokko",
    city: "Rabat",
  },
  {
    country: "Marshalløyene",
    city: "Majuro",
  },
  {
    country: "Mauritania",
    city: "Nouakchott",
  },
  {
    country: "Mauritius",
    city: "Port Louis",
  },
  {
    country: "Mexico",
    city: "Mexico by",
  },
  {
    country: "Mikronesia",
    city: "Palikir",
  },
  {
    country: "Moldova",
    city: "Chisinau",
  },
  {
    country: "Monaco",
    city: "Monaco",
  },
  {
    country: "Mongolia",
    city: "Ulan Bator",
  },
  {
    country: "Montenegro",
    city: "Podgorica",
  },
  {
    country: "Mosambik",
    city: "Maputo",
  },
  {
    country: "Myanmar",
    city: "Nay Pyi Taw",
  },
  {
    country: "Namibia",
    city: "Windhoek",
  },
  {
    country: "Nauru",
    city: "Yaren",
  },
  {
    country: "Nedeland",
    city: "Amsterdam",
  },
  {
    country: "Nepal",
    city: "Kathmandu",
  },
  {
    country: "New Zealand",
    city: "Wellington",
  },
  {
    country: "Nicaragua",
    city: "Managua",
  },
  {
    country: "Niger",
    city: "Niamey",
  },
  {
    country: "Nigeria",
    city: "Abuja",
  },
  {
    country: "Nord-Korea",
    city: "Pyongyang",
  },
  {
    country: "Nord-Makedonia",
    city: "Skopje",
  },
  {
    country: "Norge",
    city: "Oslo",
  },
  {
    country: "Ny-Caledonia",
    city: "Noum",
  },
  {
    country: "Oman",
    city: "Muskat",
  },
  {
    country: "Pakistan",
    city: "Islamabad",
  },
  {
    country: "Palau",
    city: "Ngerulmud",
  },
  {
    country: "Panama",
    city: "Panama by",
  },
  {
    country: "Papua New Guinea",
    city: "Port Moresby",
  },
  {
    country: "Paraguay",
    city: "Asuncion",
  },
  {
    country: "Peru",
    city: "Lima",
  },
  {
    country: "Polen",
    city: "Warszawa",
  },
  {
    country: "Portugal",
    city: "Lisboa",
  },
  {
    country: "Qatar",
    city: "Doha",
  },
  {
    country: "Romania",
    city: "Bucuresti",
  },
  {
    country: "Russland",
    city: "Moskva",
  },
  {
    country: "Rwanda",
    city: "Kigali",
  },
  {
    country: "Saint Kitts og Nevis",
    city: "Basseterre",
  },
  {
    country: "Saint Lucia",
    city: "Castries",
  },
  {
    country: "Saint Vincent og Grenadinene",
    city: "Kingstown",
  },
  {
    country: "Salomonøyene",
    city: "Honiara",
  },
  {
    country: "Samoa",
    city: "Apia",
  },
  {
    country: "San Marino",
    city: "San Marino",
  },
  {
    country: "Sao Tome og Principe",
    city: "Sao Tome",
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
  },
  {
    country: "Senegal",
    city: "Dakar",
  },
  {
    country: "Den sentralafrikanske republikk",
    city: "Bangui",
  },
  {
    country: "Serbia",
    city: "Beograd",
  },
  {
    country: "Seychellene",
    city: "Victoria",
  },
  {
    country: "Sierra Leone",
    city: "Freetown",
  },
  {
    country: "Singapore",
    city: "Singapore",
  },
  {
    country: "Slovakia",
    city: "Bratislava",
  },
  {
    country: "Slovenia",
    city: "Ljubljana",
  },
  {
    country: "Somalia",
    city: "Mogadishu",
  },
  {
    country: "Spania",
    city: "Madrid",
  },
  {
    country: "Sri Lanka",
    city: "Colombo",
  },
  {
    country: "Storbritannia",
    city: "London",
  },
  {
    country: "Sudan",
    city: "Khartoum",
  },
  {
    country: "Surinam",
    city: "Paramaribo",
  },
  {
    country: "Sveits",
    city: "Bern",
  },
  {
    country: "Sverige",
    city: "Stockholm",
  },
  {
    country: "Syria",
    city: "Damaskus",
  },
  {
    country: "Sør-afrika",
    city: "Pretoria",
  },
  {
    country: "Sør-korea",
    city: "Seoul",
  },
  {
    country: "Sør-sudan",
    city: "Juba",
  },
  {
    country: "Tadsjikistan",
    city: "Dusjanbe",
  },
  {
    country: "Tanzania",
    city: "Dodoma",
  },
  {
    country: "Taiwan",
    city: "Taipei",
  },
  {
    country: "Thailand",
    city: "Bangkok",
  },
  {
    country: "Togo",
    city: "Lome",
  },
  {
    country: "Tonga",
    city: "Nuku'alofa",
  },
  {
    country: "Trinidad og Tobago",
    city: "Port of spain",
  },
  {
    country: "Tsjad",
    city: "N'Djamena",
  },
  {
    country: "Tsjekkia",
    city: "Praha",
  },
  {
    country: "Tunisia",
    city: "Tunis",
  },
  {
    country: "Turkmenistan",
    city: "Asgabat",
  },
  {
    country: "Tuvalu",
    city: "Funafuti",
  },
  {
    country: "Tyrkia",
    city: "Ankara",
  },
  {
    country: "Tyskland",
    city: "Berlin",
  },
  {
    country: "Uganda",
    city: "Kampala",
  },
  {
    country: "Ukraina",
    city: "Kyiv",
  },
  {
    country: "Ungarn",
    city: "Budapest",
  },
  {
    country: "Uruguay",
    city: "Montevideo",
  },
  {
    country: "USA",
    city: "Washington",
  },
  {
    country: "Usbekistan",
    city: "Tasjkent",
  },
  {
    country: "Vanuatu",
    city: "Port vila",
  },
  {
    country: "Vatikanstaten",
    city: "Vatikanstaten",
  },
  {
    country: "Venezuela",
    city: "Caracas",
  },
  {
    country: "Vietnam",
    city: "Hanoi",
  },
  {
    country: "Zambia",
    city: "Lusaka",
  },
  {
    country: "Zimbabwe",
    city: "Harare",
  },
  {
    country: "Øst-timor",
    city: "Dili",
  },
  {
    country: "Østerrike",
    city: "Wien",
  },
];

export default countryCapitals;

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    {
        id: "Africa",
        name: "Africa",
        options: {},
    },
    {
        id: "Americas",
        name: "Americas",
        options: {},
    },
    {
        id: "Asia",
        name: "Asia",
        options: {},
    },
    {
        id: "Europe",
        name: "Europe",
        options: {},
    },
    {
        id: "Pacific",
        name: "Pacific",
        options: {},
    },
    {
        id: "Middle East",
        name: "Middle East",
        options: {},
    },
    {
        id: "Afghanistan",
        name: "Afghanistan",
        options: {},
    },
    {
        id: "Åland Islands",
        name: "Åland Islands",
        options: {},
    },
    {
        id: "Aland Islands",
        name: "Aland Islands",
        options: {},
    },
    {
        id: "Albania",
        name: "Albania",
        options: {},
    },
    {
        id: "Algeria",
        name: "Algeria",
        options: {},
    },
    {
        id: "American Samoa",
        name: "American Samoa",
        options: {},
    },
    {
        id: "Andorra",
        name: "Andorra",
        options: {},
    },
    {
        id: "Angola",
        name: "Angola",
        options: {},
    },
    {
        id: "Anguilla",
        name: "Anguilla",
        options: {},
    },
    {
        id: "Antarctica",
        name: "Antarctica",
        options: {},
    },
    {
        id: "Antigua and Barbuda",
        name: "Antigua and Barbuda",
        options: {},
    },
    {
        id: "Argentina",
        name: "Argentina",
        options: {},
    },
    {
        id: "Armenia",
        name: "Armenia",
        options: {},
    },
    {
        id: "Aruba",
        name: "Aruba",
        options: {},
    },
    {
        id: "Australia",
        name: "Australia",
        options: {},
    },
    {
        id: "Austria",
        name: "Austria",
        options: {},
    },
    {
        id: "Azerbaijan",
        name: "Azerbaijan",
        options: {},
    },
    {
        id: "Bahamas",
        name: "Bahamas",
        options: {},
    },
    {
        id: "Bahrain",
        name: "Bahrain",
        options: {},
    },
    {
        id: "Bangladesh",
        name: "Bangladesh",
        options: {},
    },
    {
        id: "Barbados",
        name: "Barbados",
        options: {},
    },
    {
        id: "Belarus",
        name: "Belarus",
        options: {},
    },
    {
        id: "Belgium",
        name: "Belgium",
        options: {},
    },
    {
        id: "Belize",
        name: "Belize",
        options: {},
    },
    {
        id: "Benin",
        name: "Benin",
        options: {},
    },
    {
        id: "Bermuda",
        name: "Bermuda",
        options: {},
    },
    {
        id: "Bhutan",
        name: "Bhutan",
        options: {},
    },
    {
        id: "Bolivia",
        name: "Bolivia",
        options: {},
    },
    {
        id: "Bonaire, Sint Eustatius and Saba",
        name: "Bonaire, Sint Eustatius and Saba",
        options: {},
    },
    {
        id: "Bosnia and Herzegovina",
        name: "Bosnia and Herzegovina",
        options: {},
    },
    {
        id: "Botswana",
        name: "Botswana",
        options: {},
    },
    {
        id: "Bouvet Island",
        name: "Bouvet Island",
        options: {},
    },
    {
        id: "Brazil",
        name: "Brazil",
        options: {},
    },
    {
        id: "British Indian Ocean Territory",
        name: "British Indian Ocean Territory",
        options: {},
    },
    {
        id: "British Virgin Islands",
        name: "British Virgin Islands",
        options: {},
    },
    {
        id: "Brunei",
        name: "Brunei",
        options: {},
    },
    {
        id: "Bulgaria",
        name: "Bulgaria",
        options: {},
    },
    {
        id: "Burkina Faso",
        name: "Burkina Faso",
        options: {},
    },
    {
        id: "Burundi",
        name: "Burundi",
        options: {},
    },
    {
        id: "Cabo Verde",
        name: "Cabo Verde",
        options: {},
    },
    {
        id: "Cambodia",
        name: "Cambodia",
        options: {},
    },
    {
        id: "Cameroon",
        name: "Cameroon",
        options: {},
    },
    {
        id: "Canada",
        name: "Canada",
        options: {},
    },
    {
        id: "Cayman Islands",
        name: "Cayman Islands",
        options: {},
    },
    {
        id: "Central African Republic",
        name: "Central African Republic",
        options: {},
    },
    {
        id: "Chad",
        name: "Chad",
        options: {},
    },
    {
        id: "Chile",
        name: "Chile",
        options: {},
    },
    {
        id: "China",
        name: "China",
        options: {},
    },
    {
        id: "Christmas Island",
        name: "Christmas Island",
        options: {},
    },
    {
        id: "Cocos (Keeling Islands)",
        name: "Cocos (Keeling Islands)",
        options: {},
    },
    {
        id: "Colombia",
        name: "Colombia",
        options: {},
    },
    {
        id: "Comoros",
        name: "Comoros",
        options: {},
    },
    {
        id: "Congo",
        name: "Congo",
        options: {},
    },
    {
        id: "Congo (the Democratic Republic of the)",
        name: "Congo (the Democratic Republic of the)",
        options: {},
    },
    {
        id: "Cook Islands",
        name: "Cook Islands",
        options: {},
    },
    {
        id: "Curacao",
        name: "Curacao",
        options: {},
    },
    {
        id: "Costa Rica",
        name: "Costa Rica",
        options: {},
    },
    {
        id: "Côte dI'voire",
        name: "Côte d'Ivoire",
        options: {},
    },
    {
        id: "Croatia",
        name: "Croatia",
        options: {},
    },
    {
        id: "Cuba",
        name: "Cuba",
        options: {},
    },
    {
        id: "Curaçao",
        name: "Curaçao",
        options: {},
    },
    {
        id: "Cyprus",
        name: "Cyprus",
        options: {},
    },
    {
        id: "Czechia",
        name: "Czechia",
        options: {},
    },
    {
        id: "Czech Republic",
        name: "Czech Republic",
        options: {},
    },
    {
        id: "Denmark",
        name: "Denmark",
        options: {},
    },
    {
        id: "Djibouti",
        name: "Djibouti",
        options: {},
    },
    {
        id: "Dominica",
        name: "Dominica",
        options: {},
    },
    {
        id: "Dominican Republic",
        name: "Dominican Republic",
        options: {},
    },
    {
        id: "Ecuador",
        name: "Ecuador",
        options: {},
    },
    {
        id: "Egypt",
        name: "Egypt",
        options: {},
    },
    {
        id: "El Salvador",
        name: "El Salvador",
        options: {},
    },
    {
        id: "Equatorial Guinea",
        name: "Equatorial Guinea",
        options: {},
    },
    {
        id: "Eritrea",
        name: "Eritrea",
        options: {},
    },
    {
        id: "Estonia",
        name: "Estonia",
        options: {},
    },
    {
        id: "Falkland Islands",
        name: "Falkland Islands",
        options: {},
    },
    {
        id: "Eswatini",
        name: "Eswatini",
        options: {},
    },
    {
        id: "Ethiopia",
        name: "Ethiopia",
        options: {},
    },
    {
        id: "European Union",
        name: "European Union",
        options: {},
    },
    {
        id: "Falkland Islands (Malvinas)",
        name: "Falkland Islands (Malvinas)",
        options: {},
    },
    {
        id: "Faroe Islands",
        name: "Faroe Islands",
        options: {},
    },
    {
        id: "Fiji",
        name: "Fiji",
        options: {},
    },
    {
        id: "Finland",
        name: "Finland",
        options: {},
    },
    {
        id: "France",
        name: "France",
        options: {},
    },
    {
        id: "French Guiana",
        name: "French Guiana",
        options: {},
    },
    {
        id: "French Polynesia",
        name: "French Polynesia",
        options: {},
    },
    {
        id: "French Southern Territories",
        name: "French Southern Territories",
        options: {},
    },
    {
        id: "Gabon",
        name: "Gabon",
        options: {},
    },
    {
        id: "Gambia",
        name: "Gambia",
        options: {},
    },
    {
        id: "Georgia",
        name: "Georgia",
        options: {},
    },
    {
        id: "Germany",
        name: "Germany",
        options: {},
    },
    {
        id: "Ghana",
        name: "Ghana",
        options: {},
    },
    {
        id: "Gibraltar",
        name: "Gibraltar",
        options: {},
    },
    {
        id: "Greece",
        name: "Greece",
        options: {},
    },
    {
        id: "Greenland",
        name: "Greenland",
        options: {},
    },
    {
        id: "Grenada",
        name: "Grenada",
        options: {},
    },
    {
        id: "Guadeloupe",
        name: "Guadeloupe",
        options: {},
    },
    {
        id: "Guam",
        name: "Guam",
        options: {},
    },
    {
        id: "Guatemala",
        name: "Guatemala",
        options: {},
    },
    {
        id: "Guernsey",
        name: "Guernsey",
        options: {},
    },
    {
        id: "Guinea",
        name: "Guinea",
        options: {},
    },
    {
        id: "Guinea-Bissau",
        name: "Guinea-Bissau",
        options: {},
    },
    {
        id: "Guyana",
        name: "Guyana",
        options: {},
    },
    {
        id: "Haiti",
        name: "Haiti",
        options: {},
    },
    {
        id: "Heard Island and McDonald Islands",
        name: "Heard Island and McDonald Islands",
        options: {},
    },
    {
        id: "Holy See",
        name: "Holy See",
        options: {},
    },
    {
        id: "Honduras",
        name: "Honduras",
        options: {},
    },
    {
        id: "Hong Kong",
        name: "Hong Kong",
        options: {},
    },
    {
        id: "Hungary",
        name: "Hungary",
        options: {},
    },
    {
        id: "Iceland",
        name: "Iceland",
        options: {},
    },
    {
        id: "India",
        name: "India",
        options: {},
    },
    {
        id: "Indonesia",
        name: "Indonesia",
        options: {},
    },
    {
        id: "Iraq",
        name: "Iraq",
        options: {},
    },
    {
        id: "Ireland",
        name: "Ireland",
        options: {},
    },
    {
        id: "Isle of Man",
        name: "Isle of Man",
        options: {},
    },
    {
        id: "Israel",
        name: "Israel",
        options: {},
    },
    {
        id: "Italy",
        name: "Italy",
        options: {},
    },
    {
        id: "Jamaica",
        name: "Jamaica",
        options: {},
    },
    {
        id: "Japan",
        name: "Japan",
        options: {},
    },
    {
        id: "Jersey",
        name: "Jersey",
        options: {},
    },
    {
        id: "Jordan",
        name: "Jordan",
        options: {},
    },
    {
        id: "Kazakhstan",
        name: "Kazakhstan",
        options: {},
    },
    {
        id: "Kenya",
        name: "Kenya",
        options: {},
    },
    {
        id: "Kiribati",
        name: "Kiribati",
        options: {},
    },
    {
        id: "Kosovo",
        name: "Kosovo",
        options: {},
    },
    {
        id: "Kuwait",
        name: "Kuwait",
        options: {},
    },
    {
        id: "Kyrgyzstan",
        name: "Kyrgyzstan",
        options: {},
    },
    {
        id: "Laos",
        name: "Laos",
        options: {},
    },
    {
        id: "Latvia",
        name: "Latvia",
        options: {},
    },
    {
        id: "Lebanon",
        name: "Lebanon",
        options: {},
    },
    {
        id: "Lesotho",
        name: "Lesotho",
        options: {},
    },
    {
        id: "Liberia",
        name: "Liberia",
        options: {},
    },
    {
        id: "Libya",
        name: "Libya",
        options: {},
    },
    {
        id: "Liechtenstein",
        name: "Liechtenstein",
        options: {},
    },
    {
        id: "Lithuania",
        name: "Lithuania",
        options: {},
    },
    {
        id: "Luxembourg",
        name: "Luxembourg",
        options: {},
    },
    {
        id: "Macau",
        name: "Macau",
        options: {},
    },
    {
        id: "Macao",
        name: "Macao",
        options: {},
    },
    {
        id: "Macedonia",
        name: "Macedonia",
        options: {},
    },
    {
        id: "Madagascar",
        name: "Madagascar",
        options: {},
    },
    {
        id: "Malawi",
        name: "Malawi",
        options: {},
    },
    {
        id: "Malaysia",
        name: "Malaysia",
        options: {},
    },
    {
        id: "Maldives",
        name: "Maldives",
        options: {},
    },
    {
        id: "Mali",
        name: "Mali",
        options: {},
    },
    {
        id: "Malta",
        name: "Malta",
        options: {},
    },
    {
        id: "Marshall Islands",
        name: "Marshall Islands",
        options: {},
    },
    {
        id: "Martinique",
        name: "Martinique",
        options: {},
    },
    {
        id: "Mauritania",
        name: "Mauritania",
        options: {},
    },
    {
        id: "Mauritius",
        name: "Mauritius",
        options: {},
    },
    {
        id: "Mayotte",
        name: "Mayotte",
        options: {},
    },
    {
        id: "Mexico",
        name: "Mexico",
        options: {},
    },
    {
        id: "Micronesia (Federated States of)",
        name: "Micronesia (Federated States of)",
        options: {},
    },
    {
        id: "Moldova",
        name: "Moldova",
        options: {},
    },
    {
        id: "Monaco",
        name: "Monaco",
        options: {},
    },
    {
        id: "Mongolia",
        name: "Mongolia",
        options: {},
    },
    {
        id: "Montenegro",
        name: "Montenegro",
        options: {},
    },
    {
        id: "Montserrat",
        name: "Montserrat",
        options: {},
    },
    {
        id: "Morocco",
        name: "Morocco",
        options: {},
    },
    {
        id: "Mozambique",
        name: "Mozambique",
        options: {},
    },
    {
        id: "Myanmar",
        name: "Myanmar",
        options: {},
    },
    {
        id: "Namibia",
        name: "Namibia",
        options: {},
    },
    {
        id: "Nauru",
        name: "Nauru",
        options: {},
    },
    {
        id: "Nepal",
        name: "Nepal",
        options: {},
    },
    {
        id: "Netherlands",
        name: "Netherlands",
        options: {},
    },
    {
        id: "New Caledonia",
        name: "New Caledonia",
        options: {},
    },
    {
        id: "New Zealand",
        name: "New Zealand",
        options: {},
    },
    {
        id: "Nicaragua",
        name: "Nicaragua",
        options: {},
    },
    {
        id: "Niger",
        name: "Niger",
        options: {},
    },
    {
        id: "Nigeria",
        name: "Nigeria",
        options: {},
    },
    {
        id: "Niue",
        name: "Niue",
        options: {},
    },
    {
        id: "Norfolk Island",
        name: "Norfolk Island",
        options: {},
    },
    {
        id: "North Macedonia",
        name: "North Macedonia",
        options: {},
    },
    {
        id: "Northern Mariana Islands",
        name: "Northern Mariana Islands",
        options: {},
    },
    {
        id: "Norway",
        name: "Norway",
        options: {},
    },
    {
        id: "Oman",
        name: "Oman",
        options: {},
    },
    {
        id: "Pakistan",
        name: "Pakistan",
        options: {},
    },
    {
        id: "Palau",
        name: "Palau",
        options: {},
    },
    {
        id: "Palestine, State of",
        name: "Palestine, State of",
        options: {},
    },
    {
        id: "Panama",
        name: "Panama",
        options: {},
    },
    {
        id: "Papua New Guinea",
        name: "Papua New Guinea",
        options: {},
    },
    {
        id: "Paraguay",
        name: "Paraguay",
        options: {},
    },
    {
        id: "Peru",
        name: "Peru",
        options: {},
    },
    {
        id: "Philippines",
        name: "Philippines",
        options: {},
    },
    {
        id: "Pitcairn",
        name: "Pitcairn",
        options: {},
    },
    {
        id: "Poland",
        name: "Poland",
        options: {},
    },
    {
        id: "Portugal",
        name: "Portugal",
        options: {},
    },
    {
        id: "Puerto Rico",
        name: "Puerto Rico",
        options: {},
    },
    {
        id: "Qatar",
        name: "Qatar",
        options: {},
    },
    {
        id: "Réunion",
        name: "Réunion",
        options: {},
    },
    {
        id: "La Reunion",
        name: "La Reunion",
        options: {},
    },
    {
        id: "Romania",
        name: "Romania",
        options: {},
    },
    {
        id: "Russia",
        name: "Russia",
        options: {},
    },
    {
        id: "Russian Federation",
        name: "Russian Federation",
        options: {},
    },
    {
        id: "SINT MAARTEN (DUTCH PART)",
        name: "SINT MAARTEN (DUTCH PART)",
        options: {},
    },
    {
        id: "Rwanda",
        name: "Rwanda",
        options: {},
    },
    {
        id: "Saint Barthélemy",
        name: "Saint Barthélemy",
        options: {},
    },
    {
        id: "Saint Helena, Ascension and Tristan da Cunha",
        name: "Saint Helena, Ascension and Tristan da Cunha",
        options: {},
    },
    {
        id: "Saint Kitts and Nevis",
        name: "Saint Kitts and Nevis",
        options: {},
    },
    {
        id: "Saint Lucia",
        name: "Saint Lucia",
        options: {},
    },
    {
        id: "Saint Martin (French part)",
        name: "Saint Martin (French part)",
        options: {},
    },
    {
        id: "Saint Pierre and Miquelon",
        name: "Saint Pierre and Miquelon",
        options: {},
    },
    {
        id: "Saint Vincent and the Grenadines",
        name: "Saint Vincent and the Grenadines",
        options: {},
    },
    {
        id: "Samoa",
        name: "Samoa",
        options: {},
    },
    {
        id: "San Marino",
        name: "San Marino",
        options: {},
    },
    {
        id: "Sao Tome and Principe",
        name: "Sao Tome and Principe",
        options: {},
    },
    {
        id: "Saudi Arabia",
        name: "Saudi Arabia",
        options: {},
    },
    {
        id: "Senegal",
        name: "Senegal",
        options: {},
    },
    {
        id: "Serbia",
        name: "Serbia",
        options: {},
    },
    {
        id: "Seychelles",
        name: "Seychelles",
        options: {},
    },
    {
        id: "Sierra Leone",
        name: "Sierra Leone",
        options: {},
    },
    {
        id: "Singapore",
        name: "Singapore",
        options: {},
    },
    {
        id: "Sint Maarten (Dutch part)",
        name: "Sint Maarten (Dutch part)",
        options: {},
    },
    {
        id: "Slovakia",
        name: "Slovakia",
        options: {},
    },
    {
        id: "Slovenia",
        name: "Slovenia",
        options: {},
    },
    {
        id: "Solomon Islands",
        name: "Solomon Islands",
        options: {},
    },
    {
        id: "Somalia",
        name: "Somalia",
        options: {},
    },
    {
        id: "South Africa",
        name: "South Africa",
        options: {},
    },
    {
        id: "South Georgia and the South Sandwich Islands",
        name: "South Georgia and the South Sandwich Islands",
        options: {},
    },
    {
        id: "South Korea",
        name: "South Korea",
        options: {},
    },
    {
        id: "South Sudan",
        name: "South Sudan",
        options: {},
    },
    {
        id: "Spain",
        name: "Spain",
        options: {},
    },
    {
        id: "Sri Lanka",
        name: "Sri Lanka",
        options: {},
    },
    {
        id: "Sudan",
        name: "Sudan",
        options: {},
    },
    {
        id: "Suriname",
        name: "Suriname",
        options: {},
    },
    {
        id: "Svalbard and Jan Mayen",
        name: "Svalbard and Jan Mayen",
        options: {},
    },
    {
        id: "Sweden",
        name: "Sweden",
        options: {},
    },
    {
        id: "Switzerland",
        name: "Switzerland",
        options: {},
    },
    {
        id: "Syria",
        name: "Syria",
        options: {},
    },
    {
        id: "Taiwan",
        name: "Taiwan",
        options: {},
    },
    {
        id: "Tajikistan",
        name: "Tajikistan",
        options: {},
    },
    {
        id: "Tanzania",
        name: "Tanzania",
        options: {},
    },
    {
        id: "Thailand",
        name: "Thailand",
        options: {},
    },
    {
        id: "Timor-Leste",
        name: "Timor-Leste",
        options: {},
    },
    {
        id: "Togo",
        name: "Togo",
        options: {},
    },
    {
        id: "Tokelau",
        name: "Tokelau",
        options: {},
    },
    {
        id: "Tonga",
        name: "Tonga",
        options: {},
    },
    {
        id: "Trinidad and Tobago",
        name: "Trinidad and Tobago",
        options: {},
    },
    {
        id: "Tunisia",
        name: "Tunisia",
        options: {},
    },
    {
        id: "Turkey",
        name: "Turkey",
        options: {},
    },
    {
        id: "Turkmenistan",
        name: "Turkmenistan",
        options: {},
    },
    {
        id: "Turks and Caicos Islands",
        name: "Turks and Caicos Islands",
        options: {},
    },
    {
        id: "Tuvalu",
        name: "Tuvalu",
        options: {},
    },
    {
        id: "U.S. Virgin Islands",
        name: "U.S. Virgin Islands",
        options: {},
    },
    {
        id: "UAE",
        name: "UAE",
        options: {},
    },
    {
        id: "USA",
        name: "USA",
        options: {},
    },
    {
        id: "Uganda",
        name: "Uganda",
        options: {},
    },
    {
        id: "Ukraine",
        name: "Ukraine",
        options: {},
    },
    {
        id: "United Arab Emirates",
        name: "United Arab Emirates",
        options: {},
    },
    {
        id: "United Kingdom",
        name: "United Kingdom",
        options: {},
    },
    {
        id: "United States",
        name: "United States",
        options: {},
    },
    {
        id: "United States Minor Outlying Islands",
        name: "United States Minor Outlying Islands",
        options: {},
    },
    {
        id: "Uruguay",
        name: "Uruguay",
        options: {},
    },
    {
        id: "Uzbekistan",
        name: "Uzbekistan",
        options: {},
    },
    {
        id: "Vanuatu",
        name: "Vanuatu",
        options: {},
    },
    {
        id: "Venezuela",
        name: "Venezuela",
        options: {},
    },
    {
        id: "Vietnam",
        name: "Vietnam",
        options: {},
    },
    {
        id: "Virgin Islands (British)",
        name: "Virgin Islands (British)",
        options: {},
    },
    {
        id: "Virgin Islands (U.S.)",
        name: "Virgin Islands (U.S.)",
        options: {},
    },
    {
        id: "Wallis and Futuna",
        name: "Wallis and Futuna",
        options: {},
    },
    {
        id: "Western Sahara",
        name: "Western Sahara",
        options: {},
    },
    {
        id: "Yemen",
        name: "Yemen",
        options: {},
    },
    {
        id: "Zambia",
        name: "Zambia",
        options: {},
    },
    {
        id: "Zimbabwe",
        name: "Zimbabwe",
        options: {},
    },
    {
        id: "Congo (Dem. Rep. of the)",
        name: "Congo (Dem. Rep. of the)",
        options: {},
    },
    {
        id: "Brit. Indian Ocean Terr.",
        name: "Brit. Indian Ocean Terr.",
        options: {},
    },
    {
        id: "Heard & McDonald Islands",
        name: "Heard & McDonald Islands",
        options: {},
    },
    {
        id: "Saint Barthelemy",
        name: "Saint Barthelemy",
        options: {},
    },
    {
        id: "Sint Marten",
        name: "Sint Marten",
        options: {},
    },
    {
        id: "East Germany",
        name: "East Germany",
        options: {},
    },
    {
        id: "North Korea",
        name: "North Korea",
        options: {},
    },
    {
        id: "South Yemen",
        name: "South Yemen",
        options: {},
    },
    {
        id: "Tanganyika",
        name: "Tanganyika",
        options: {},
    },
    {
        id: "Non-Geographic Revenue",
        name: "Non-Geographic Revenue",
        options: {},
    },
    {
        id: "Bonaire, St. Eust., Saba",
        name: "Bonaire, St. Eust., Saba",
        options: {},
    },
    {
        id: "Europe Unallocated",
        name: "Europe Unallocated",
        options: {},
    },
    {
        id: "Europe Region",
        name: "Europe Region",
        options: {},
    },
    {
        id: "Saint Helena",
        name: "Saint Helena",
        options: {},
    },
    {
        id: "So Georgia & So Sand Isl",
        name: "So Georgia & So Sand Isl",
        options: {},
    },
    {
        id: "Netherlands Antilles",
        name: "Netherlands Antilles",
        options: {},
    },
    {
        id: "Asia/Pacific Unallocated",
        name: "Asia/Pacific Unallocated",
        options: {},
    },
    {
        id: "Asia Pacific Region",
        name: "Asia Pacific Region",
        options: {},
    },
    {
        id: "Non-Operating Country",
        name: "Non-Operating Country",
        options: {},
    },
    {
        id: "N/A",
        name: "N/A",
        options: {},
    },
    {
        id: "Iran",
        name: "Iran",
        options: {},
    },
    {
        id: "Soviet Union",
        name: "Soviet Union",
        options: {},
    },
    {
        id: "French Southern Terr.",
        name: "French Southern Terr.",
        options: {},
    },
    {
        id: "Wallis & Futuna",
        name: "Wallis & Futuna",
        options: {},
    },
    {
        id: "Americas Unallocated",
        name: "Americas Unallocated",
        options: {},
    },
    {
        id: "Congo (Rep. of)",
        name: "Congo (Rep. of)",
        options: {},
    },
    {
        id: "St Vincent & Grenadines",
        name: "St Vincent & Grenadines",
        options: {},
    },
    {
        id: "Vatican City",
        name: "Vatican City",
        options: {},
    },
    {
        id: "Palestine",
        name: "Palestine",
        options: {},
    },
    {
        id: "Afr/Mid-East Unallocated",
        name: "Afr/Mid-East Unallocated",
        options: {},
    },
    {
        id: "Cape Verde",
        name: "Cape Verde",
        options: {},
    },
    {
        id: "Serbia & Montenegro",
        name: "Serbia & Montenegro",
        options: {},
    },
    {
        id: "Cocos (Keeling) Islands",
        name: "Cocos (Keeling) Islands",
        options: {},
    },
    {
        id: "Unspecified",
        name: "Unspecified",
        options: {},
    },
    {
        id: "Micronesia",
        name: "Micronesia",
        options: {},
    },
    {
        id: "St. Lucia",
        name: "St. Lucia",
        options: {},
    },
    {
        id: "North Vietnam",
        name: "North Vietnam",
        options: {},
    },
    {
        id: "Swaziland",
        name: "Swaziland",
        options: {},
    },
    {
        id: "Ivory Coast",
        name: "Ivory Coast",
        options: {},
    },
    {
        id: "Saint Martin",
        name: "Saint Martin",
        options: {},
    },
    {
        id: "Marianas",
        name: "Marianas",
        options: {},
    },
    {
        id: "Supranational",
        name: "Supranational",
        options: {},
    },
    {
        id: "Yugoslavia",
        name: "Yugoslavia",
        options: {},
    },
    {
        id: "Zanzibar",
        name: "Zanzibar",
        options: {},
    },
    {
        id: "U.S. Minor Outlying Isl.",
        name: "U.S. Minor Outlying Isl.",
        options: {},
    },
    {
        id: "Saint Pierre & Miquelon",
        name: "Saint Pierre & Miquelon",
        options: {},
    },
].map((item) => ({
    headline: item.name,
    value: item.id,
}));

class DevMenu extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-menu id="menu" rowHeight="48" maxRows="5" .items="${items0}" .map="${{ label: "name", value: "id" }}" @onMenuViewportVirtualScroll="" @onMenuListItemClick=""></md-menu>
                            <md-button label="toggle menu" @click="${(event) => menu.toggle(event.currentTarget)}"></md-button>
                            <input @click="${(event) => menu.toggle(event.currentTarget)}" @input="${(event) => menu.filter(event.currentTarget.value)}" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.handleContextmenu = this.handleContextmenu.bind(this);
        window.addEventListener("contextmenu", this.handleContextmenu);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("contextmenu", this.handleContextmenu);
    }

    handleContextmenu(event) {
        event.preventDefault();
        menu.show(event);
    }
}

customElements.define("dev-menu", DevMenu);

export default document.createElement("dev-menu");

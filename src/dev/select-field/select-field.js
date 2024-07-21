import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSelectField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select3"
                                    map='{"label":"name","value":"id"}'
                                    readOnly
                                    .options="${[
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
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${(event) => console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select4"
                                    map='{"label":"name","value":"id"}'
                                    readOnly
                                    .options="${[
                                        {
                                            id: "AED",
                                            name: "AED",
                                            options: {},
                                        },
                                        {
                                            id: "AFN",
                                            name: "AFN",
                                            options: {},
                                        },
                                        {
                                            id: "ALL",
                                            name: "ALL",
                                            options: {},
                                        },
                                        {
                                            id: "AMD",
                                            name: "AMD",
                                            options: {},
                                        },
                                        {
                                            id: "ANG",
                                            name: "ANG",
                                            options: {},
                                        },
                                        {
                                            id: "AOA",
                                            name: "AOA",
                                            options: {},
                                        },
                                        {
                                            id: "ARS",
                                            name: "ARS",
                                            options: {},
                                        },
                                        {
                                            id: "AUD",
                                            name: "AUD",
                                            options: {},
                                        },
                                        {
                                            id: "AWG",
                                            name: "AWG",
                                            options: {},
                                        },
                                        {
                                            id: "AZN",
                                            name: "AZN",
                                            options: {},
                                        },
                                        {
                                            id: "BAM",
                                            name: "BAM",
                                            options: {},
                                        },
                                        {
                                            id: "BBD",
                                            name: "BBD",
                                            options: {},
                                        },
                                        {
                                            id: "BDT",
                                            name: "BDT",
                                            options: {},
                                        },
                                        {
                                            id: "BGN",
                                            name: "BGN",
                                            options: {},
                                        },
                                        {
                                            id: "BHD",
                                            name: "BHD",
                                            options: {},
                                        },
                                        {
                                            id: "BIF",
                                            name: "BIF",
                                            options: {},
                                        },
                                        {
                                            id: "BMD",
                                            name: "BMD",
                                            options: {},
                                        },
                                        {
                                            id: "BND",
                                            name: "BND",
                                            options: {},
                                        },
                                        {
                                            id: "BOB",
                                            name: "BOB",
                                            options: {},
                                        },
                                        {
                                            id: "BRC",
                                            name: "BRC",
                                            options: {},
                                        },
                                        {
                                            id: "BRL",
                                            name: "BRL",
                                            options: {},
                                        },
                                        {
                                            id: "BSD",
                                            name: "BSD",
                                            options: {},
                                        },
                                        {
                                            id: "BTN",
                                            name: "BTN",
                                            options: {},
                                        },
                                        {
                                            id: "BWP",
                                            name: "BWP",
                                            options: {},
                                        },
                                        {
                                            id: "BYN",
                                            name: "BYN",
                                            options: {},
                                        },
                                        {
                                            id: "BZD",
                                            name: "BZD",
                                            options: {},
                                        },
                                        {
                                            id: "CAD",
                                            name: "CAD",
                                            options: {},
                                        },
                                        {
                                            id: "CDF",
                                            name: "CDF",
                                            options: {},
                                        },
                                        {
                                            id: "CHF",
                                            name: "CHF",
                                            options: {},
                                        },
                                        {
                                            id: "CLF",
                                            name: "CLF",
                                            options: {},
                                        },
                                        {
                                            id: "CLP",
                                            name: "CLP",
                                            options: {},
                                        },
                                        {
                                            id: "CNY",
                                            name: "CNY",
                                            options: {},
                                        },
                                        {
                                            id: "COP",
                                            name: "COP",
                                            options: {},
                                        },
                                        {
                                            id: "CRC",
                                            name: "CRC",
                                            options: {},
                                        },
                                        {
                                            id: "CUP",
                                            name: "CUP",
                                            options: {},
                                        },
                                        {
                                            id: "CVE",
                                            name: "CVE",
                                            options: {},
                                        },
                                        {
                                            id: "CZK",
                                            name: "CZK",
                                            options: {},
                                        },
                                        {
                                            id: "DJF",
                                            name: "DJF",
                                            options: {},
                                        },
                                        {
                                            id: "DKK",
                                            name: "DKK",
                                            options: {},
                                        },
                                        {
                                            id: "DOP",
                                            name: "DOP",
                                            options: {},
                                        },
                                        {
                                            id: "DZD",
                                            name: "DZD",
                                            options: {},
                                        },
                                        {
                                            id: "EGP",
                                            name: "EGP",
                                            options: {},
                                        },
                                        {
                                            id: "ERN",
                                            name: "ERN",
                                            options: {},
                                        },
                                        {
                                            id: "ETB",
                                            name: "ETB",
                                            options: {},
                                        },
                                        {
                                            id: "EUR",
                                            name: "EUR",
                                            options: {},
                                        },
                                        {
                                            id: "FJD",
                                            name: "FJD",
                                            options: {},
                                        },
                                        {
                                            id: "FKP",
                                            name: "FKP",
                                            options: {},
                                        },
                                        {
                                            id: "GBP",
                                            name: "GBP",
                                            options: {},
                                        },
                                        {
                                            id: "GEL",
                                            name: "GEL",
                                            options: {},
                                        },
                                        {
                                            id: "GHS",
                                            name: "GHS",
                                            options: {},
                                        },
                                        {
                                            id: "GIP",
                                            name: "GIP",
                                            options: {},
                                        },
                                        {
                                            id: "GMD",
                                            name: "GMD",
                                            options: {},
                                        },
                                        {
                                            id: "GNF",
                                            name: "GNF",
                                            options: {},
                                        },
                                        {
                                            id: "GTQ",
                                            name: "GTQ",
                                            options: {},
                                        },
                                        {
                                            id: "GYD",
                                            name: "GYD",
                                            options: {},
                                        },
                                        {
                                            id: "HKD",
                                            name: "HKD",
                                            options: {},
                                        },
                                        {
                                            id: "HNL",
                                            name: "HNL",
                                            options: {},
                                        },
                                        {
                                            id: "HRK",
                                            name: "HRK",
                                            options: {},
                                        },
                                        {
                                            id: "HTG",
                                            name: "HTG",
                                            options: {},
                                        },
                                        {
                                            id: "HUF",
                                            name: "HUF",
                                            options: {},
                                        },
                                        {
                                            id: "IDR",
                                            name: "IDR",
                                            options: {},
                                        },
                                        {
                                            id: "ILS",
                                            name: "ILS",
                                            options: {},
                                        },
                                        {
                                            id: "INR",
                                            name: "INR",
                                            options: {},
                                        },
                                        {
                                            id: "IQD",
                                            name: "IQD",
                                            options: {},
                                        },
                                        {
                                            id: "IRR",
                                            name: "IRR",
                                            options: {},
                                        },
                                        {
                                            id: "ISK",
                                            name: "ISK",
                                            options: {},
                                        },
                                        {
                                            id: "JMD",
                                            name: "JMD",
                                            options: {},
                                        },
                                        {
                                            id: "JOD",
                                            name: "JOD",
                                            options: {},
                                        },
                                        {
                                            id: "JPY",
                                            name: "JPY",
                                            options: {},
                                        },
                                        {
                                            id: "KES",
                                            name: "KES",
                                            options: {},
                                        },
                                        {
                                            id: "KGS",
                                            name: "KGS",
                                            options: {},
                                        },
                                        {
                                            id: "KHR",
                                            name: "KHR",
                                            options: {},
                                        },
                                        {
                                            id: "KMF",
                                            name: "KMF",
                                            options: {},
                                        },
                                        {
                                            id: "KPW",
                                            name: "KPW",
                                            options: {},
                                        },
                                        {
                                            id: "KRW",
                                            name: "KRW",
                                            options: {},
                                        },
                                        {
                                            id: "KWD",
                                            name: "KWD",
                                            options: {},
                                        },
                                        {
                                            id: "KYD",
                                            name: "KYD",
                                            options: {},
                                        },
                                        {
                                            id: "KZT",
                                            name: "KZT",
                                            options: {},
                                        },
                                        {
                                            id: "LAK",
                                            name: "LAK",
                                            options: {},
                                        },
                                        {
                                            id: "LBP",
                                            name: "LBP",
                                            options: {},
                                        },
                                        {
                                            id: "LKR",
                                            name: "LKR",
                                            options: {},
                                        },
                                        {
                                            id: "LRD",
                                            name: "LRD",
                                            options: {},
                                        },
                                        {
                                            id: "LSL",
                                            name: "LSL",
                                            options: {},
                                        },
                                        {
                                            id: "LYD",
                                            name: "LYD",
                                            options: {},
                                        },
                                        {
                                            id: "MAD",
                                            name: "MAD",
                                            options: {},
                                        },
                                        {
                                            id: "MDL",
                                            name: "MDL",
                                            options: {},
                                        },
                                        {
                                            id: "MGA",
                                            name: "MGA",
                                            options: {},
                                        },
                                        {
                                            id: "MKD",
                                            name: "MKD",
                                            options: {},
                                        },
                                        {
                                            id: "MMK",
                                            name: "MMK",
                                            options: {},
                                        },
                                        {
                                            id: "MNT",
                                            name: "MNT",
                                            options: {},
                                        },
                                        {
                                            id: "MOP",
                                            name: "MOP",
                                            options: {},
                                        },
                                        {
                                            id: "MRU",
                                            name: "MRU",
                                            options: {},
                                        },
                                        {
                                            id: "MUR",
                                            name: "MUR",
                                            options: {},
                                        },
                                        {
                                            id: "MVR",
                                            name: "MVR",
                                            options: {},
                                        },
                                        {
                                            id: "MWK",
                                            name: "MWK",
                                            options: {},
                                        },
                                        {
                                            id: "MXN",
                                            name: "MXN",
                                            options: {},
                                        },
                                        {
                                            id: "MXV",
                                            name: "MXV",
                                            options: {},
                                        },
                                        {
                                            id: "MYR",
                                            name: "MYR",
                                            options: {},
                                        },
                                        {
                                            id: "MZN",
                                            name: "MZN",
                                            options: {},
                                        },
                                        {
                                            id: "NAD",
                                            name: "NAD",
                                            options: {},
                                        },
                                        {
                                            id: "NGN",
                                            name: "NGN",
                                            options: {},
                                        },
                                        {
                                            id: "NIO",
                                            name: "NIO",
                                            options: {},
                                        },
                                        {
                                            id: "NOK",
                                            name: "NOK",
                                            options: {},
                                        },
                                        {
                                            id: "NPR",
                                            name: "NPR",
                                            options: {},
                                        },
                                        {
                                            id: "NZD",
                                            name: "NZD",
                                            options: {},
                                        },
                                        {
                                            id: "OMR",
                                            name: "OMR",
                                            options: {},
                                        },
                                        {
                                            id: "PAB",
                                            name: "PAB",
                                            options: {},
                                        },
                                        {
                                            id: "PEN",
                                            name: "PEN",
                                            options: {},
                                        },
                                        {
                                            id: "PGK",
                                            name: "PGK",
                                            options: {},
                                        },
                                        {
                                            id: "PHP",
                                            name: "PHP",
                                            options: {},
                                        },
                                        {
                                            id: "PKR",
                                            name: "PKR",
                                            options: {},
                                        },
                                        {
                                            id: "PLN",
                                            name: "PLN",
                                            options: {},
                                        },
                                        {
                                            id: "PYG",
                                            name: "PYG",
                                            options: {},
                                        },
                                        {
                                            id: "QAR",
                                            name: "QAR",
                                            options: {},
                                        },
                                        {
                                            id: "RON",
                                            name: "RON",
                                            options: {},
                                        },
                                        {
                                            id: "RSD",
                                            name: "RSD",
                                            options: {},
                                        },
                                        {
                                            id: "RUB",
                                            name: "RUB",
                                            options: {},
                                        },
                                        {
                                            id: "RWF",
                                            name: "RWF",
                                            options: {},
                                        },
                                        {
                                            id: "SAR",
                                            name: "SAR",
                                            options: {},
                                        },
                                        {
                                            id: "SBD",
                                            name: "SBD",
                                            options: {},
                                        },
                                        {
                                            id: "SCR",
                                            name: "SCR",
                                            options: {},
                                        },
                                        {
                                            id: "SDG",
                                            name: "SDG",
                                            options: {},
                                        },
                                        {
                                            id: "SEK",
                                            name: "SEK",
                                            options: {},
                                        },
                                        {
                                            id: "SGD",
                                            name: "SGD",
                                            options: {},
                                        },
                                        {
                                            id: "SHP",
                                            name: "SHP",
                                            options: {},
                                        },
                                        {
                                            id: "SLL",
                                            name: "SLL",
                                            options: {},
                                        },
                                        {
                                            id: "SOS",
                                            name: "SOS",
                                            options: {},
                                        },
                                        {
                                            id: "SRD",
                                            name: "SRD",
                                            options: {},
                                        },
                                        {
                                            id: "SSP",
                                            name: "SSP",
                                            options: {},
                                        },
                                        {
                                            id: "STN",
                                            name: "STN",
                                            options: {},
                                        },
                                        {
                                            id: "SVC",
                                            name: "SVC",
                                            options: {},
                                        },
                                        {
                                            id: "SYP",
                                            name: "SYP",
                                            options: {},
                                        },
                                        {
                                            id: "SZL",
                                            name: "SZL",
                                            options: {},
                                        },
                                        {
                                            id: "THB",
                                            name: "THB",
                                            options: {},
                                        },
                                        {
                                            id: "TJS",
                                            name: "TJS",
                                            options: {},
                                        },
                                        {
                                            id: "TMT",
                                            name: "TMT",
                                            options: {},
                                        },
                                        {
                                            id: "TND",
                                            name: "TND",
                                            options: {},
                                        },
                                        {
                                            id: "TOP",
                                            name: "TOP",
                                            options: {},
                                        },
                                        {
                                            id: "TRY",
                                            name: "TRY",
                                            options: {},
                                        },
                                        {
                                            id: "TTD",
                                            name: "TTD",
                                            options: {},
                                        },
                                        {
                                            id: "TWD",
                                            name: "TWD",
                                            options: {},
                                        },
                                        {
                                            id: "TZS",
                                            name: "TZS",
                                            options: {},
                                        },
                                        {
                                            id: "UAH",
                                            name: "UAH",
                                            options: {},
                                        },
                                        {
                                            id: "UGX",
                                            name: "UGX",
                                            options: {},
                                        },
                                        {
                                            id: "USD",
                                            name: "USD",
                                            options: {},
                                        },
                                        {
                                            id: "UYU",
                                            name: "UYU",
                                            options: {},
                                        },
                                        {
                                            id: "UZS",
                                            name: "UZS",
                                            options: {},
                                        },
                                        {
                                            id: "VES",
                                            name: "VES",
                                            options: {},
                                        },
                                        {
                                            id: "VND",
                                            name: "VND",
                                            options: {},
                                        },
                                        {
                                            id: "VUV",
                                            name: "VUV",
                                            options: {},
                                        },
                                        {
                                            id: "WST",
                                            name: "WST",
                                            options: {},
                                        },
                                        {
                                            id: "XAF",
                                            name: "XAF",
                                            options: {},
                                        },
                                        {
                                            id: "XCD",
                                            name: "XCD",
                                            options: {},
                                        },
                                        {
                                            id: "XDR",
                                            name: "XDR",
                                            options: {},
                                        },
                                        {
                                            id: "XOF",
                                            name: "XOF",
                                            options: {},
                                        },
                                        {
                                            id: "XPF",
                                            name: "XPF",
                                            options: {},
                                        },
                                        {
                                            id: "XTVATS",
                                            name: "ATS",
                                            options: {},
                                        },
                                        {
                                            id: "XTVBEF",
                                            name: "BEF",
                                            options: {},
                                        },
                                        {
                                            id: "XTVCNH",
                                            name: "CNH",
                                            options: {},
                                        },
                                        {
                                            id: "XTVDEM",
                                            name: "DEM",
                                            options: {},
                                        },
                                        {
                                            id: "XTVESP",
                                            name: "ESP",
                                            options: {},
                                        },
                                        {
                                            id: "XTVFIM",
                                            name: "FIM",
                                            options: {},
                                        },
                                        {
                                            id: "XTVFRF",
                                            name: "FRF",
                                            options: {},
                                        },
                                        {
                                            id: "XTVGBX",
                                            name: "GBX",
                                            options: {},
                                        },
                                        {
                                            id: "XTVGRD",
                                            name: "GRD",
                                            options: {},
                                        },
                                        {
                                            id: "XTVIEP",
                                            name: "IEP",
                                            options: {},
                                        },
                                        {
                                            id: "XTVILA",
                                            name: "ILA",
                                            options: {},
                                        },
                                        {
                                            id: "XTVITL",
                                            name: "ITL",
                                            options: {},
                                        },
                                        {
                                            id: "XTVKWF",
                                            name: "KWF",
                                            options: {},
                                        },
                                        {
                                            id: "XTVLUF",
                                            name: "LUF",
                                            options: {},
                                        },
                                        {
                                            id: "XTVNLG",
                                            name: "NLG",
                                            options: {},
                                        },
                                        {
                                            id: "XTVPTE",
                                            name: "PTE",
                                            options: {},
                                        },
                                        {
                                            id: "XTVSIT",
                                            name: "SIT",
                                            options: {},
                                        },
                                        {
                                            id: "XTVSKK",
                                            name: "SKK",
                                            options: {},
                                        },
                                        {
                                            id: "XTVUSX",
                                            name: "USX",
                                            options: {},
                                        },
                                        {
                                            id: "XTVZAC",
                                            name: "ZAC",
                                            options: {},
                                        },
                                        {
                                            id: "YER",
                                            name: "YER",
                                            options: {},
                                        },
                                        {
                                            id: "ZAR",
                                            name: "ZAR",
                                            options: {},
                                        },
                                        {
                                            id: "ZMW",
                                            name: "ZMW",
                                            options: {},
                                        },
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${(event) => console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select"
                                    map='{"label":"name","value":"id"}'
                                    .options="${[
                                        {
                                            id: "ECONOMICS",
                                            name: "ECONOMICS",
                                            options: {},
                                        },
                                        {
                                            id: "FX_IDC",
                                            name: "FX_IDC",
                                            options: {},
                                        },
                                        {
                                            id: "MOEX",
                                            name: "MOEX",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3ARBITRUM",
                                            name: "Uniswap v3 (Arbitrum)",
                                            options: {},
                                        },
                                        {
                                            id: "BVC",
                                            name: "BVC",
                                            options: {},
                                        },
                                        {
                                            id: "TASE",
                                            name: "TASE",
                                            options: {},
                                        },
                                        {
                                            id: "FX",
                                            name: "FX",
                                            options: {},
                                        },
                                        {
                                            id: "BAHRAIN",
                                            name: "BAHRAIN",
                                            options: {},
                                        },
                                        {
                                            id: "EASYMARKETS",
                                            name: "EASYMARKETS",
                                            options: {},
                                        },
                                        {
                                            id: "TADAWUL",
                                            name: "TADAWUL",
                                            options: {},
                                        },
                                        {
                                            id: "OMXSTO",
                                            name: "OMXSTO",
                                            options: {},
                                        },
                                        {
                                            id: "ATHEX",
                                            name: "ATHEX",
                                            options: {},
                                        },
                                        {
                                            id: "BELEX",
                                            name: "BELEX",
                                            options: {},
                                        },
                                        {
                                            id: "BME",
                                            name: "BME",
                                            options: {},
                                        },
                                        {
                                            id: "EURONEXT",
                                            name: "EURONEXT",
                                            options: {},
                                        },
                                        {
                                            id: "FOREXCOM",
                                            name: "FOREXCOM",
                                            options: {},
                                        },
                                        {
                                            id: "PHILLIPNOVA",
                                            name: "PHILLIPNOVA",
                                            options: {},
                                        },
                                        {
                                            id: "OMXVSE",
                                            name: "OMXVSE",
                                            options: {},
                                        },
                                        {
                                            id: "SKILLING",
                                            name: "SKILLING",
                                            options: {},
                                        },
                                        {
                                            id: "OMXICE",
                                            name: "OMXICE",
                                            options: {},
                                        },
                                        {
                                            id: "BMFBOVESPA",
                                            name: "BMFBOVESPA",
                                            options: {},
                                        },
                                        {
                                            id: "IDX",
                                            name: "IDX",
                                            options: {},
                                        },
                                        {
                                            id: "EGX",
                                            name: "EGX",
                                            options: {},
                                        },
                                        {
                                            id: "TSX",
                                            name: "TSX",
                                            options: {},
                                        },
                                        {
                                            id: "SPARKS",
                                            name: "SPARKS",
                                            options: {},
                                        },
                                        {
                                            id: "SAXO",
                                            name: "SAXO",
                                            options: {},
                                        },
                                        {
                                            id: "ASX",
                                            name: "ASX",
                                            options: {},
                                        },
                                        {
                                            id: "OMXRSE",
                                            name: "OMXRSE",
                                            options: {},
                                        },
                                        {
                                            id: "OMXHEX",
                                            name: "OMXHEX",
                                            options: {},
                                        },
                                        {
                                            id: "DFM",
                                            name: "DFM",
                                            options: {},
                                        },
                                        {
                                            id: "BVB",
                                            name: "BVB",
                                            options: {},
                                        },
                                        {
                                            id: "OMXCOP",
                                            name: "OMXCOP",
                                            options: {},
                                        },
                                        {
                                            id: "HSI",
                                            name: "HSI",
                                            options: {},
                                        },
                                        {
                                            id: "BET",
                                            name: "BET",
                                            options: {},
                                        },
                                        {
                                            id: "FTSEMYX",
                                            name: "FTSEMYX",
                                            options: {},
                                        },
                                        {
                                            id: "CBOE",
                                            name: "CBOE",
                                            options: {},
                                        },
                                        {
                                            id: "GPW",
                                            name: "GPW",
                                            options: {},
                                        },
                                        {
                                            id: "BSE",
                                            name: "BSE",
                                            options: {},
                                        },
                                        {
                                            id: "SIX",
                                            name: "SIX",
                                            options: {},
                                        },
                                        {
                                            id: "SSE",
                                            name: "SSE",
                                            options: {},
                                        },
                                        {
                                            id: "CITYINDEX",
                                            name: "CITYINDEX",
                                            options: {},
                                        },
                                        {
                                            id: "TWSE",
                                            name: "TWSE",
                                            options: {},
                                        },
                                        {
                                            id: "OMXTSE",
                                            name: "OMXTSE",
                                            options: {},
                                        },
                                        {
                                            id: "XETR",
                                            name: "XETR",
                                            options: {},
                                        },
                                        {
                                            id: "SZSE",
                                            name: "SZSE",
                                            options: {},
                                        },
                                        {
                                            id: "BCS",
                                            name: "BCS",
                                            options: {},
                                        },
                                        {
                                            id: "BIST",
                                            name: "BIST",
                                            options: {},
                                        },
                                        {
                                            id: "BMV",
                                            name: "BMV",
                                            options: {},
                                        },
                                        {
                                            id: "BLACKBULL",
                                            name: "BLACKBULL",
                                            options: {},
                                        },
                                        {
                                            id: "NZX",
                                            name: "NZX",
                                            options: {},
                                        },
                                        {
                                            id: "NSE",
                                            name: "NSE",
                                            options: {},
                                        },
                                        {
                                            id: "TVC",
                                            name: "TVC",
                                            options: {},
                                        },
                                        {
                                            id: "OANDA",
                                            name: "OANDA",
                                            options: {},
                                        },
                                        {
                                            id: "SP",
                                            name: "SP",
                                            options: {},
                                        },
                                        {
                                            id: "DJ",
                                            name: "DJ",
                                            options: {},
                                        },
                                        {
                                            id: "BCBA",
                                            name: "BCBA",
                                            options: {},
                                        },
                                        {
                                            id: "CRYPTOCAP",
                                            name: "CRYPTOCAP",
                                            options: {},
                                        },
                                        {
                                            id: "FXOPEN",
                                            name: "FXOPEN",
                                            options: {},
                                        },
                                        {
                                            id: "BVL",
                                            name: "BVL",
                                            options: {},
                                        },
                                        {
                                            id: "EIGHTCAP",
                                            name: "EIGHTCAP",
                                            options: {},
                                        },
                                        {
                                            id: "PEPPERSTONE",
                                            name: "PEPPERSTONE",
                                            options: {},
                                        },
                                        {
                                            id: "QSE",
                                            name: "QSE",
                                            options: {},
                                        },
                                        {
                                            id: "CSECY",
                                            name: "CSECY",
                                            options: {},
                                        },
                                        {
                                            id: "UPCOM",
                                            name: "UPCOM",
                                            options: {},
                                        },
                                        {
                                            id: "HNX",
                                            name: "HNX",
                                            options: {},
                                        },
                                        {
                                            id: "HOSE",
                                            name: "HOSE",
                                            options: {},
                                        },
                                        {
                                            id: "VIE",
                                            name: "VIE",
                                            options: {},
                                        },
                                        {
                                            id: "KRX",
                                            name: "KRX",
                                            options: {},
                                        },
                                        {
                                            id: "CSELK",
                                            name: "CSELK",
                                            options: {},
                                        },
                                        {
                                            id: "KSE",
                                            name: "KSE",
                                            options: {},
                                        },
                                        {
                                            id: "TRADERJOE",
                                            name: "Trader Joe v2",
                                            options: {},
                                        },
                                        {
                                            id: "BITFINEX",
                                            name: "BITFINEX",
                                            options: {},
                                        },
                                        {
                                            id: "GEMINI",
                                            name: "GEMINI",
                                            options: {},
                                        },
                                        {
                                            id: "BINANCE",
                                            name: "BINANCE",
                                            options: {},
                                        },
                                        {
                                            id: "BITGET",
                                            name: "BITGET",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3POLYGON",
                                            name: "Uniswap v3 (Polygon)",
                                            options: {},
                                        },
                                        {
                                            id: "PANCAKESWAP",
                                            name: "PancakeSwap v2",
                                            options: {},
                                        },
                                        {
                                            id: "SUSHISWAP",
                                            name: "SushiSwap v2 (Ethereum)",
                                            options: {},
                                        },
                                        {
                                            id: "MERCADO",
                                            name: "MERCADO",
                                            options: {},
                                        },
                                        {
                                            id: "KUCOIN",
                                            name: "KUCOIN",
                                            options: {},
                                        },
                                        {
                                            id: "PANGOLIN",
                                            name: "Pangolin v2",
                                            options: {},
                                        },
                                        {
                                            id: "VERSEETH",
                                            name: "Verse",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP",
                                            name: "Uniswap v2",
                                            options: {},
                                        },
                                        {
                                            id: "WHITEBIT",
                                            name: "WHITEBIT",
                                            options: {},
                                        },
                                        {
                                            id: "UPBIT",
                                            name: "UPBIT",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3ETH",
                                            name: "Uniswap v3 (Ethereum)",
                                            options: {},
                                        },
                                        {
                                            id: "DERIBIT",
                                            name: "DERIBIT",
                                            options: {},
                                        },
                                        {
                                            id: "SUSHISWAPPOLYGON",
                                            name: "SushiSwap v2 (Polygon)",
                                            options: {},
                                        },
                                        {
                                            id: "BITSTAMP",
                                            name: "BITSTAMP",
                                            options: {},
                                        },
                                        {
                                            id: "EXMO",
                                            name: "EXMO",
                                            options: {},
                                        },
                                        {
                                            id: "BINANCEUS",
                                            name: "BINANCEUS",
                                            options: {},
                                        },
                                        {
                                            id: "TIMEX",
                                            name: "TIMEX",
                                            options: {},
                                        },
                                        {
                                            id: "WOONETWORK",
                                            name: "WOONETWORK",
                                            options: {},
                                        },
                                        {
                                            id: "GATEIO",
                                            name: "GATEIO",
                                            options: {},
                                        },
                                        {
                                            id: "OKX",
                                            name: "OKX",
                                            options: {},
                                        },
                                        {
                                            id: "BISWAP",
                                            name: "Biswap v2",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3OPTIMISM",
                                            name: "Uniswap v3 (Optimism)",
                                            options: {},
                                        },
                                        {
                                            id: "BITFLYER",
                                            name: "BITFLYER",
                                            options: {},
                                        },
                                        {
                                            id: "QUICKSWAP",
                                            name: "QuickSwap v2",
                                            options: {},
                                        },
                                        {
                                            id: "COINBASE",
                                            name: "COINBASE",
                                            options: {},
                                        },
                                        {
                                            id: "DYDX",
                                            name: "dYdX",
                                            options: {},
                                        },
                                        {
                                            id: "OKCOIN",
                                            name: "OKCOIN",
                                            options: {},
                                        },
                                        {
                                            id: "BYBIT",
                                            name: "BYBIT",
                                            options: {},
                                        },
                                        {
                                            id: "MEXC",
                                            name: "MEXC",
                                            options: {},
                                        },
                                        {
                                            id: "BITMEX",
                                            name: "BITMEX",
                                            options: {},
                                        },
                                        {
                                            id: "XEXCHANGE",
                                            name: "xExchange",
                                            options: {},
                                        },
                                        {
                                            id: "POLONIEX",
                                            name: "POLONIEX",
                                            options: {},
                                        },
                                        {
                                            id: "COINEX",
                                            name: "COINEX",
                                            options: {},
                                        },
                                        {
                                            id: "BITHUMB",
                                            name: "BITHUMB",
                                            options: {},
                                        },
                                        {
                                            id: "WAGYUSWAP",
                                            name: "WagyuSwap v2",
                                            options: {},
                                        },
                                        {
                                            id: "BINGX",
                                            name: "BINGX",
                                            options: {},
                                        },
                                        {
                                            id: "BITBNS",
                                            name: "BITBNS",
                                            options: {},
                                        },
                                        {
                                            id: "KRAKEN",
                                            name: "KRAKEN",
                                            options: {},
                                        },
                                        {
                                            id: "BITTREX",
                                            name: "BITTREX",
                                            options: {},
                                        },
                                        {
                                            id: "PHEMEX",
                                            name: "PHEMEX",
                                            options: {},
                                        },
                                        {
                                            id: "BITKUB",
                                            name: "BITKUB",
                                            options: {},
                                        },
                                        {
                                            id: "BITRUE",
                                            name: "BITRUE",
                                            options: {},
                                        },
                                        {
                                            id: "SPOOKYSWAP",
                                            name: "SpookySwap v2",
                                            options: {},
                                        },
                                        {
                                            id: "BITPANDAPRO",
                                            name: "BITPANDAPRO",
                                            options: {},
                                        },
                                        {
                                            id: "DELTA",
                                            name: "DELTA",
                                            options: {},
                                        },
                                        {
                                            id: "HONEYSWAP",
                                            name: "Honeyswap v2",
                                            options: {},
                                        },
                                        {
                                            id: "HUOBI",
                                            name: "HUOBI",
                                            options: {},
                                        },
                                        {
                                            id: "HITBTC",
                                            name: "HITBTC",
                                            options: {},
                                        },
                                        {
                                            id: "HONEYSWAPPOLYGON",
                                            name: "Honeyswap v2 (Polygon)",
                                            options: {},
                                        },
                                        {
                                            id: "BTSE",
                                            name: "BTSE",
                                            options: {},
                                        },
                                        {
                                            id: "TPEX",
                                            name: "TPEX",
                                            options: {},
                                        },
                                        {
                                            id: "HKEX",
                                            name: "HKEX",
                                            options: {},
                                        },
                                        {
                                            id: "NSENG",
                                            name: "NSENG",
                                            options: {},
                                        },
                                        {
                                            id: "PSECZ",
                                            name: "PSECZ",
                                            options: {},
                                        },
                                        {
                                            id: "PSX",
                                            name: "PSX",
                                            options: {},
                                        },
                                        {
                                            id: "SWB",
                                            name: "SWB",
                                            options: {},
                                        },
                                        {
                                            id: "MUN",
                                            name: "MUN",
                                            options: {},
                                        },
                                        {
                                            id: "HAM",
                                            name: "HAM",
                                            options: {},
                                        },
                                        {
                                            id: "HAN",
                                            name: "HAN",
                                            options: {},
                                        },
                                        {
                                            id: "BER",
                                            name: "BER",
                                            options: {},
                                        },
                                        {
                                            id: "DUS",
                                            name: "DUS",
                                            options: {},
                                        },
                                        {
                                            id: "TRADEGATE",
                                            name: "TRADEGATE",
                                            options: {},
                                        },
                                        {
                                            id: "FWB",
                                            name: "FWB",
                                            options: {},
                                        },
                                        {
                                            id: "SGX",
                                            name: "SGX",
                                            options: {},
                                        },
                                        {
                                            id: "BSSE",
                                            name: "BSSE",
                                            options: {},
                                        },
                                        {
                                            id: "LUXSE",
                                            name: "LUXSE",
                                            options: {},
                                        },
                                        {
                                            id: "ADX",
                                            name: "ADX",
                                            options: {},
                                        },
                                        {
                                            id: "NASDAQDUBAI",
                                            name: "NASDAQDUBAI",
                                            options: {},
                                        },
                                        {
                                            id: "LSIN",
                                            name: "LSIN",
                                            options: {},
                                        },
                                        {
                                            id: "LSE",
                                            name: "LSE",
                                            options: {},
                                        },
                                        {
                                            id: "MIL",
                                            name: "MIL",
                                            options: {},
                                        },
                                        {
                                            id: "TAIFEX",
                                            name: "TAIFEX",
                                            options: {},
                                        },
                                        {
                                            id: "SHFE",
                                            name: "SHFE",
                                            options: {},
                                        },
                                        {
                                            id: "MGEX",
                                            name: "MGEX",
                                            options: {},
                                        },
                                        {
                                            id: "ICEUS",
                                            name: "ICEUS",
                                            options: {},
                                        },
                                        {
                                            id: "ICESG",
                                            name: "ICESG",
                                            options: {},
                                        },
                                        {
                                            id: "NYMEX_MINI",
                                            name: "NYMEX_MINI",
                                            options: {},
                                        },
                                        {
                                            id: "CME_MINI",
                                            name: "CME_MINI",
                                            options: {},
                                        },
                                        {
                                            id: "COMEX_MINI",
                                            name: "COMEX_MINI",
                                            options: {},
                                        },
                                        {
                                            id: "NCDEX",
                                            name: "NCDEX",
                                            options: {},
                                        },
                                        {
                                            id: "MATBAROFEX",
                                            name: "MATBAROFEX",
                                            options: {},
                                        },
                                        {
                                            id: "COMEX",
                                            name: "COMEX",
                                            options: {},
                                        },
                                        {
                                            id: "TOCOM",
                                            name: "TOCOM",
                                            options: {},
                                        },
                                        {
                                            id: "EUREX",
                                            name: "EUREX",
                                            options: {},
                                        },
                                        {
                                            id: "ICEEUR",
                                            name: "ICEEUR",
                                            options: {},
                                        },
                                        {
                                            id: "CBOT",
                                            name: "CBOT",
                                            options: {},
                                        },
                                        {
                                            id: "CBOT_MINI",
                                            name: "CBOT_MINI",
                                            options: {},
                                        },
                                        {
                                            id: "TFX",
                                            name: "TFX",
                                            options: {},
                                        },
                                        {
                                            id: "MYX",
                                            name: "MYX",
                                            options: {},
                                        },
                                        {
                                            id: "MCX",
                                            name: "MCX",
                                            options: {},
                                        },
                                        {
                                            id: "NYMEX",
                                            name: "NYMEX",
                                            options: {},
                                        },
                                        {
                                            id: "CME",
                                            name: "CME",
                                            options: {},
                                        },
                                        {
                                            id: "OSE",
                                            name: "OSE",
                                            options: {},
                                        },
                                        {
                                            id: "TFEX",
                                            name: "TFEX",
                                            options: {},
                                        },
                                        {
                                            id: "BVMT",
                                            name: "BVMT",
                                            options: {},
                                        },
                                        {
                                            id: "DSEBD",
                                            name: "DSEBD",
                                            options: {},
                                        },
                                        {
                                            id: "OSL",
                                            name: "OSL",
                                            options: {},
                                        },
                                        {
                                            id: "PSE",
                                            name: "PSE",
                                            options: {},
                                        },
                                        {
                                            id: "NEO",
                                            name: "NEO",
                                            options: {},
                                        },
                                        {
                                            id: "CSE",
                                            name: "CSE",
                                            options: {},
                                        },
                                        {
                                            id: "TSXV",
                                            name: "TSXV",
                                            options: {},
                                        },
                                        {
                                            id: "CRYPTO",
                                            name: "CRYPTO",
                                            options: {},
                                        },
                                        {
                                            id: "BX",
                                            name: "BX",
                                            options: {},
                                        },
                                        {
                                            id: "CSEMA",
                                            name: "CSEMA",
                                            options: {},
                                        },
                                        {
                                            id: "AMEX",
                                            name: "AMEX",
                                            options: {},
                                        },
                                        {
                                            id: "OTC",
                                            name: "OTC",
                                            options: {},
                                        },
                                        {
                                            id: "NASDAQ",
                                            name: "NASDAQ",
                                            options: {},
                                        },
                                        {
                                            id: "NYSE",
                                            name: "NYSE",
                                            options: {},
                                        },
                                        {
                                            id: "JSE",
                                            name: "JSE",
                                            options: {},
                                        },
                                        {
                                            id: "BVCV",
                                            name: "BVCV",
                                            options: {},
                                        },
                                        {
                                            id: "NGM",
                                            name: "NGM",
                                            options: {},
                                        },
                                        {
                                            id: "NSEKE",
                                            name: "NSEKE",
                                            options: {},
                                        },
                                        {
                                            id: "TSE",
                                            name: "TSE",
                                            options: {},
                                        },
                                        {
                                            id: "NAG",
                                            name: "NAG",
                                            options: {},
                                        },
                                        {
                                            id: "SAPSE",
                                            name: "SAPSE",
                                            options: {},
                                        },
                                        {
                                            id: "FSE",
                                            name: "FSE",
                                            options: {},
                                        },
                                        {
                                            id: "SET",
                                            name: "SET",
                                            options: {},
                                        },
                                        {
                                            id: "NEWCONNECT",
                                            name: "NEWCONNECT",
                                            options: {},
                                        },
                                        {
                                            id: "GETTEX",
                                            name: "GETTEX",
                                            options: {},
                                        },
                                        {
                                            id: "BIVA",
                                            name: "BIVA",
                                            options: {},
                                        },
                                        {
                                            id: "HTX",
                                            name: "HTX",
                                            options: {},
                                        },
                                        {
                                            id: "ORCA",
                                            name: "Orca",
                                            options: {},
                                        },
                                        {
                                            id: "RAYDIUM",
                                            name: "Raydium",
                                            options: {},
                                        },
                                        {
                                            id: "PULSEX",
                                            name: "PulseX",
                                            options: {},
                                        },
                                        {
                                            id: "THRUSTER3",
                                            name: "Thruster v3",
                                            options: {},
                                        },
                                        {
                                            id: "EUROTLX",
                                            name: "EuroTLX",
                                            options: {},
                                        },
                                        {
                                            id: "FINRA",
                                            name: "FINRA",
                                            options: {},
                                        },
                                        {
                                            id: "CURVE",
                                            name: "Curve",
                                            options: {},
                                        },
                                        {
                                            id: "TOKENIZE",
                                            name: "TOKENIZE",
                                            options: {},
                                        },
                                        {
                                            id: "CAMELOT",
                                            name: "Camelot v2",
                                            options: {},
                                        },
                                        {
                                            id: "CAMELOT3ARBITRUM",
                                            name: "Camelot v3",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3AVALANCHE",
                                            name: "Uniswap v3 (Avalanche)",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3BASE",
                                            name: "Uniswap v3 (Base)",
                                            options: {},
                                        },
                                        {
                                            id: "UNISWAP3BSC",
                                            name: "Uniswap v3 (BNB chain)",
                                            options: {},
                                        },
                                        {
                                            id: "QUICKSWAP3POLYGON",
                                            name: "QuickSwap v3 (Polygon)",
                                            options: {},
                                        },
                                        {
                                            id: "QUICKSWAP3POLYGONZKEVM",
                                            name: "QuickSwap v3 (Polygon zkEVM)",
                                            options: {},
                                        },
                                        {
                                            id: "PANCAKESWAP3ETH",
                                            name: "PancakeSwap v3 (Ethereum)",
                                            options: {},
                                        },
                                        {
                                            id: "PANCAKESWAP3BSC",
                                            name: "PancakeSwap v3 (BNB chain)",
                                            options: {},
                                        },
                                        {
                                            id: "BASESWAP",
                                            name: "BaseSwap",
                                            options: {},
                                        },
                                        {
                                            id: "KATANA",
                                            name: "Katana",
                                            options: {},
                                        },
                                        {
                                            id: "MMFINANCE",
                                            name: "MM Finance",
                                            options: {},
                                        },
                                        {
                                            id: "VVSFINANCE",
                                            name: "VVS Finance",
                                            options: {},
                                        },
                                        {
                                            id: "VELODROME",
                                            name: "Velodrome",
                                            options: {},
                                        },
                                        {
                                            id: "BITAZZA",
                                            name: "BITAZZA",
                                            options: {},
                                        },
                                        {
                                            id: "BITMART",
                                            name: "BITMART",
                                            options: {},
                                        },
                                        {
                                            id: "BLOFIN",
                                            name: "BLOFIN",
                                            options: {},
                                        },
                                        {
                                            id: "CRYPTOCOM",
                                            name: "CRYPTOCOM",
                                            options: {},
                                        },
                                        {
                                            id: "PIONEX",
                                            name: "PIONEX",
                                            options: {},
                                        },
                                        {
                                            id: "ZOOMEX",
                                            name: "ZOOMEX",
                                            options: {},
                                        },
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${(event) => console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select2"
                                    map='{"label":"name","value":"id"}'
                                    .options="${[
                                        {
                                            id: "SYML:SP;SPX",
                                            name: "S&P 500",
                                            options: {
                                                index_proname: "SP:SPX",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;NDX",
                                            name: "NASDAQ 100",
                                            options: {
                                                index_proname: "NASDAQ:NDX",
                                            },
                                        },
                                        {
                                            id: "SYML:DJ;DJI",
                                            name: "Dow Jones Industrial Average",
                                            options: {
                                                index_proname: "DJ:DJI",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;IXIC",
                                            name: "NASDAQ Composite",
                                            options: {
                                                index_proname: "NASDAQ:IXIC",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;RUT",
                                            name: "Russell 2000",
                                            options: {
                                                index_proname: "TVC:RUT",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;SOX",
                                            name: "PHLX Semiconductor Sector",
                                            options: {
                                                index_proname: "NASDAQ:SOX",
                                            },
                                        },
                                        {
                                            id: "SYML:DJ;DJT",
                                            name: "Dow Jones Transportation Average",
                                            options: {
                                                index_proname: "DJ:DJT",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;XAU",
                                            name: "PHLX Gold/Silver Sector",
                                            options: {
                                                index_proname: "NASDAQ:XAU",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;SPN",
                                            name: "S&P 500 Energy",
                                            options: {
                                                index_proname: "SP:SPN",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5INFT",
                                            name: "S&P 500 Information Technology",
                                            options: {
                                                index_proname: "SP:S5INFT",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTY",
                                            name: "Nifty 50",
                                            options: {
                                                index_proname: "NSE:NIFTY",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;BANKNIFTY",
                                            name: "Nifty Bank",
                                            options: {
                                                index_proname: "NSE:BANKNIFTY",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXFINANCE",
                                            name: "Nifty Financial Services",
                                            options: {
                                                index_proname: "NSE:CNXFINANCE",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNX500",
                                            name: "Nifty 500",
                                            options: {
                                                index_proname: "NSE:CNX500",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTYJR",
                                            name: "Nifty Next 50",
                                            options: {
                                                index_proname: "NSE:NIFTYJR",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XU100",
                                            name: "BIST 100",
                                            options: {
                                                index_proname: "BIST:XU100",
                                            },
                                        },
                                        {
                                            id: "SYML:BSE;SENSEX",
                                            name: "S&P BSE SENSEX",
                                            options: {
                                                index_proname: "BSE:SENSEX",
                                            },
                                        },
                                        {
                                            id: "SYML:BSSE;SAX",
                                            name: "Slovak Share Index",
                                            options: {
                                                index_proname: "BSSE:SAX",
                                            },
                                        },
                                        {
                                            id: "SYML:BELEX;BELEXLINE",
                                            name: "BELEXline",
                                            options: {
                                                index_proname: "BELEX:BELEXLINE",
                                            },
                                        },
                                        {
                                            id: "SYML:BELEX;BELEX15",
                                            name: "BELEX15",
                                            options: {
                                                index_proname: "BELEX:BELEX15",
                                            },
                                        },
                                        {
                                            id: "SYML:LUXSE;LUXX",
                                            name: "LuxX Price Index",
                                            options: {
                                                index_proname: "LUXSE:LUXX",
                                            },
                                        },
                                        {
                                            id: "SYML:LUXSE;LUXG",
                                            name: "Lux General Index",
                                            options: {
                                                index_proname: "LUXSE:LUXG",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;IMOEX",
                                            name: "MOEX Russia",
                                            options: {
                                                index_proname: "MOEX:IMOEX",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;NI225",
                                            name: "Nikkei 225",
                                            options: {
                                                index_proname: "TVC:NI225",
                                            },
                                        },
                                        {
                                            id: "SYML:XETR;DAX",
                                            name: "DAX",
                                            options: {
                                                index_proname: "XETR:DAX",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXIT",
                                            name: "Nifty IT",
                                            options: {
                                                index_proname: "NSE:CNXIT",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNINDEX",
                                            name: "Vietnam Index",
                                            options: {
                                                index_proname: "HOSE:VNINDEX",
                                            },
                                        },
                                        {
                                            id: "SYML:SET;SET50",
                                            name: "SET50",
                                            options: {
                                                index_proname: "SET:SET50",
                                            },
                                        },
                                        {
                                            id: "SYML:BMFBOVESPA;IBOV",
                                            name: "Ibovespa",
                                            options: {
                                                index_proname: "BMFBOVESPA:IBOV",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TASI",
                                            name: "Tadawul All Shares",
                                            options: {
                                                index_proname: "TADAWUL:TASI",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXAUTO",
                                            name: "Nifty Auto",
                                            options: {
                                                index_proname: "NSE:CNXAUTO",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXPHARMA",
                                            name: "Nifty Pharma",
                                            options: {
                                                index_proname: "NSE:CNXPHARMA",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXPSUBANK",
                                            name: "Nifty PSU Bank",
                                            options: {
                                                index_proname: "NSE:CNXPSUBANK",
                                            },
                                        },
                                        {
                                            id: "SYML:SSE;000001",
                                            name: "SSE Composite",
                                            options: {
                                                index_proname: "SSE:000001",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXMETAL",
                                            name: "Nifty Metal",
                                            options: {
                                                index_proname: "NSE:CNXMETAL",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;SX5E",
                                            name: "Euro Stoxx 50",
                                            options: {
                                                index_proname: "TVC:SX5E",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;UKX",
                                            name: "FTSE 100",
                                            options: {
                                                index_proname: "TVC:UKX",
                                            },
                                        },
                                        {
                                            id: "SYML:HSI;HSI",
                                            name: "Hang Seng Index",
                                            options: {
                                                index_proname: "HSI:HSI",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXFMCG",
                                            name: "Nifty FMCG",
                                            options: {
                                                index_proname: "NSE:CNXFMCG",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;RTSI",
                                            name: "RTS",
                                            options: {
                                                index_proname: "MOEX:RTSI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;OMXS30",
                                            name: "OMX Stockholm 30",
                                            options: {
                                                index_proname: "OMXSTO:OMXS30",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI",
                                            name: "KOSPI Composite",
                                            options: {
                                                index_proname: "KRX:KOSPI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XU030",
                                            name: "BIST 30",
                                            options: {
                                                index_proname: "BIST:XU030",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXREALTY",
                                            name: "Nifty Realty",
                                            options: {
                                                index_proname: "NSE:CNXREALTY",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTYFINSRV25_50",
                                            name: "Nifty Financial Services 25/50",
                                            options: {
                                                index_proname: "NSE:NIFTYFINSRV25_50",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VN30",
                                            name: "VN30",
                                            options: {
                                                index_proname: "HOSE:VN30",
                                            },
                                        },
                                        {
                                            id: "SYML:ASX;XJO",
                                            name: "S&P/ASX 200",
                                            options: {
                                                index_proname: "ASX:XJO",
                                            },
                                        },
                                        {
                                            id: "SYML:INDEX;FTSEMIB",
                                            name: "FTSE MIB",
                                            options: {
                                                index_proname: "INDEX:FTSEMIB",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSEMYX;FBMKLCI",
                                            name: "FTSE Bursa Malaysia KLCI",
                                            options: {
                                                index_proname: "FTSEMYX:FBMKLCI",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXMEDIA",
                                            name: "Nifty Media",
                                            options: {
                                                index_proname: "NSE:CNXMEDIA",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNXINFRA",
                                            name: "Nifty Infrastructure",
                                            options: {
                                                index_proname: "NSE:CNXINFRA",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTYPVTBANK",
                                            name: "Nifty Private Bank",
                                            options: {
                                                index_proname: "NSE:NIFTYPVTBANK",
                                            },
                                        },
                                        {
                                            id: "SYML:BCBA;IMV",
                                            name: "S&P MERVAL",
                                            options: {
                                                index_proname: "BCBA:IMV",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG20",
                                            name: "WIG20",
                                            options: {
                                                index_proname: "GPW:WIG20",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XBANK",
                                            name: "BIST Banks",
                                            options: {
                                                index_proname: "BIST:XBANK",
                                            },
                                        },
                                        {
                                            id: "SYML:TSX;TSX",
                                            name: "S&P/TSX Composite",
                                            options: {
                                                index_proname: "TSX:TSX",
                                            },
                                        },
                                        {
                                            id: "SYML:BME;IBC",
                                            name: "IBEX 35",
                                            options: {
                                                index_proname: "BME:IBC",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSDAQ",
                                            name: "KOSDAQ Composite",
                                            options: {
                                                index_proname: "KRX:KOSDAQ",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;PX1",
                                            name: "CAC 40",
                                            options: {
                                                index_proname: "EURONEXT:PX1",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;PX4",
                                            name: "SBF 120",
                                            options: {
                                                index_proname: "EURONEXT:PX4",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;SXXP",
                                            name: "STOXX Europe 600",
                                            options: {
                                                index_proname: "TVC:SXXP",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;AEX",
                                            name: "AEX",
                                            options: {
                                                index_proname: "EURONEXT:AEX",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;OSEBX",
                                            name: "Oslo Børs Benchmark Index_GI",
                                            options: {
                                                index_proname: "EURONEXT:OSEBX",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;OBX",
                                            name: "OBX Total Return Index",
                                            options: {
                                                index_proname: "EURONEXT:OBX",
                                            },
                                        },
                                        {
                                            id: "SYML:EGX;EGX30",
                                            name: "EGX 30",
                                            options: {
                                                index_proname: "EGX:EGX30",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI200",
                                            name: "KOSPI 200",
                                            options: {
                                                index_proname: "KRX:KOSPI200",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTY_OIL_AND_GAS",
                                            name: "Nifty Oil and Gas",
                                            options: {
                                                index_proname: "NSE:NIFTY_OIL_AND_GAS",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTY_HEALTHCARE",
                                            name: "Nifty Healthcare",
                                            options: {
                                                index_proname: "NSE:NIFTY_HEALTHCARE",
                                            },
                                        },
                                        {
                                            id: "SYML:SIX;SMI",
                                            name: "Swiss Market Index",
                                            options: {
                                                index_proname: "SIX:SMI",
                                            },
                                        },
                                        {
                                            id: "SYML:TASE;TA35",
                                            name: "TA-35",
                                            options: {
                                                index_proname: "TASE:TA35",
                                            },
                                        },
                                        {
                                            id: "SYML:ASX;XAO",
                                            name: "All Ordinaries",
                                            options: {
                                                index_proname: "ASX:XAO",
                                            },
                                        },
                                        {
                                            id: "SYML:SZSE;399001",
                                            name: "SZSE Component",
                                            options: {
                                                index_proname: "SZSE:399001",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;STI",
                                            name: "Straits Times Index",
                                            options: {
                                                index_proname: "TVC:STI",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;PSEI",
                                            name: "PSEi",
                                            options: {
                                                index_proname: "PSE:PSEI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;OMXSPI",
                                            name: "OMX Stockholm PI",
                                            options: {
                                                index_proname: "OMXSTO:OMXSPI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXCOP;OMXC25",
                                            name: "OMX Copenhagen 25",
                                            options: {
                                                index_proname: "OMXCOP:OMXC25",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5HLTH",
                                            name: "S&P 500 Health Care",
                                            options: {
                                                index_proname: "SP:S5HLTH",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5CONS",
                                            name: "S&P 500 Consumer Staples",
                                            options: {
                                                index_proname: "SP:S5CONS",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5UTIL",
                                            name: "S&P 500 Utilities",
                                            options: {
                                                index_proname: "SP:S5UTIL",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5TELS",
                                            name: "S&P 500 Communication Services",
                                            options: {
                                                index_proname: "SP:S5TELS",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5COND",
                                            name: "S&P 500 Consumer Discretionary",
                                            options: {
                                                index_proname: "SP:S5COND",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;NIFTY_CONSR_DURBL",
                                            name: "Nifty Consumer Durables",
                                            options: {
                                                index_proname: "NSE:NIFTY_CONSR_DURBL",
                                            },
                                        },
                                        {
                                            id: "SYML:NSE;CNX200",
                                            name: "Nifty 200",
                                            options: {
                                                index_proname: "NSE:CNX200",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;BANK",
                                            name: "NASDAQ Bank",
                                            options: {
                                                index_proname: "NASDAQ:BANK",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5INDU",
                                            name: "S&P 500 Industrials",
                                            options: {
                                                index_proname: "SP:S5INDU",
                                            },
                                        },
                                        {
                                            id: "SYML:XETR;MDAX",
                                            name: "MDAX",
                                            options: {
                                                index_proname: "XETR:MDAX",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSDAQ150",
                                            name: "KOSDAQ 150",
                                            options: {
                                                index_proname: "KRX:KOSDAQ150",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5REAS",
                                            name: "S&P 500 Real Estate",
                                            options: {
                                                index_proname: "SP:S5REAS",
                                            },
                                        },
                                        {
                                            id: "SYML:BMFBOVESPA;IFIX",
                                            name: "Bovespa Real Estate IFIX",
                                            options: {
                                                index_proname: "BMFBOVESPA:IFIX",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XELKT",
                                            name: "BIST Electricity",
                                            options: {
                                                index_proname: "BIST:XELKT",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;S5MATR",
                                            name: "S&P 500 Materials",
                                            options: {
                                                index_proname: "SP:S5MATR",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;IDX30",
                                            name: "IDX 30",
                                            options: {
                                                index_proname: "IDX:IDX30",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;MID",
                                            name: "S&P MidCap 400",
                                            options: {
                                                index_proname: "SP:MID",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;SA40",
                                            name: "South Africa Top 40",
                                            options: {
                                                index_proname: "TVC:SA40",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;OEX",
                                            name: "S&P 100",
                                            options: {
                                                index_proname: "SP:OEX",
                                            },
                                        },
                                        {
                                            id: "SYML:HNX;HNXINDEX",
                                            name: "HNX Index",
                                            options: {
                                                index_proname: "HNX:HNXINDEX",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;BKX",
                                            name: "KBW NASDAQ Bank",
                                            options: {
                                                index_proname: "NASDAQ:BKX",
                                            },
                                        },
                                        {
                                            id: "SYML:BMV;ME",
                                            name: "S&P/BMV IPC",
                                            options: {
                                                index_proname: "BMV:ME",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X100S",
                                            name: "BIST 100 Capped 10",
                                            options: {
                                                index_proname: "BIST:X100S",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XGIDA",
                                            name: "BIST Food Beverage",
                                            options: {
                                                index_proname: "BIST:XGIDA",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG",
                                            name: "WIG",
                                            options: {
                                                index_proname: "GPW:WIG",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;RUA",
                                            name: "Russell 3000",
                                            options: {
                                                index_proname: "TVC:RUA",
                                            },
                                        },
                                        {
                                            id: "SYML:SP;SPF",
                                            name: "S&P 500 Financials",
                                            options: {
                                                index_proname: "SP:SPF",
                                            },
                                        },
                                        {
                                            id: "SYML:BCS;SP_IPSA",
                                            name: "S&P IPSA",
                                            options: {
                                                index_proname: "BCS:SP_IPSA",
                                            },
                                        },
                                        {
                                            id: "SYML:DJ;DJU",
                                            name: "Dow Jones Utility Average",
                                            options: {
                                                index_proname: "DJ:DJU",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXHEX;OMXH25",
                                            name: "OMX Helsinki 25",
                                            options: {
                                                index_proname: "OMXHEX:OMXH25",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XULAS",
                                            name: "BIST Transportation",
                                            options: {
                                                index_proname: "BIST:XULAS",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;KSE100",
                                            name: "KSE 100",
                                            options: {
                                                index_proname: "PSX:KSE100",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTUMY",
                                            name: "BIST All Shares-100",
                                            options: {
                                                index_proname: "BIST:XTUMY",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUSIN",
                                            name: "BIST Industrials",
                                            options: {
                                                index_proname: "BIST:XUSIN",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;HXC",
                                            name: "NASDAQ Golden Dragon China",
                                            options: {
                                                index_proname: "NASDAQ:HXC",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUTUM",
                                            name: "BIST All Shares",
                                            options: {
                                                index_proname: "BIST:XUTUM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XHOLD",
                                            name: "BIST Holding and Investment",
                                            options: {
                                                index_proname: "BIST:XHOLD",
                                            },
                                        },
                                        {
                                            id: "SYML:SET;SET100",
                                            name: "SET100",
                                            options: {
                                                index_proname: "SET:SET100",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XMADN",
                                            name: "BIST Mining",
                                            options: {
                                                index_proname: "BIST:XMADN",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXFN",
                                            name: "MOEX Financials",
                                            options: {
                                                index_proname: "MOEX:MOEXFN",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXMM",
                                            name: "MOEX Metals and Mining",
                                            options: {
                                                index_proname: "MOEX:MOEXMM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XMANA",
                                            name: "BIST Basic Metal",
                                            options: {
                                                index_proname: "BIST:XMANA",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;HGX",
                                            name: "PHLX Housing Sector",
                                            options: {
                                                index_proname: "NASDAQ:HGX",
                                            },
                                        },
                                        {
                                            id: "SYML:DJ;DJA",
                                            name: "Dow Jones Composite Average",
                                            options: {
                                                index_proname: "DJ:DJA",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XGMYO",
                                            name: "BIST Real Estate Investment Trusts",
                                            options: {
                                                index_proname: "BIST:XGMYO",
                                            },
                                        },
                                        {
                                            id: "SYML:TASE;TA125",
                                            name: "TA-125",
                                            options: {
                                                index_proname: "TASE:TA125",
                                            },
                                        },
                                        {
                                            id: "SYML:XETR;TDXP",
                                            name: "TecDAX",
                                            options: {
                                                index_proname: "XETR:TDXP",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;NDXT",
                                            name: "NASDAQ-100 Technology Sector",
                                            options: {
                                                index_proname: "NASDAQ:NDXT",
                                            },
                                        },
                                        {
                                            id: "SYML:QSE;GNRI",
                                            name: "QE Index",
                                            options: {
                                                index_proname: "QSE:GNRI",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNMIDCAP",
                                            name: "VNMidCap",
                                            options: {
                                                index_proname: "HOSE:VNMIDCAP",
                                            },
                                        },
                                        {
                                            id: "SYML:CSELK;ASI",
                                            name: "CSE All Share Price",
                                            options: {
                                                index_proname: "CSELK:ASI",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;BEL20",
                                            name: "BEL 20",
                                            options: {
                                                index_proname: "EURONEXT:BEL20",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUTEK",
                                            name: "BIST Technology",
                                            options: {
                                                index_proname: "BIST:XUTEK",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TBNI",
                                            name: "Tadawul Banks",
                                            options: {
                                                index_proname: "TADAWUL:TBNI",
                                            },
                                        },
                                        {
                                            id: "SYML:TVC;RUI",
                                            name: "Russell 1000",
                                            options: {
                                                index_proname: "TVC:RUI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XBLSM",
                                            name: "BIST Information Tecnology",
                                            options: {
                                                index_proname: "BIST:XBLSM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSGRT",
                                            name: "BIST Insurance",
                                            options: {
                                                index_proname: "BIST:XSGRT",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XU050",
                                            name: "BIST 50",
                                            options: {
                                                index_proname: "BIST:XU050",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXEU",
                                            name: "MOEX Electric Utilities",
                                            options: {
                                                index_proname: "MOEX:MOEXEU",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TISI",
                                            name: "Tadawul Insurance",
                                            options: {
                                                index_proname: "TADAWUL:TISI",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNREAL",
                                            name: "VNAllShare Real Estate",
                                            options: {
                                                index_proname: "HOSE:VNREAL",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;NBI",
                                            name: "NASDAQ Biotechnology",
                                            options: {
                                                index_proname: "NASDAQ:NBI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTAST",
                                            name: "BIST NonMetal Mineral Product",
                                            options: {
                                                index_proname: "BIST:XTAST",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;TRAN",
                                            name: "NASDAQ Transportation",
                                            options: {
                                                index_proname: "NASDAQ:TRAN",
                                            },
                                        },
                                        {
                                            id: "SYML:DFM;DFMGI",
                                            name: "DFM General",
                                            options: {
                                                index_proname: "DFM:DFMGI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKMYA",
                                            name: "BIST Chemical Petrol Plastic",
                                            options: {
                                                index_proname: "BIST:XKMYA",
                                            },
                                        },
                                        {
                                            id: "SYML:XETR;SDXP",
                                            name: "SDAX",
                                            options: {
                                                index_proname: "XETR:SDXP",
                                            },
                                        },
                                        {
                                            id: "SYML:XETR;DAXK",
                                            name: "DAX Kursindex",
                                            options: {
                                                index_proname: "XETR:DAXK",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XILTM",
                                            name: "BIST Telecommunication",
                                            options: {
                                                index_proname: "BIST:XILTM",
                                            },
                                        },
                                        {
                                            id: "SYML:BVB;BET",
                                            name: "BET Index",
                                            options: {
                                                index_proname: "BVB:BET",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;GD",
                                            name: "ATHEX Composite",
                                            options: {
                                                index_proname: "ATHEX:GD",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXCN",
                                            name: "MOEX Consumer",
                                            options: {
                                                index_proname: "MOEX:MOEXCN",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XINSA",
                                            name: "BIST Construction",
                                            options: {
                                                index_proname: "BIST:XINSA",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKP",
                                            name: "Boursa Kuwait Premier Market",
                                            options: {
                                                index_proname: "KSE:BKP",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTEKS",
                                            name: "BIST Textile Leather",
                                            options: {
                                                index_proname: "BIST:XTEKS",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSPOR",
                                            name: "BIST Sports",
                                            options: {
                                                index_proname: "BIST:XSPOR",
                                            },
                                        },
                                        {
                                            id: "SYML:BET;BUX",
                                            name: "BUX Index",
                                            options: {
                                                index_proname: "BET:BUX",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNSMALLCAP",
                                            name: "VNSmallcap",
                                            options: {
                                                index_proname: "HOSE:VNSMALLCAP",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTRZM",
                                            name: "BIST Tourism",
                                            options: {
                                                index_proname: "BIST:XTRZM",
                                            },
                                        },
                                        {
                                            id: "SYML:ASX;XMJ",
                                            name: "S&P/ASX 200 Materials",
                                            options: {
                                                index_proname: "ASX:XMJ",
                                            },
                                        },
                                        {
                                            id: "SYML:ASX;XFL",
                                            name: "S&P/ASX 50",
                                            options: {
                                                index_proname: "ASX:XFL",
                                            },
                                        },
                                        {
                                            id: "SYML:ASX;XKO",
                                            name: "S&P/ASX 300",
                                            options: {
                                                index_proname: "ASX:XKO",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXCH",
                                            name: "MOEX Chemicals",
                                            options: {
                                                index_proname: "MOEX:MOEXCH",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XHARZ",
                                            name: "BIST IPO",
                                            options: {
                                                index_proname: "BIST:XHARZ",
                                            },
                                        },
                                        {
                                            id: "SYML:DSEBD;DSEX",
                                            name: "DSE Broad",
                                            options: {
                                                index_proname: "DSEBD:DSEX",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XFINK",
                                            name: "BIST Leasing Factoring",
                                            options: {
                                                index_proname: "BIST:XFINK",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKAGT",
                                            name: "BIST Wood Paper Printing",
                                            options: {
                                                index_proname: "BIST:XKAGT",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEX10",
                                            name: "MOEX 10",
                                            options: {
                                                index_proname: "MOEX:MOEX10",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TMTI",
                                            name: "Tadawul Materials",
                                            options: {
                                                index_proname: "TADAWUL:TMTI",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNFIN",
                                            name: "VNAllShare Financials",
                                            options: {
                                                index_proname: "HOSE:VNFIN",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXTN",
                                            name: "MOEX Transportation",
                                            options: {
                                                index_proname: "MOEX:MOEXTN",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;FTSE",
                                            name: "FTSE/ATHEX Large Cap",
                                            options: {
                                                index_proname: "ATHEX:FTSE",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTCRT",
                                            name: "BIST Wholesale and Retail Trade",
                                            options: {
                                                index_proname: "BIST:XTCRT",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXTL",
                                            name: "MOEX Telecommunication",
                                            options: {
                                                index_proname: "MOEX:MOEXTL",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSEMYX;FBM70",
                                            name: "FTSE Bursa Malaysia Mid 70",
                                            options: {
                                                index_proname: "FTSEMYX:FBM70",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XLBNK",
                                            name: "BIST Liquid Banks",
                                            options: {
                                                index_proname: "BIST:XLBNK",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XMESY",
                                            name: "BIST Metal Products Mach.",
                                            options: {
                                                index_proname: "BIST:XMESY",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;LQ45",
                                            name: "IDX LQ45",
                                            options: {
                                                index_proname: "IDX:LQ45",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUHIZ",
                                            name: "BIST Services",
                                            options: {
                                                index_proname: "BIST:XUHIZ",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TENI",
                                            name: "Tadawul Energy",
                                            options: {
                                                index_proname: "TADAWUL:TENI",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VN100",
                                            name: "VN100",
                                            options: {
                                                index_proname: "HOSE:VN100",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;THEI",
                                            name: "Tadawul Health Care Equipment & Service",
                                            options: {
                                                index_proname: "TADAWUL:THEI",
                                            },
                                        },
                                        {
                                            id: "SYML:EURONEXT;PSI20",
                                            name: "PSI",
                                            options: {
                                                index_proname: "EURONEXT:PSI20",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;MWIG40",
                                            name: "mWIG40",
                                            options: {
                                                index_proname: "GPW:MWIG40",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNIND",
                                            name: "VNAllShare Industrials",
                                            options: {
                                                index_proname: "HOSE:VNIND",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;SWIG80",
                                            name: "sWIG80",
                                            options: {
                                                index_proname: "GPW:SWIG80",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TCGI",
                                            name: "Tadawul Capital Goods",
                                            options: {
                                                index_proname: "TADAWUL:TCGI",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_BANKI",
                                            name: "WIG-Banking",
                                            options: {
                                                index_proname: "GPW:WIG_BANKI",
                                            },
                                        },
                                        {
                                            id: "SYML:BMFBOVESPA;IBXL",
                                            name: "Brazil 50",
                                            options: {
                                                index_proname: "BMFBOVESPA:IBXL",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XYORT",
                                            name: "BIST Investment Trusts",
                                            options: {
                                                index_proname: "BIST:XYORT",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TTSI",
                                            name: "Tadawul Telecommunication Services",
                                            options: {
                                                index_proname: "TADAWUL:TTSI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUMAL",
                                            name: "BIST Financials",
                                            options: {
                                                index_proname: "BIST:XUMAL",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSIST",
                                            name: "BIST Istanbul",
                                            options: {
                                                index_proname: "BIST:XSIST",
                                            },
                                        },
                                        {
                                            id: "SYML:CSEMA;MASI",
                                            name: "MASI",
                                            options: {
                                                index_proname: "CSEMA:MASI",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TFBI",
                                            name: "Tadawul Food & Beverages",
                                            options: {
                                                index_proname: "TADAWUL:TFBI",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TRLI",
                                            name: "Tadawul Consumer Discretionary Distribution & Retail",
                                            options: {
                                                index_proname: "TADAWUL:TRLI",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TRMI",
                                            name: "Tadawul Real Estate Management & Development",
                                            options: {
                                                index_proname: "TADAWUL:TRMI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XAKUR",
                                            name: "BIST Brokerage Houses",
                                            options: {
                                                index_proname: "BIST:XAKUR",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXBMI",
                                            name: "MOEX Broad Market",
                                            options: {
                                                index_proname: "MOEX:MOEXBMI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XYUZO",
                                            name: "BIST 100-30",
                                            options: {
                                                index_proname: "BIST:XYUZO",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;MCX",
                                            name: "FTSE 250",
                                            options: {
                                                index_proname: "FTSE:MCX",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;IXCO",
                                            name: "NASDAQ Computer",
                                            options: {
                                                index_proname: "NASDAQ:IXCO",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XK100",
                                            name: "BIST Participation 100",
                                            options: {
                                                index_proname: "BIST:XK100",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKTUM",
                                            name: "BIST Participation All Shares",
                                            options: {
                                                index_proname: "BIST:XKTUM",
                                            },
                                        },
                                        {
                                            id: "SYML:TADAWUL;TDAI",
                                            name: "Tadawul Consumer Durables & Apparel",
                                            options: {
                                                index_proname: "TADAWUL:TDAI",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNMAT",
                                            name: "VNAllShare Materials",
                                            options: {
                                                index_proname: "HOSE:VNMAT",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNENE",
                                            name: "VNAllShare Energy",
                                            options: {
                                                index_proname: "HOSE:VNENE",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNIT",
                                            name: "VNAllShare Information Technology",
                                            options: {
                                                index_proname: "HOSE:VNIT",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;ISSI",
                                            name: "Indonesia Sharia Stock Index",
                                            options: {
                                                index_proname: "IDX:ISSI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X100C",
                                            name: "BIST 100 Capped 25",
                                            options: {
                                                index_proname: "BIST:X100C",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XYLDZ",
                                            name: "BIST Stars",
                                            options: {
                                                index_proname: "BIST:XYLDZ",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNCONS",
                                            name: "VNAllShare Consumer Staples",
                                            options: {
                                                index_proname: "HOSE:VNCONS",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX35PI",
                                            name: "OMX Stockholm Real Estate PI",
                                            options: {
                                                index_proname: "OMXSTO:SX35PI",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MOEXINN",
                                            name: "MOEX Innovation",
                                            options: {
                                                index_proname: "MOEX:MOEXINN",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI50",
                                            name: "KOSPI 50",
                                            options: {
                                                index_proname: "KRX:KOSPI50",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNUTI",
                                            name: "VNAllShare Utilities",
                                            options: {
                                                index_proname: "HOSE:VNUTI",
                                            },
                                        },
                                        {
                                            id: "SYML:NZX;NZ50G",
                                            name: "S&P/NZX 50",
                                            options: {
                                                index_proname: "NZX:NZ50G",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNHEAL",
                                            name: "VNAllShare Health Care",
                                            options: {
                                                index_proname: "HOSE:VNHEAL",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;IXTC",
                                            name: "NASDAQ Telecommunications",
                                            options: {
                                                index_proname: "NASDAQ:IXTC",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKA",
                                            name: "Boursa Kuwait All Share",
                                            options: {
                                                index_proname: "KSE:BKA",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNCOND",
                                            name: "VNAllShare Consumer Discretionary",
                                            options: {
                                                index_proname: "HOSE:VNCOND",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTM25",
                                            name: "BIST Dividend 25",
                                            options: {
                                                index_proname: "BIST:XTM25",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;INSR",
                                            name: "NASDAQ Insurance",
                                            options: {
                                                index_proname: "NASDAQ:INSR",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XBANA",
                                            name: "BIST Main",
                                            options: {
                                                index_proname: "BIST:XBANA",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;FIN",
                                            name: "PSE Financials",
                                            options: {
                                                index_proname: "PSE:FIN",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;INDS",
                                            name: "NASDAQ Industrials",
                                            options: {
                                                index_proname: "NASDAQ:INDS",
                                            },
                                        },
                                        {
                                            id: "SYML:BVL;SPBLPGPT",
                                            name: "S&P/BVL Peru General",
                                            options: {
                                                index_proname: "BVL:SPBLPGPT",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X10XB",
                                            name: "BIST Liquid 10 Ex Banks",
                                            options: {
                                                index_proname: "BIST:X10XB",
                                            },
                                        },
                                        {
                                            id: "SYML:HOSE;VNALLSHARE",
                                            name: "VNAllshare",
                                            options: {
                                                index_proname: "HOSE:VNALLSHARE",
                                            },
                                        },
                                        {
                                            id: "SYML:CBOEFTSE;MRUT",
                                            name: "Mini-Russell 2000",
                                            options: {
                                                index_proname: "CBOEFTSE:MRUT",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;OSX",
                                            name: "PHLX Oil Service Sector",
                                            options: {
                                                index_proname: "NASDAQ:OSX",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;JII70",
                                            name: "Jakarta Islamic 70 Index",
                                            options: {
                                                index_proname: "IDX:JII70",
                                            },
                                        },
                                        {
                                            id: "SYML:BVC;ICAP",
                                            name: "MSCI COLCAP",
                                            options: {
                                                index_proname: "BVC:ICAP",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;ASX",
                                            name: "FTSE All-Share",
                                            options: {
                                                index_proname: "FTSE:ASX",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;OMXSGI",
                                            name: "OMX Stockholm GI",
                                            options: {
                                                index_proname: "OMXSTO:OMXSGI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI100",
                                            name: "KOSPI 100",
                                            options: {
                                                index_proname: "KRX:KOSPI100",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTMTU",
                                            name: "BIST Dividend",
                                            options: {
                                                index_proname: "BIST:XTMTU",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;AXX",
                                            name: "FTSE AIM All-Share",
                                            options: {
                                                index_proname: "FTSE:AXX",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;NMX",
                                            name: "FTSE 350",
                                            options: {
                                                index_proname: "FTSE:NMX",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_NRCHOM",
                                            name: "WIG-Real Estate",
                                            options: {
                                                index_proname: "GPW:WIG_NRCHOM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XK050",
                                            name: "BIST Participation 50",
                                            options: {
                                                index_proname: "BIST:XK050",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XTKJS",
                                            name: "BIST Technology Capped",
                                            options: {
                                                index_proname: "BIST:XTKJS",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;ATX",
                                            name: "Austrian Traded Index",
                                            options: {
                                                index_proname: "VIE:ATX",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;MCXSM",
                                            name: "MOEX SMID",
                                            options: {
                                                index_proname: "MOEX:MCXSM",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKM",
                                            name: "Boursa Kuwait Main Market",
                                            options: {
                                                index_proname: "KSE:BKM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XUSRD",
                                            name: "BIST Sustainability",
                                            options: {
                                                index_proname: "BIST:XUSRD",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_BUDOW",
                                            name: "WIG-Construction",
                                            options: {
                                                index_proname: "GPW:WIG_BUDOW",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXVSE;OMXVGI",
                                            name: "OMX Vilnius GI",
                                            options: {
                                                index_proname: "OMXVSE:OMXVGI",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_UKRAIN",
                                            name: "WIG-Ukraine",
                                            options: {
                                                index_proname: "GPW:WIG_UKRAIN",
                                            },
                                        },
                                        {
                                            id: "SYML:NSENG;NGX30",
                                            name: "NGX 30",
                                            options: {
                                                index_proname: "NSENG:NGX30",
                                            },
                                        },
                                        {
                                            id: "SYML:BAHRAIN;BHBX",
                                            name: "Bahrain All Share",
                                            options: {
                                                index_proname: "BAHRAIN:BHBX",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKOBI",
                                            name: "BIST SME Industrial",
                                            options: {
                                                index_proname: "BIST:XKOBI",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;KSE30",
                                            name: "KSE 30",
                                            options: {
                                                index_proname: "PSX:KSE30",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;KMI30",
                                            name: "KMI 30",
                                            options: {
                                                index_proname: "PSX:KMI30",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXTSE;OMXTGI",
                                            name: "OMX Tallinn GI",
                                            options: {
                                                index_proname: "OMXTSE:OMXTGI",
                                            },
                                        },
                                        {
                                            id: "SYML:CBOE;SPESG",
                                            name: "S&P 500 ESG",
                                            options: {
                                                index_proname: "CBOE:SPESG",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX15PI",
                                            name: "OMX Stockholm Telecommunications PI",
                                            options: {
                                                index_proname: "OMXSTO:SX15PI",
                                            },
                                        },
                                        {
                                            id: "SYML:NYSE;XMI",
                                            name: "NYSE Arca Major Market",
                                            options: {
                                                index_proname: "NYSE:XMI",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;UTY",
                                            name: "PHLX Utilities Sector",
                                            options: {
                                                index_proname: "NASDAQ:UTY",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_GORNIC",
                                            name: "WIG-Mining",
                                            options: {
                                                index_proname: "GPW:WIG_GORNIC",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG30",
                                            name: "WIG30",
                                            options: {
                                                index_proname: "GPW:WIG30",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;JII",
                                            name: "Jakarta Islamic Index",
                                            options: {
                                                index_proname: "IDX:JII",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;FIN",
                                            name: "CSE Financials",
                                            options: {
                                                index_proname: "CSECY:FIN",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKURY",
                                            name: "BIST Corporate Governance",
                                            options: {
                                                index_proname: "BIST:XKURY",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX10PI",
                                            name: "OMX Stockholm Technology PI",
                                            options: {
                                                index_proname: "OMXSTO:SX10PI",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;KOMPAS100",
                                            name: "IDX Kompas 100",
                                            options: {
                                                index_proname: "IDX:KOMPAS100",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;IND",
                                            name: "PSE Industrial",
                                            options: {
                                                index_proname: "PSE:IND",
                                            },
                                        },
                                        {
                                            id: "SYML:ADX;FADX15",
                                            name: "FTSE ADX 15",
                                            options: {
                                                index_proname: "ADX:FADX15",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XK030",
                                            name: "BIST Participation 30",
                                            options: {
                                                index_proname: "BIST:XK030",
                                            },
                                        },
                                        {
                                            id: "SYML:DSEBD;DS30",
                                            name: "DSE 30",
                                            options: {
                                                index_proname: "DSEBD:DS30",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX60PI",
                                            name: "OMX Stockholm Energy PI",
                                            options: {
                                                index_proname: "OMXSTO:SX60PI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX55PI",
                                            name: "OMX Stockholm Basic Materials PI",
                                            options: {
                                                index_proname: "OMXSTO:SX55PI",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;AIM1",
                                            name: "FTSE AIM 100",
                                            options: {
                                                index_proname: "FTSE:AIM1",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX20PI",
                                            name: "OMX Stockholm Health Care PI",
                                            options: {
                                                index_proname: "OMXSTO:SX20PI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRX100",
                                            name: "KRX 100 Consolidated",
                                            options: {
                                                index_proname: "KRX:KRX100",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKM50",
                                            name: "Boursa Kuwait Main Market 50",
                                            options: {
                                                index_proname: "KSE:BKM50",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX50PI",
                                            name: "OMX Stockholm Industrials PI",
                                            options: {
                                                index_proname: "OMXSTO:SX50PI",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;MWIG40TR",
                                            name: "mWIG40TR",
                                            options: {
                                                index_proname: "GPW:MWIG40TR",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG20TR",
                                            name: "WIG20TR",
                                            options: {
                                                index_proname: "GPW:WIG20TR",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX3010PI",
                                            name: "OMX Stockholm Banks PI",
                                            options: {
                                                index_proname: "OMXSTO:SX3010PI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KTOP30",
                                            name: "KTOP 30",
                                            options: {
                                                index_proname: "KRX:KTOP30",
                                            },
                                        },
                                        {
                                            id: "SYML:BME;IS",
                                            name: "IBEX Small Cap",
                                            options: {
                                                index_proname: "BME:IS",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX30PI",
                                            name: "OMX Stockholm Financials PI",
                                            options: {
                                                index_proname: "OMXSTO:SX30PI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSKAY",
                                            name: "BIST Kayseri",
                                            options: {
                                                index_proname: "BIST:XSKAY",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XELOT",
                                            name: "BIST 50-30",
                                            options: {
                                                index_proname: "BIST:XELOT",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_ENERG",
                                            name: "WIG-Energy",
                                            options: {
                                                index_proname: "GPW:WIG_ENERG",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXICE;OMXI10",
                                            name: "OMX Iceland 15",
                                            options: {
                                                index_proname: "OMXICE:OMXI15",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSDAQ4",
                                            name: "KOSDAQ SmallCap",
                                            options: {
                                                index_proname: "KRX:KOSDAQ4",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX65PI",
                                            name: "OMX Stockholm Utilities PI",
                                            options: {
                                                index_proname: "OMXSTO:SX65PI",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;FTSEA",
                                            name: "FTSE ATHEX Market Index",
                                            options: {
                                                index_proname: "ATHEX:FTSEA",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIGDIV",
                                            name: "WIGdiv",
                                            options: {
                                                index_proname: "GPW:WIGDIV",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG.GAMES5",
                                            name: "WIG.GAMES5",
                                            options: {
                                                index_proname: "GPW:WIG.GAMES5",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_GRY",
                                            name: "WIG-gaming",
                                            options: {
                                                index_proname: "GPW:WIG_GRY",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;FTSEM",
                                            name: "FTSE/ATHEX Mid Cap",
                                            options: {
                                                index_proname: "ATHEX:FTSEM",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;PRO",
                                            name: "PSE Property",
                                            options: {
                                                index_proname: "PSE:PRO",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;ALLSHR",
                                            name: "KSE All Share",
                                            options: {
                                                index_proname: "PSX:ALLSHR",
                                            },
                                        },
                                        {
                                            id: "SYML:PSECZ;PX",
                                            name: "PX Index",
                                            options: {
                                                index_proname: "PSECZ:PX",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_PALIWA",
                                            name: "WIG-Oil&Gas",
                                            options: {
                                                index_proname: "GPW:WIG_PALIWA",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;HDG",
                                            name: "PSE Holding Firms",
                                            options: {
                                                index_proname: "PSE:HDG",
                                            },
                                        },
                                        {
                                            id: "SYML:BME;ICC",
                                            name: "IBEX Medium Cap",
                                            options: {
                                                index_proname: "BME:ICC",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XKTMT",
                                            name: "BIST Participation Dividend",
                                            options: {
                                                index_proname: "BIST:XKTMT",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSKOC",
                                            name: "BIST Kocaeli",
                                            options: {
                                                index_proname: "BIST:XSKOC",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSADA",
                                            name: "BIST Adana",
                                            options: {
                                                index_proname: "BIST:XSADA",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR7",
                                            name: "KRX Steels",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR7",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;M_O",
                                            name: "PSE Mining & Oil",
                                            options: {
                                                index_proname: "PSE:M_O",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;RUBMI",
                                            name: "RTS Broad Market",
                                            options: {
                                                index_proname: "MOEX:RUBMI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX4050PI",
                                            name: "OMX Stockholm Travel and Leisure PI",
                                            options: {
                                                index_proname: "OMXSTO:SX4050PI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSBUR",
                                            name: "BIST Bursa",
                                            options: {
                                                index_proname: "BIST:XSBUR",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;MZNPI",
                                            name: "Meezan Pakistan",
                                            options: {
                                                index_proname: "PSX:MZNPI",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;SVC",
                                            name: "PSE Services",
                                            options: {
                                                index_proname: "PSE:SVC",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSANK",
                                            name: "BIST Ankara",
                                            options: {
                                                index_proname: "BIST:XSANK",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXRSE;OMXRGI",
                                            name: "OMX Riga GI",
                                            options: {
                                                index_proname: "OMXRSE:OMXRGI",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIGTECH",
                                            name: "WIGtech",
                                            options: {
                                                index_proname: "GPW:WIGTECH",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI8",
                                            name: "KOSPI Chemicals",
                                            options: {
                                                index_proname: "KRX:KOSPI8",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_LEKI",
                                            name: "WIG-Pharmaceuticals",
                                            options: {
                                                index_proname: "GPW:WIG_LEKI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSIZM",
                                            name: "BIST Izmir",
                                            options: {
                                                index_proname: "BIST:XSIZM",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_INFO",
                                            name: "WIG-IT",
                                            options: {
                                                index_proname: "GPW:WIG_INFO",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_SPOZYW",
                                            name: "WIG-Food",
                                            options: {
                                                index_proname: "GPW:WIG_SPOZYW",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSD25",
                                            name: "BIST Sustainability 25",
                                            options: {
                                                index_proname: "BIST:XSD25",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;AIM5",
                                            name: "FTSE AIM UK 50",
                                            options: {
                                                index_proname: "FTSE:AIM5",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR2",
                                            name: "KRX Semiconductor",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR2",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSKON",
                                            name: "BIST Konya",
                                            options: {
                                                index_proname: "BIST:XSKON",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRX300R",
                                            name: "KRX 300 Regular",
                                            options: {
                                                index_proname: "KRX:KRX300R",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG140",
                                            name: "WIG140",
                                            options: {
                                                index_proname: "GPW:WIG140",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;OFIN",
                                            name: "NASDAQ Real Estate and Other Financial Services",
                                            options: {
                                                index_proname: "NASDAQ:OFIN",
                                            },
                                        },
                                        {
                                            id: "SYML:TPEX;GTSM50",
                                            name: "GreTai 50",
                                            options: {
                                                index_proname: "TPEX:GTSM50",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_ODZIEZ",
                                            name: "WIG-Clothes",
                                            options: {
                                                index_proname: "GPW:WIG_ODZIEZ",
                                            },
                                        },
                                        {
                                            id: "SYML:MOEX;RTSCH",
                                            name: "RTS Chemicals",
                                            options: {
                                                index_proname: "MOEX:RTSCH",
                                            },
                                        },
                                        {
                                            id: "SYML:TSX;TXSI",
                                            name: "S&P/TSX 60 Shariah",
                                            options: {
                                                index_proname: "TSX:TXSI",
                                            },
                                        },
                                        {
                                            id: "SYML:PSE;ALL",
                                            name: "PSE All Shares",
                                            options: {
                                                index_proname: "PSE:ALL",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKAT",
                                            name: "Boursa Kuwait All Share TR",
                                            options: {
                                                index_proname: "KSE:BKAT",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_MOTO",
                                            name: "WIG-Automobiles&Parts",
                                            options: {
                                                index_proname: "GPW:WIG_MOTO",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSDAQ159",
                                            name: "KOSDAQ Semiconductors",
                                            options: {
                                                index_proname: "KRX:KOSDAQ159",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_CHEMIA",
                                            name: "WIG-Chemicals",
                                            options: {
                                                index_proname: "GPW:WIG_CHEMIA",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;FTSE20",
                                            name: "FTSE/CySE 20",
                                            options: {
                                                index_proname: "CSECY:FTSE20",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSRDK",
                                            name: "BIST Participation Sustainability",
                                            options: {
                                                index_proname: "BIST:XSRDK",
                                            },
                                        },
                                        {
                                            id: "SYML:BVC;IEQY",
                                            name: "COLEQTY",
                                            options: {
                                                index_proname: "BVC:IEQY",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X030S",
                                            name: "BIST 30 Capped 10",
                                            options: {
                                                index_proname: "BIST:X030S",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKPT",
                                            name: "Boursa Kuwait Premier Market TR",
                                            options: {
                                                index_proname: "KSE:BKPT",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR4",
                                            name: "KRX Banks",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR4",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSANT",
                                            name: "BIST Antalya",
                                            options: {
                                                index_proname: "BIST:XSANT",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSAYD",
                                            name: "BIST Aydin",
                                            options: {
                                                index_proname: "BIST:XSAYD",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;OGTI",
                                            name: "PSX Oil & Gas Tradable",
                                            options: {
                                                index_proname: "PSX:OGTI",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG.MS_FIN",
                                            name: "WIG.MS-FIN",
                                            options: {
                                                index_proname: "GPW:WIG.MS_FIN",
                                            },
                                        },
                                        {
                                            id: "SYML:KSE;BKMT",
                                            name: "Boursa Kuwait Main Market TR",
                                            options: {
                                                index_proname: "KSE:BKMT",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSDNZ",
                                            name: "BIST Denizli",
                                            options: {
                                                index_proname: "BIST:XSDNZ",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X030EA",
                                            name: "BIST 30 Equal Weighted Return",
                                            options: {
                                                index_proname: "BIST:X030EA",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR3",
                                            name: "KRX Health Care",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR3",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSBAL",
                                            name: "BIST Balikesir",
                                            options: {
                                                index_proname: "BIST:XSBAL",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSTKR",
                                            name: "BIST Tekirdag",
                                            options: {
                                                index_proname: "BIST:XSTKR",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_POLAND",
                                            name: "WIG-Poland",
                                            options: {
                                                index_proname: "GPW:WIG_POLAND",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_MEDIA",
                                            name: "WIG-Media",
                                            options: {
                                                index_proname: "GPW:WIG_MEDIA",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR21",
                                            name: "KRX IT",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR21",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;IDXMESBUMN",
                                            name: "IDX-MES BUMN 17",
                                            options: {
                                                index_proname: "IDX:IDXMESBUMN",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;UPP9",
                                            name: "UBL Pakistan Enterprise",
                                            options: {
                                                index_proname: "PSX:UPP9",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI5",
                                            name: "KOSPI Foods & Beverages",
                                            options: {
                                                index_proname: "KRX:KOSPI5",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX4010PI",
                                            name: "OMX Stockholm Automobiles and Parts PI",
                                            options: {
                                                index_proname: "OMXSTO:SX4010PI",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX4510PI",
                                            name: "OMX Stockholm Food, Beverage and Tobacco PI",
                                            options: {
                                                index_proname: "OMXSTO:SX4510PI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI2",
                                            name: "KOSPI LargeCap",
                                            options: {
                                                index_proname: "KRX:KOSPI2",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG.MS_BAS",
                                            name: "WIG.MS-BAS",
                                            options: {
                                                index_proname: "GPW:WIG.MS_BAS",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XK030EA",
                                            name: "BIST Participation 30 Equal Weighted Return",
                                            options: {
                                                index_proname: "BIST:XK030EA",
                                            },
                                        },
                                        {
                                            id: "SYML:BVC;ICSC",
                                            name: "COLSC",
                                            options: {
                                                index_proname: "BVC:ICSC",
                                            },
                                        },
                                        {
                                            id: "SYML:CSEMA;MASID",
                                            name: "MASI (USD)",
                                            options: {
                                                index_proname: "CSEMA:MASID",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIGTECHTR",
                                            name: "WIGtechTR",
                                            options: {
                                                index_proname: "GPW:WIGTECHTR",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;KMIALLSHR",
                                            name: "PSX-KMI All Share",
                                            options: {
                                                index_proname: "PSX:KMIALLSHR",
                                            },
                                        },
                                        {
                                            id: "SYML:IDX;IDXSHAGROW",
                                            name: "IDX Sharia Growth",
                                            options: {
                                                index_proname: "IDX:IDXSHAGROW",
                                            },
                                        },
                                        {
                                            id: "SYML:BET;BUMIX",
                                            name: "BUMIX Index",
                                            options: {
                                                index_proname: "BET:BUMIX",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR19",
                                            name: "KRX Automobile",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR19",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;ECM",
                                            name: "CSE Emerging Companies Market",
                                            options: {
                                                index_proname: "CSECY:ECM",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XSMNS",
                                            name: "BIST Manisa",
                                            options: {
                                                index_proname: "BIST:XSMNS",
                                            },
                                        },
                                        {
                                            id: "SYML:OMXSTO;SX5010PI",
                                            name: "OMX Stockholm Construction and Materials PI",
                                            options: {
                                                index_proname: "OMXSTO:SX5010PI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR20",
                                            name: "KRX Media&Entertainment",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR20",
                                            },
                                        },
                                        {
                                            id: "SYML:NASDAQ;NQUSB451020",
                                            name: "NASDAQ US Benchmark Food Producers",
                                            options: {
                                                index_proname: "NASDAQ:NQUSB451020",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR1",
                                            name: "KRX Automobile Sector",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR1",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSPI21",
                                            name: "KOSPI Financial Companies",
                                            options: {
                                                index_proname: "KRX:KOSPI21",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;BKTI",
                                            name: "PSX Banking",
                                            options: {
                                                index_proname: "PSX:BKTI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;X030C",
                                            name: "BIST 30 Capped 25 Return",
                                            options: {
                                                index_proname: "BIST:X030C",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR6",
                                            name: "KRX Energy and Chemical",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR6",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;NITPGI",
                                            name: "NIT Pakistan Gateway",
                                            options: {
                                                index_proname: "PSX:NITPGI",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR10",
                                            name: "KRX Constructions",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR10",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XELOC",
                                            name: "BIST 50-30 Capped 25 Return",
                                            options: {
                                                index_proname: "BIST:XELOC",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR14",
                                            name: "KRX Insurance Sector",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR14",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR15",
                                            name: "KRX Transportation",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR15",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR13",
                                            name: "KRX Machinery and Equipment",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR13",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KOSDAQ3",
                                            name: "KOSDAQ MidCap",
                                            options: {
                                                index_proname: "KRX:KOSDAQ3",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR22",
                                            name: "KRX Utilities",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR22",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR9",
                                            name: "KRX Media and Telecom",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR9",
                                            },
                                        },
                                        {
                                            id: "SYML:KRX;KRXSECTOR12",
                                            name: "KRX Securities",
                                            options: {
                                                index_proname: "KRX:KRXSECTOR12",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_ESG",
                                            name: "WIG-ESG",
                                            options: {
                                                index_proname: "GPW:WIG_ESG",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;NBPPGI",
                                            name: "NBP Pakistan Growth",
                                            options: {
                                                index_proname: "PSX:NBPPGI",
                                            },
                                        },
                                        {
                                            id: "SYML:CSEMA;MASIE",
                                            name: "MASI (EURO)",
                                            options: {
                                                index_proname: "CSEMA:MASIE",
                                            },
                                        },
                                        {
                                            id: "SYML:BVMT;PX1",
                                            name: "Tunindex",
                                            options: {
                                                index_proname: "BVMT:PX1",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;HOTEL",
                                            name: "CSE Hotels",
                                            options: {
                                                index_proname: "CSECY:HOTEL",
                                            },
                                        },
                                        {
                                            id: "SYML:PSECZ;PX-TR",
                                            name: "PX Total Return",
                                            options: {
                                                index_proname: "PSECZ:PX-TR",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;FTSEGTI",
                                            name: "FTSE/Athex Global Traders Plus",
                                            options: {
                                                index_proname: "ATHEX:FTSEGTI",
                                            },
                                        },
                                        {
                                            id: "SYML:BIST;XELOS",
                                            name: "BIST 50-30 Capped 10 Return",
                                            options: {
                                                index_proname: "BIST:XELOS",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;ATF",
                                            name: "ATX five",
                                            options: {
                                                index_proname: "VIE:ATF",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG_CEE",
                                            name: "WIG-CEE",
                                            options: {
                                                index_proname: "GPW:WIG_CEE",
                                            },
                                        },
                                        {
                                            id: "SYML:ATHEX;FTSEMSFW",
                                            name: "FTSE/ATHEX MID&SM CAP FACT-WEI",
                                            options: {
                                                index_proname: "ATHEX:FTSEMSFW",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;MAIN",
                                            name: "CSE Main Market",
                                            options: {
                                                index_proname: "CSECY:MAIN",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;TAF",
                                            name: "ATX five Total Return",
                                            options: {
                                                index_proname: "VIE:TAF",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;IAX",
                                            name: "Immobilien ATX",
                                            options: {
                                                index_proname: "VIE:IAX",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;GEN",
                                            name: "CSE General",
                                            options: {
                                                index_proname: "CSECY:GEN",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;AFIN",
                                            name: "ATX Financials in EUR",
                                            options: {
                                                index_proname: "VIE:AFIN",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;ATPX",
                                            name: "ATX Prime",
                                            options: {
                                                index_proname: "VIE:ATPX",
                                            },
                                        },
                                        {
                                            id: "SYML:PSECZ;PX-GLOB",
                                            name: "PX-GLOB",
                                            options: {
                                                index_proname: "PSECZ:PX-GLOB",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;TAX",
                                            name: "ATX Total Return",
                                            options: {
                                                index_proname: "VIE:TAX",
                                            },
                                        },
                                        {
                                            id: "SYML:CSEMA;MASIR",
                                            name: "MASI Return Gross",
                                            options: {
                                                index_proname: "CSEMA:MASIR",
                                            },
                                        },
                                        {
                                            id: "SYML:BME;INDGRO15",
                                            name: "IBEX GROWTH MARKET 15",
                                            options: {
                                                index_proname: "BME:INDGRO15",
                                            },
                                        },
                                        {
                                            id: "SYML:GPW;WIG30TR",
                                            name: "WIG30TR",
                                            options: {
                                                index_proname: "GPW:WIG30TR",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;INVE",
                                            name: "CSE Investment Market",
                                            options: {
                                                index_proname: "CSECY:INVE",
                                            },
                                        },
                                        {
                                            id: "SYML:BVCV;IBC",
                                            name: "Caracas Stock Exchange General",
                                            options: {
                                                index_proname: "BVCV:IBC",
                                            },
                                        },
                                        {
                                            id: "SYML:CSECY;ALTE",
                                            name: "CSE Alternative Market",
                                            options: {
                                                index_proname: "CSECY:ALTE",
                                            },
                                        },
                                        {
                                            id: "SYML:PSX;JSMFI",
                                            name: "JS Momentum Factor",
                                            options: {
                                                index_proname: "PSX:JSMFI",
                                            },
                                        },
                                        {
                                            id: "SYML:BVCV;IFINANCIE",
                                            name: "Caracas Stock Exchange Financial",
                                            options: {
                                                index_proname: "BVCV:IFINANCIE",
                                            },
                                        },
                                        {
                                            id: "SYML:CSEMA;MASRN",
                                            name: "MASI Return Net",
                                            options: {
                                                index_proname: "CSEMA:MASRN",
                                            },
                                        },
                                        {
                                            id: "SYML:PSECZ;PX-TRNET",
                                            name: "PX Net Total Return",
                                            options: {
                                                index_proname: "PSECZ:PX-TRNET",
                                            },
                                        },
                                        {
                                            id: "SYML:BVCV;IINDUSTR",
                                            name: "Caracas Stock Exchange Industrial",
                                            options: {
                                                index_proname: "BVCV:IINDUSTR",
                                            },
                                        },
                                        {
                                            id: "SYML:BME;INDGROAS",
                                            name: "IBEX Growth Market All Share",
                                            options: {
                                                index_proname: "BME:INDGROAS",
                                            },
                                        },
                                        {
                                            id: "SYML:BVMT;TUN20",
                                            name: "Tunindex 20",
                                            options: {
                                                index_proname: "BVMT:TUN20",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;WBI",
                                            name: "Wiener Börse Index",
                                            options: {
                                                index_proname: "VIE:WBI",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;AIGS",
                                            name: "ATX Industrial Goods & Services",
                                            options: {
                                                index_proname: "VIE:AIGS",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;ABI",
                                            name: "ATX Basic Industries",
                                            options: {
                                                index_proname: "VIE:ABI",
                                            },
                                        },
                                        {
                                            id: "SYML:BAHRAIN;BIX",
                                            name: "Bahrain Islamic Index",
                                            options: {
                                                index_proname: "BAHRAIN:BIX",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;ACPS",
                                            name: "ATX Consumer Products & Services",
                                            options: {
                                                index_proname: "VIE:ACPS",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;NTAF",
                                            name: "ATX five Net Total Return",
                                            options: {
                                                index_proname: "VIE:NTAF",
                                            },
                                        },
                                        {
                                            id: "SYML:VIE;NTAX",
                                            name: "ATX Net Total Return",
                                            options: {
                                                index_proname: "VIE:NTAX",
                                            },
                                        },
                                        {
                                            id: "SYML:CSELK;S&PSL20",
                                            name: "S&P Sri Lanka 20",
                                            options: {
                                                index_proname: "CSELK:S&PSL20",
                                            },
                                        },
                                        {
                                            id: "SYML:FTSE;TW50",
                                            name: "FTSE TWSE Taiwan 50",
                                            options: {
                                                index_proname: "FTSE:TW50",
                                            },
                                        },
                                        {
                                            id: "SYML:ADX;FADGMI",
                                            name: "FTSE ADX Growth Market",
                                            options: {
                                                index_proname: "ADX:FADGMI",
                                            },
                                        },
                                        {
                                            id: "SYML:ADX;FADGI",
                                            name: "FTSE ADX General",
                                            options: {
                                                index_proname: "ADX:FADGI",
                                            },
                                        },
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${(event) => console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-select-field", DevSelectField);

export default document.createElement("dev-select-field");

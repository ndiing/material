import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Akan", value: "ak" },
    { label: "Albanian", value: "sq" },
    { label: "Amharic", value: "am" },
    { label: "Arabic", value: "ar" },
    { label: "Armenian", value: "hy" },
    { label: "Assamese", value: "as" },
    { label: "Aymara", value: "ay" },
    { label: "Azerbaijani", value: "az" },
    { label: "Bambara", value: "bm" },
    { label: "Bangla", value: "bn" },
    { label: "Basque", value: "eu" },
    { label: "Belarusian", value: "be" },
    { label: "Bhojpuri", value: "bho" },
    { label: "Bosnian", value: "bs" },
    { label: "Bulgarian", value: "bg" },
    { label: "Burmese", value: "my" },
    { label: "Catalan", value: "ca" },
    { label: "Cebuano", value: "ceb" },
    { label: "Central Kurdish", value: "ckb" },
    { label: "Chinese (Simplified)", value: "zh-CN" },
    { label: "Chinese (Traditional)", value: "zh-TW" },
    { label: "Corsican", value: "co" },
    { label: "Croatian", value: "hr" },
    { label: "Czech", value: "cs" },
    { label: "Danish", value: "da" },
    { label: "Divehi", value: "dv" },
    { label: "Dogri", value: "doi" },
    { label: "Dutch", value: "nl" },
    { label: "English", value: "en" },
    { label: "Esperanto", value: "eo" },
    { label: "Estonian", value: "et" },
    { label: "Ewe", value: "ee" },
    { label: "Filipino", value: "fil" },
    { label: "Finnish", value: "fi" },
    { label: "French", value: "fr" },
    { label: "Galician", value: "gl" },
    { label: "Ganda", value: "lg" },
    { label: "Georgian", value: "ka" },
    { label: "German", value: "de" },
    { label: "Goan Konkani", value: "gom" },
    { label: "Greek", value: "el" },
    { label: "Guarani", value: "gn" },
    { label: "Gujarati", value: "gu" },
    { label: "Haitian Creole", value: "ht" },
    { label: "Hausa", value: "ha" },
    { label: "Hawaiian", value: "haw" },
    { label: "Hebrew", value: "he" },
    { label: "Hindi", value: "hi" },
    { label: "Hmong", value: "hmn" },
    { label: "Hungarian", value: "hu" },
    { label: "Icelandic", value: "is" },
    { label: "Igbo", value: "ig" },
    { label: "Iloko", value: "ilo" },
    { label: "Indonesian", value: "id" },
    { label: "Irish", value: "ga" },
    { label: "Italian", value: "it" },
    { label: "Japanese", value: "ja" },
    { label: "Javanese", value: "jv" },
    { label: "Kannada", value: "kn" },
    { label: "Kazakh", value: "kk" },
    { label: "Khmer", value: "km" },
    { label: "Kinyarwanda", value: "rw" },
    { label: "Korean", value: "ko" },
    { label: "Krio", value: "kri" },
    { label: "Kurdish", value: "ku" },
    { label: "Kyrgyz", value: "ky" },
    { label: "Lao", value: "lo" },
    { label: "Latin", value: "la" },
    { label: "Latvian", value: "lv" },
    { label: "Lingala", value: "ln" },
    { label: "Lithuanian", value: "lt" },
    { label: "Luxembourgish", value: "lb" },
    { label: "Macedonian", value: "mk" },
    { label: "Maithili", value: "mai" },
    { label: "Malagasy", value: "mg" },
    { label: "Malay", value: "ms" },
    { label: "Malayalam", value: "ml" },
    { label: "Maltese", value: "mt" },
    { label: "Manipuri (Meitei Mayek)", value: "mni" },
    { label: "Māori", value: "mi" },
    { label: "Marathi", value: "mr" },
    { label: "Mizo", value: "lus" },
    { label: "Mongolian", value: "mn" },
    { label: "Nepali", value: "ne" },
    { label: "Northern Sotho", value: "nso" },
    { label: "Norwegian", value: "no" },
    { label: "Nyanja", value: "ny" },
    { label: "Odia", value: "or" },
    { label: "Oromo", value: "om" },
    { label: "Pashto", value: "ps" },
    { label: "Persian", value: "fa" },
    { label: "Polish", value: "pl" },
    { label: "Portuguese", value: "pt" },
    { label: "Punjabi", value: "pa" },
    { label: "Quechua", value: "qu" },
    { label: "Romanian", value: "ro" },
    { label: "Russian", value: "ru" },
    { label: "Samoan", value: "sm" },
    { label: "Sanskrit", value: "sa" },
    { label: "Scottish Gaelic", value: "gd" },
    { label: "Serbian", value: "sr" },
    { label: "Shona", value: "sn" },
    { label: "Sindhi", value: "sd" },
    { label: "Sinhala", value: "si" },
    { label: "Slovak", value: "sk" },
    { label: "Slovenian", value: "sl" },
    { label: "Somali", value: "so" },
    { label: "Southern Sotho", value: "st" },
    { label: "Spanish", value: "es" },
    { label: "Sundanese", value: "su" },
    { label: "Swahili", value: "sw" },
    { label: "Swedish", value: "sv" },
    { label: "Tajik", value: "tg" },
    { label: "Tamil", value: "ta" },
    { label: "Tatar", value: "tt" },
    { label: "Telugu", value: "te" },
    { label: "Thai", value: "th" },
    { label: "Tigrinya", value: "ti" },
    { label: "Tsonga", value: "ts" },
    { label: "Turkish", value: "tr" },
    { label: "Turkmen", value: "tk" },
    { label: "Ukrainian", value: "uk" },
    { label: "Urdu", value: "ur" },
    { label: "Uyghur", value: "ug" },
    { label: "Uzbek", value: "uz" },
    { label: "Vietnamese", value: "vi" },
    { label: "Welsh", value: "cy" },
    { label: "Western Frisian", value: "fy" },
    { label: "Xhosa", value: "xh" },
    { label: "Yiddish", value: "yi" },
    { label: "Yoruba", value: "yo" },
    { label: "Zulu", value: "zu" }
  ];
const options2=JSON.parse(JSON.stringify(options))
options2[17].selected=true
const options3=JSON.parse(JSON.stringify(options))
const options4=JSON.parse(JSON.stringify(options))
options4[17].selected=true
  

class DevSelectField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-low);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                            
                                <md-select-field
                                    name="select3"
                                    map='{"label":"label","value":"value"}'
                                    label="Only Select"
                                    readOnly
                                    .options="${options3}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select4"
                                    map='{"label":"label","value":"value"}'
                                    label="Only Select"
                                    readOnly
                                    .options="${options4}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div style="height:400px;" class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select"
                                    map='{"label":"label","value":"value"}'
                                    label="Select"
                                    .options="${options}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select2"
                                    map='{"label":"label","value":"value"}'
                                    label="Select"
                                    .options="${options2}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
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

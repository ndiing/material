import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevCard extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                variant="elevated"
                                leadingActions='[{"icon":"image"}]'
                                label="label"
                                subLabel="subLabel"
                                trailingActions='[{"icon":"image"}]'
                                actions='[{"label":"label","icon":"image"}]'
                                @onCardIconButtonClick="${console.log}"
                                @onCardIconClick="${console.log}"
                                @onCardButtonClick="${console.log}"
                                @onCardFabClick="${console.log}"
                                @onCardTextFieldNativeFocus="${console.log}"
                                @onCardTextFieldNativeBlur="${console.log}"
                                @onCardTextFieldNativeInput="${console.log}"
                                @onCardTextFieldNativeSearch="${console.log}"
                                @onCardTextFieldNativeInvalid="${console.log}"
                                @onCardTextFieldNativeReset="${console.log}"
                                @onCardTextFieldIconButtonClick="${console.log}"
                                @onCardPaginationChange="${console.log}"
                                @onCardPaginationLimitChange="${console.log}"
                                @onCardPaginationFirstClick="${console.log}"
                                @onCardPaginationPrevClick="${console.log}"
                                @onCardPaginationNextClick="${console.log}"
                                @onCardPaginationLastClick="${console.log}"
                            ></md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                variant="filled"
                                leadingActions='[{"icon":"image"}]'
                                label="label"
                                subLabel="subLabel"
                                trailingActions='[{"icon":"image"}]'
                                actions='[{"label":"label","icon":"image"}]'
                                @onCardIconButtonClick="${console.log}"
                                @onCardIconClick="${console.log}"
                                @onCardButtonClick="${console.log}"
                                @onCardFabClick="${console.log}"
                                @onCardTextFieldNativeFocus="${console.log}"
                                @onCardTextFieldNativeBlur="${console.log}"
                                @onCardTextFieldNativeInput="${console.log}"
                                @onCardTextFieldNativeSearch="${console.log}"
                                @onCardTextFieldNativeInvalid="${console.log}"
                                @onCardTextFieldNativeReset="${console.log}"
                                @onCardTextFieldIconButtonClick="${console.log}"
                                @onCardPaginationChange="${console.log}"
                                @onCardPaginationLimitChange="${console.log}"
                                @onCardPaginationFirstClick="${console.log}"
                                @onCardPaginationPrevClick="${console.log}"
                                @onCardPaginationNextClick="${console.log}"
                                @onCardPaginationLastClick="${console.log}"
                            ></md-card>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                variant="outlined"
                                leadingActions='[{"icon":"image"}]'
                                label="label"
                                subLabel="subLabel"
                                trailingActions='[{"icon":"image"}]'
                                actions='[{"label":"label","icon":"image"}]'
                                @onCardIconButtonClick="${console.log}"
                                @onCardIconClick="${console.log}"
                                @onCardButtonClick="${console.log}"
                                @onCardFabClick="${console.log}"
                                @onCardTextFieldNativeFocus="${console.log}"
                                @onCardTextFieldNativeBlur="${console.log}"
                                @onCardTextFieldNativeInput="${console.log}"
                                @onCardTextFieldNativeSearch="${console.log}"
                                @onCardTextFieldNativeInvalid="${console.log}"
                                @onCardTextFieldNativeReset="${console.log}"
                                @onCardTextFieldIconButtonClick="${console.log}"
                                @onCardPaginationChange="${console.log}"
                                @onCardPaginationLimitChange="${console.log}"
                                @onCardPaginationFirstClick="${console.log}"
                                @onCardPaginationPrevClick="${console.log}"
                                @onCardPaginationNextClick="${console.log}"
                                @onCardPaginationLastClick="${console.log}"
                            ></md-card>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-card", DevCard);

export default document.createElement("dev-card");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";

class DevExample extends MDComponent {
    render() {
        return html`
            <!-- <div style="margin:0;min-height:0;min-height:0;height:100%;width:100%;" class="md-layout-border">
                <div style="margin:0;min-height:0;min-height:0;height:100%;width:100%;" class="md-layout-border__item md-layout-border__item--center"> -->
                    <!-- <md-form
                        @onFormNativeReset="${event=>console.log(event)}"
                        @onFormNativeSubmit="${event=>console.log(event.detail.data)}"
                    > -->
                        <div class="md-layout-column">

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>attribute-observer</p>
                                <md-attribute-observer
                                ></md-attribute-observer>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>badge</p>
                                <md-badge
                                    label="label"
                                    limit="10"
                                ></md-badge>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>bottom-app-bar</p>
                                <md-bottom-app-bar
                                ></md-bottom-app-bar>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>bottom-sheet</p>
                                <md-bottom-sheet
                                ></md-bottom-sheet>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>button</p>
                                <md-button
                                    variant="elevated"
                                    !type=""
                                    icon="image"
                                    label="label"
                                ></md-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>button - filled</p>
                                <md-button
                                    variant="filled"
                                    !type=""
                                    icon="image"
                                    label="label"
                                ></md-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>button - tonal</p>
                                <md-button
                                    variant="tonal"
                                    !type=""
                                    icon="image"
                                    label="label"
                                ></md-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>button - outlined</p>
                                <md-button
                                    variant="outlined"
                                    !type=""
                                    icon="image"
                                    label="label"
                                ></md-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>button - icon-right</p>
                                <md-button
                                    variant="icon-right"
                                    !type=""
                                    icon="image"
                                    label="label"
                                ></md-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>card</p>
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
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>card - filled</p>
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
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>card - outlined</p>
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

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>checkbox</p>
                                <md-checkbox
                                    !name=""
                                    !value=""
                                    indeterminate
                                    checked
                                    @onCheckboxNativeInput="${console.log}"
                                    @onCheckboxNativeReset="${console.log}"
                                ></md-checkbox>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>chip</p>
                                <md-chip
                                    variant="assist"
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    icon="image"
                                    label="label"
                                    action="image"
                                    @onChipActionClick="${console.log}"
                                ></md-chip>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>chip - filter</p>
                                <md-chip
                                    variant="filter"
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    icon="image"
                                    label="label"
                                    action="image"
                                    @onChipActionClick="${console.log}"
                                ></md-chip>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>chip - input</p>
                                <md-chip
                                    variant="input"
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    icon="image"
                                    label="label"
                                    action="image"
                                    @onChipActionClick="${console.log}"
                                ></md-chip>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>chip - suggestion</p>
                                <md-chip
                                    variant="suggestion"
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    icon="image"
                                    label="label"
                                    action="image"
                                    @onChipActionClick="${console.log}"
                                ></md-chip>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>chips</p>
                                <md-chips
                                    list='[]'
                                    multiSelection
                                    @onChipClick="${console.log}"
                                ></md-chips>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>color</p>
                                <md-color
                                ></md-color>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>color-field</p>
                                <md-color-field
                                ></md-color-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>color-picker</p>
                                <md-color-picker
                                    open
                                    style="position:relative;"
                                    !value=""
                                    @onColorPickerSelection="${console.log}"
                                    @onColorPickerGradientTrackPointerdown="${console.log}"
                                    @onColorPickerGradientTrackPointermove="${console.log}"
                                    @onColorPickerGradientTrackPointerup="${console.log}"
                                    @onColorPickerHueNativeInput="${console.log}"
                                    @onColorPickerOpacityNativeInput="${console.log}"
                                    @onColorPickerIconButtonClick="${console.log}"
                                    @onColorPickerButtonClick="${console.log}"
                                    @onColorPickerIconButtonPrevClick="${console.log}"
                                    @onColorPickerIconButtonNextClick="${console.log}"
                                    @onColorPickerButtonLabelClick="${console.log}"
                                    @onColorPickerButtonCancelClick="${console.log}"
                                    @onColorPickerButtonOkClick="${console.log}"
                                ></md-color-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>component</p>
                                <md-component
                                ></md-component>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>data-table-native-column</p>
                                <md-data-table-native-column
                                ></md-data-table-native-column>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>data-table</p>
                                <md-data-table
                                    columns='[]'
                                    rows='[]'
                                    stickyHeader
                                    checkboxSelection
                                    stickyCheckboxSelection
                                    rangeSelection
                                    multiSelection
                                    singleSelection
                                    allSelection
                                    @onDataTableViewportVirtualScroll="${console.log}"
                                    @onDataTableColumnCheckboxNativeInput="${console.log}"
                                    @onDataTableRowCheckboxNativeInput="${console.log}"
                                    @onDataTableRowClick="${console.log}"
                                    @handleDataTableKeydown="${console.log}"
                                    @onDataTableColumnResizeStart="${console.log}"
                                    @onDataTableColumnResize="${console.log}"
                                    @onDataTableColumnResizeEnd="${console.log}"
                                    @onDataTableColumnPointerenter="${console.log}"
                                    @onDataTableColumnPointerleave="${console.log}"
                                    @onDataTableColumnTap="${console.log}"
                                    @onDataTableTextFieldNativeSearch="${console.log}"
                                    @onDataTablePaginationChange="${console.log}"
                                    @onDataTableColumnDoubleTap="${console.log}"
                                    @onDataTableColumnResizeDoubleTap="${console.log}"
                                    @onDataTableColumnDragStart="${console.log}"
                                    @onDataTableColumnDrag="${console.log}"
                                    @onDataTableColumnDragEnd="${console.log}"
                                ></md-data-table>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>data-table-item</p>
                                <md-data-table-item
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    thumbnail="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    !video=""
                                    icon="image"
                                    label="label"
                                    subLabel="subLabel"
                                    !badge=""
                                    !text=""
                                    leadingCheckbox
                                    leadingRadioButton
                                    leadingSwitch
                                    trailingCheckbox
                                    trailingRadioButton
                                    trailingSwitch
                                    indeterminate
                                    sortable
                                    !sortableIcon=""
                                ></md-data-table-item>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>date-field</p>
                                <md-date-field
                                    value="1990-10-17"
                                ></md-date-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>date-picker</p>
                                <md-date-picker
                                    open
                                    style="position:relative;"
                                    value="1990-10-17"
                                    @onDatePickerSelection="${console.log}"
                                    @onDatePickerIconButtonPrevClick="${console.log}"
                                    @onDatePickerIconButtonNextClick="${console.log}"
                                    @onDatePickerButtonLabelClick="${console.log}"
                                    @onDatePickerButtonCancelClick="${console.log}"
                                    @onDatePickerButtonOkClick="${console.log}"
                                    @onDatePickerYearItemClick="${console.log}"
                                    @onDatePickerMonthItemClick="${console.log}"
                                    @onDatePickerDayItemClick="${console.log}"
                                ></md-date-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>datetime-field</p>
                                <md-datetime-field
                                    value="1990-10-17T20:30"
                                    value="20:30"
                                    value="1990-10-17"
                                ></md-datetime-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>datetime-picker</p>
                                <md-datetime-picker
                                    open
                                    style="position:relative;"
                                    value="1990-10-17T20:30"
                                    value="20:30"
                                    value="1990-10-17"
                                    @onDatetimePickerIconButtonClick="${console.log}"
                                    @onDatetimePickerButtonClick="${console.log}"
                                    @onDatetimePickerSelection="${console.log}"
                                    @onDatetimePickerIconButtonPrevClick="${console.log}"
                                    @onDatetimePickerIconButtonNextClick="${console.log}"
                                    @onDatetimePickerButtonLabelClick="${console.log}"
                                    @onDatetimePickerButtonCancelClick="${console.log}"
                                    @onDatetimePickerButtonOkClick="${console.log}"
                                    @onDatetimePickerYearItemClick="${console.log}"
                                    @onDatetimePickerMonthItemClick="${console.log}"
                                    @onDatetimePickerDayItemClick="${console.log}"
                                    @onDatetimePickerHourItemClick="${console.log}"
                                    @onDatetimePickerMinuteItemClick="${console.log}"
                                ></md-datetime-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>dialog</p>
                                <md-dialog
                                ></md-dialog>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>emoji</p>
                                <md-emoji
                                ></md-emoji>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>emoji-picker</p>
                                <md-emoji-picker
                                    open
                                    style="position:relative;"
                                    tabs='{}'
                                    rows='[]'
                                    @onEmojiPickerTabsItemClick="${console.log}"
                                    @onEmojiPickerViewportVirtualScroll="${console.log}"
                                    @onEmojiPickerTextFieldNativeInput="${console.log}"
                                    @onEmojiPickerGridColumnClick="${console.log}"
                                    @onEmojiPickerIconButtonClick="${console.log}"
                                    @onEmojiPickerButtonClick="${console.log}"
                                    @onEmojiPickerSelection="${console.log}"
                                    @onEmojiPickerIconButtonPrevClick="${console.log}"
                                    @onEmojiPickerIconButtonNextClick="${console.log}"
                                    @onEmojiPickerButtonLabelClick="${console.log}"
                                    @onEmojiPickerButtonCancelClick="${console.log}"
                                    @onEmojiPickerButtonOkClick="${console.log}"
                                ></md-emoji-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab</p>
                                <md-fab
                                    variant="small"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - large</p>
                                <md-fab
                                    variant="large"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - surface</p>
                                <md-fab
                                    variant="surface"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - secondary</p>
                                <md-fab
                                    variant="secondary"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - tertiary</p>
                                <md-fab
                                    variant="tertiary"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - unelevated</p>
                                <md-fab
                                    variant="unelevated"
                                    icon="image"
                                ></md-fab>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>fab - extended</p>
                                <md-fab
                                    variant="extended"
                                    icon="image"
                                    label="label"
                                ></md-fab>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>form</p>
                                <md-form
                                    !acceptCharset=""
                                    action="image"
                                    !autocomplete=""
                                    !enctype=""
                                    !method=""
                                    !name=""
                                    novalidate
                                    !target=""
                                    @onFormNativeReset="${console.log}"
                                    @onFormNativeSubmit="${console.log}"
                                ></md-form>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>functions</p>
                                <md-functions
                                ></md-functions>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>gesture</p>
                                <md-gesture
                                    @onDragStart="${console.log}"
                                    @onResizeStart="${console.log}"
                                    @onSelectionStart="${console.log}"
                                    @onLongPress="${console.log}"
                                    @onDrag="${console.log}"
                                    @onResize="${console.log}"
                                    @onSelection="${console.log}"
                                    @onTap="${console.log}"
                                    @onDoubleTap="${console.log}"
                                    @onSelectionEnd="${console.log}"
                                    @onDragEnd="${console.log}"
                                    @onResizeEnd="${console.log}"
                                ></md-gesture>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>icon</p>
                                <md-icon
                                ></md-icon>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>icon-button</p>
                                <md-icon-button
                                    variant="filled"
                                    icon="image"
                                    !name=""
                                    @onIconButtonClick="${console.log}"
                                ></md-icon-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>icon-button - tonal</p>
                                <md-icon-button
                                    variant="tonal"
                                    icon="image"
                                    !name=""
                                    @onIconButtonClick="${console.log}"
                                ></md-icon-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>icon-button - outlined</p>
                                <md-icon-button
                                    variant="outlined"
                                    icon="image"
                                    !name=""
                                    @onIconButtonClick="${console.log}"
                                ></md-icon-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>icon-button - toggle</p>
                                <md-icon-button
                                    variant="toggle"
                                    icon="image"
                                    !name=""
                                    @onIconButtonClick="${console.log}"
                                ></md-icon-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>image</p>
                                <md-image
                                    src="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    alt="alt"
                                    !loading=""
                                    !ratio=""
                                    variant="rounded"
                                    @onImageNativeLoad="${console.log}"
                                    @onImageNativeError="${console.log}"
                                ></md-image>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>list</p>
                                <md-list
                                    list='[]'
                                    map='{"label":"label","value":"value"}'
                                    !format=""
                                    selection
                                    rangeSelection
                                    multiSelection
                                    singleSelection
                                    allSelection
                                    @onListItemClick="${console.log}"
                                    @handleListKeydown="${console.log}"
                                    @onListItemSelectionStart="${console.log}"
                                    @onListItemSelection="${console.log}"
                                    @onListItemSelectionEnd="${console.log}"
                                    @onListItemCheckboxNativeInput="${console.log}"
                                    @onListItemRadioButtonNativeInput="${console.log}"
                                    @onListItemSwitchNativeInput="${console.log}"
                                ></md-list>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>list-item</p>
                                <md-list-item
                                    avatar="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    thumbnail="https://api.dicebear.com/9.x/micah/svg?seed=Abby"
                                    !video=""
                                    icon="image"
                                    label="label"
                                    subLabel="subLabel"
                                    !badge=""
                                    !text=""
                                    leadingCheckbox
                                    leadingRadioButton
                                    leadingSwitch
                                    trailingCheckbox
                                    trailingRadioButton
                                    trailingSwitch
                                    activated
                                    @onListItemSelected="${console.log}"
                                ></md-list-item>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>localization</p>
                                <md-localization
                                ></md-localization>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>markdown</p>
                                <md-markdown
                                    !href=""
                                    !text=""
                                ></md-markdown>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>material</p>
                                <md-material
                                ></md-material>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>media-observer</p>
                                <md-media-observer
                                ></md-media-observer>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>menu</p>
                                <md-menu
                                    list='[]'
                                    map='{"label":"label","value":"value"}'
                                    !rowHeight=""
                                    !maxRows=""
                                    @onMenuViewportVirtualScroll="${console.log}"
                                    @onMenuViewportVirtualScrollInitialized="${console.log}"
                                    @onMenuListSelection="${console.log}"
                                    @onMenuListItemClick="${console.log}"
                                    @onMenuListItemEnter="${console.log}"
                                ></md-menu>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>month-field</p>
                                <md-month-field
                                    value="1990-10"
                                ></md-month-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>month-picker</p>
                                <md-month-picker
                                    open
                                    style="position:relative;"
                                    value="1990-10"
                                    @onMonthPickerSelection="${console.log}"
                                    @onMonthPickerIconButtonPrevClick="${console.log}"
                                    @onMonthPickerIconButtonNextClick="${console.log}"
                                    @onMonthPickerButtonLabelClick="${console.log}"
                                    @onMonthPickerButtonCancelClick="${console.log}"
                                    @onMonthPickerButtonOkClick="${console.log}"
                                    @onMonthPickerYearItemClick="${console.log}"
                                    @onMonthPickerMonthItemClick="${console.log}"
                                ></md-month-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>navigation-bar</p>
                                <md-navigation-bar
                                ></md-navigation-bar>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>navigation-drawer</p>
                                <md-navigation-drawer
                                ></md-navigation-drawer>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>navigation-rail</p>
                                <md-navigation-rail
                                ></md-navigation-rail>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>number-field</p>
                                <md-number-field
                                ></md-number-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>observer</p>
                                <md-observer
                                ></md-observer>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>pagination</p>
                                <md-pagination
                                    total="100"
                                    limit="10"
                                    page="1"
                                    options='[{"label":"10","value":10}]'
                                    @onPaginationChange="${console.log}"
                                    @onPaginationLimitChange="${console.log}"
                                    @onPaginationFirstClick="${console.log}"
                                    @onPaginationPrevClick="${console.log}"
                                    @onPaginationNextClick="${console.log}"
                                    @onPaginationLastClick="${console.log}"
                                ></md-pagination>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>password-field</p>
                                <md-password-field
                                ></md-password-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>popper</p>
                                <md-popper
                                ></md-popper>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>progress</p>
                                <md-progress
                                ></md-progress>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>progress-indicator</p>
                                <md-progress-indicator
                                    variant="circular"
                                    !value=""
                                    !max=""
                                ></md-progress-indicator>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>progress-indicator - linear</p>
                                <md-progress-indicator
                                    variant="linear"
                                    !value=""
                                    !max=""
                                ></md-progress-indicator>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>radio-button</p>
                                <md-radio-button
                                    !name=""
                                    !value=""
                                    indeterminate
                                    checked
                                    @onRadioButtonNativeInput="${console.log}"
                                    @onRadioButtonNativeReset="${console.log}"
                                ></md-radio-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>ripple</p>
                                <md-ripple
                                ></md-ripple>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>router</p>
                                <md-router
                                    @onRouterCurrentEntryChange="${console.log}"
                                    @onRouterNavigate="${console.log}"
                                    @onRouterNavigateError="${console.log}"
                                    @onRouterNavigateSuccess="${console.log}"
                                ></md-router>
                            </div>

                            <!-- <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>scrim</p>
                                <md-scrim
                                ></md-scrim>
                            </div> -->

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>search-field</p>
                                <md-search-field
                                ></md-search-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>segmented-button</p>
                                <md-segmented-button
                                    buttons='[]'
                                    singleSelection
                                    multiSelection
                                    @onSegmentedButtonItemClick="${console.log}"
                                ></md-segmented-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>select-field</p>
                                <md-select-field
                                    options='[{"label":"10","value":10}]'
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>sheet</p>
                                <md-sheet
                                    open
                                    @onSheetScrimClick="${console.log}"
                                    @onSheetShow="${console.log}"
                                    @onSheetClose="${console.log}"
                                ></md-sheet>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>sheet - east</p>
                                <md-sheet
                                    open
                                    @onSheetScrimClick="${console.log}"
                                    @onSheetShow="${console.log}"
                                    @onSheetClose="${console.log}"
                                ></md-sheet>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>sheet - south</p>
                                <md-sheet
                                    open
                                    @onSheetScrimClick="${console.log}"
                                    @onSheetShow="${console.log}"
                                    @onSheetClose="${console.log}"
                                ></md-sheet>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>sheet - west</p>
                                <md-sheet
                                    open
                                    @onSheetScrimClick="${console.log}"
                                    @onSheetShow="${console.log}"
                                    @onSheetClose="${console.log}"
                                ></md-sheet>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>sheet - modal</p>
                                <md-sheet
                                    open
                                    @onSheetScrimClick="${console.log}"
                                    @onSheetShow="${console.log}"
                                    @onSheetClose="${console.log}"
                                ></md-sheet>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>side-sheet</p>
                                <md-side-sheet
                                ></md-side-sheet>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>slider</p>
                                <md-slider
                                    !name=""
                                    !min=""
                                    !max=""
                                    !step=""
                                    !autocomplete=""
                                    @onSliderNativeInput="${console.log}"
                                    @onSliderNativeReset="${console.log}"
                                ></md-slider>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>snackbar</p>
                                <md-snackbar
                                    @onSnackbarShow="${console.log}"
                                    @onSnackbarClose="${console.log}"
                                ></md-snackbar>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>store</p>
                                <md-store
                                ></md-store>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>switch</p>
                                <md-switch
                                    !name=""
                                    !value=""
                                    indeterminate
                                    checked
                                    !icons=""
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tabs</p>
                                <md-tabs
                                ></md-tabs>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tabs - secondary</p>
                                <md-tabs
                                ></md-tabs>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>text-field</p>
                                <md-text-field
                                    label="label"
                                    icon="image"
                                    !prefix=""
                                    !suffix=""
                                    actions='[{"label":"label","icon":"image"}]'
                                    !text=""
                                    !type=""
                                    !placeholder=""
                                    !name=""
                                    !value=""
                                    !min=""
                                    !max=""
                                    !cols=""
                                    rows='[]'
                                    !minLength=""
                                    !maxLength=""
                                    !pattern=""
                                    required
                                    readOnly
                                    !autocomplete=""
                                    multiple
                                    options='[{"label":"10","value":10}]'
                                    !validationMessage
                                    !focused
                                    variant="filled"
                                    @onTextFieldNativeInvalid="${console.log}"
                                    @onTextFieldNativeReset="${console.log}"
                                    @onTextFieldNativeInput="${console.log}"
                                    @onTextFieldNativeSearch="${console.log}"
                                    @onTextFieldNativeKeydown="${console.log}"
                                    @onTextFieldNativeClick="${console.log}"
                                    @onTextFieldNativeFocus="${console.log}"
                                    @onTextFieldNativeBlur="${console.log}"
                                    @onTextFieldLabelClick="${console.log}"
                                    @onTextFieldMetaClick="${console.log}"
                                    @onTextFieldActionClick="${console.log}"
                                    @onTextFieldIconButtonClick="${console.log}"
                                ></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>text-field - outlined</p>
                                <md-text-field
                                    label="label"
                                    icon="image"
                                    !prefix=""
                                    !suffix=""
                                    actions='[{"label":"label","icon":"image"}]'
                                    !text=""
                                    !type=""
                                    !placeholder=""
                                    !name=""
                                    !value=""
                                    !min=""
                                    !max=""
                                    !cols=""
                                    rows='[]'
                                    !minLength=""
                                    !maxLength=""
                                    !pattern=""
                                    required
                                    readOnly
                                    !autocomplete=""
                                    multiple
                                    options='[{"label":"10","value":10}]'
                                    !validationMessage
                                    !focused
                                    variant="outlined"
                                    @onTextFieldNativeInvalid="${console.log}"
                                    @onTextFieldNativeReset="${console.log}"
                                    @onTextFieldNativeInput="${console.log}"
                                    @onTextFieldNativeSearch="${console.log}"
                                    @onTextFieldNativeKeydown="${console.log}"
                                    @onTextFieldNativeClick="${console.log}"
                                    @onTextFieldNativeFocus="${console.log}"
                                    @onTextFieldNativeBlur="${console.log}"
                                    @onTextFieldLabelClick="${console.log}"
                                    @onTextFieldMetaClick="${console.log}"
                                    @onTextFieldActionClick="${console.log}"
                                    @onTextFieldIconButtonClick="${console.log}"
                                ></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>text-field - rounded</p>
                                <md-text-field
                                    label="label"
                                    icon="image"
                                    !prefix=""
                                    !suffix=""
                                    actions='[{"label":"label","icon":"image"}]'
                                    !text=""
                                    !type=""
                                    !placeholder=""
                                    !name=""
                                    !value=""
                                    !min=""
                                    !max=""
                                    !cols=""
                                    rows='[]'
                                    !minLength=""
                                    !maxLength=""
                                    !pattern=""
                                    required
                                    readOnly
                                    !autocomplete=""
                                    multiple
                                    options='[{"label":"10","value":10}]'
                                    !validationMessage
                                    !focused
                                    variant="rounded"
                                    @onTextFieldNativeInvalid="${console.log}"
                                    @onTextFieldNativeReset="${console.log}"
                                    @onTextFieldNativeInput="${console.log}"
                                    @onTextFieldNativeSearch="${console.log}"
                                    @onTextFieldNativeKeydown="${console.log}"
                                    @onTextFieldNativeClick="${console.log}"
                                    @onTextFieldNativeFocus="${console.log}"
                                    @onTextFieldNativeBlur="${console.log}"
                                    @onTextFieldLabelClick="${console.log}"
                                    @onTextFieldMetaClick="${console.log}"
                                    @onTextFieldActionClick="${console.log}"
                                    @onTextFieldIconButtonClick="${console.log}"
                                ></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>textarea-field</p>
                                <md-textarea-field
                                ></md-textarea-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>time-field</p>
                                <md-time-field
                                    value="20:30"
                                ></md-time-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>time-picker</p>
                                <md-time-picker
                                    open
                                    style="position:relative;"
                                    value="20:30"
                                    @onTimePickerSelection="${console.log}"
                                    @onTimePickerIconButtonPrevClick="${console.log}"
                                    @onTimePickerIconButtonNextClick="${console.log}"
                                    @onTimePickerButtonLabelClick="${console.log}"
                                    @onTimePickerButtonCancelClick="${console.log}"
                                    @onTimePickerButtonOkClick="${console.log}"
                                    @onTimePickerHourItemClick="${console.log}"
                                    @onTimePickerMinuteItemClick="${console.log}"
                                ></md-time-picker>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tooltip</p>
                                <md-tooltip
                                ></md-tooltip>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tooltip - rich</p>
                                <md-tooltip
                                ></md-tooltip>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>top-app-bar</p>
                                <md-top-app-bar
                                ></md-top-app-bar>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>top-app-bar - small</p>
                                <md-top-app-bar
                                ></md-top-app-bar>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>top-app-bar - medium</p>
                                <md-top-app-bar
                                ></md-top-app-bar>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>top-app-bar - large</p>
                                <md-top-app-bar
                                ></md-top-app-bar>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tree</p>
                                <md-tree
                                    list='[]'
                                    variant="plain"
                                    @onTreeItemClick="${console.log}"
                                ></md-tree>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tree - accordion</p>
                                <md-tree
                                    list='[]'
                                    variant="accordion"
                                    @onTreeItemClick="${console.log}"
                                ></md-tree>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tree - tree</p>
                                <md-tree
                                    list='[]'
                                    variant="tree"
                                    @onTreeItemClick="${console.log}"
                                ></md-tree>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tree - level</p>
                                <md-tree
                                    list='[]'
                                    variant="level"
                                    @onTreeItemClick="${console.log}"
                                ></md-tree>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>tree-item</p>
                                <md-tree-item
                                    icon="image"
                                    label="label"
                                    !badge=""
                                    !indent=""
                                    isNode
                                    expanded
                                    activated
                                    !variant=""
                                    isParent
                                    !nodeActions=""
                                    !nodeIcons=""
                                    !leafIcons=""
                                    @onTreeItemSelected="${console.log}"
                                ></md-tree-item>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>virtual</p>
                                <md-virtual
                                    @onVirtualScroll="${console.log}"
                                ></md-virtual>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>week-field</p>
                                <md-week-field
                                    value="1990-W42"
                                ></md-week-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <p>week-picker</p>
                                <md-week-picker
                                    open
                                    style="position:relative;"
                                    value="1990-W42"
                                    @onWeekPickerSelection="${console.log}"
                                    @onWeekPickerIconButtonPrevClick="${console.log}"
                                    @onWeekPickerIconButtonNextClick="${console.log}"
                                    @onWeekPickerButtonLabelClick="${console.log}"
                                    @onWeekPickerButtonCancelClick="${console.log}"
                                    @onWeekPickerButtonOkClick="${console.log}"
                                    @onWeekPickerYearItemClick="${console.log}"
                                    @onWeekPickerMonthItemClick="${console.log}"
                                    @onWeekPickerDayItemClick="${console.log}"
                                ></md-week-picker>
                            </div>


                            <!-- <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            
                            </div> -->
                        </div>
                    <!-- </md-form> -->
                <!-- </div>
            </div> -->
        `;
    }

    
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");

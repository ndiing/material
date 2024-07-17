renderDataGridItem(item) {
    /* prettier-ignore */
    return html`
        <md-data-grid-item
            .avatar="${ifDefined(item.avatar)}"
            .thumbnail="${ifDefined(item.thumbnail)}"
            .video="${ifDefined(item.video)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .badge="${ifDefined(item.badge)}"
            .text="${ifDefined(item.text)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .selected="${ifDefined(item.selected)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .activated="${ifDefined(item.activated)}"
            @onDataGridItemSelected="${ifDefined(item.onDataGridItemSelected)}"
        ></md-data-grid-item>
    `
}


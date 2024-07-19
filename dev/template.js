renderChip(item = {}) {
    return html`
        <md-chip
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .variant="${ifDefined(item.variant)}"
            .avatar="${ifDefined(item.avatar)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .action="${ifDefined(item.action)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onChipActionClick="${ifDefined(item.onChipActionClick)}"
        ></md-chip>
    `
}


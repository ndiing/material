renderIcon(item = {}) {
    return html`
        <md-icon
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
        ></md-icon>
    `
}


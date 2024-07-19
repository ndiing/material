renderPagination(item = {}) {
    return html`
        <md-pagination
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .total="${ifDefined(item.total)}"
            .limit="${ifDefined(item.limit)}"
            .page="${ifDefined(item.page)}"
            .label="${ifDefined(item.label)}"
            .options="${ifDefined(item.options)}"
            .text="${ifDefined(item.text)}"
            .firstPage="${ifDefined(item.firstPage)}"
            .prevPage="${ifDefined(item.prevPage)}"
            .nextPage="${ifDefined(item.nextPage)}"
            .lastPage="${ifDefined(item.lastPage)}"
            @onPaginationChange="${ifDefined(item.onPaginationChange)}"
            @onPaginationLimitChange="${ifDefined(item.onPaginationLimitChange)}"
            @onPaginationFirstClick="${ifDefined(item.onPaginationFirstClick)}"
            @onPaginationPrevClick="${ifDefined(item.onPaginationPrevClick)}"
            @onPaginationNextClick="${ifDefined(item.onPaginationNextClick)}"
            @onPaginationLastClick="${ifDefined(item.onPaginationLastClick)}"
        ></md-pagination>
    `
}


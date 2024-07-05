import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDGestureController } from "../../material/gesture/gesture.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

class DevGestureComponent extends MDComponent {
    constructor() {
        super();

        new MDGestureController(this, {
            containerSelector: "#card",
            updateStyle: true,
        });

        new MDGestureController(this, {
            containerSelector: "#card2",
            updateStyle: true,
            resize: [],
            drag: ["x"],
        });

        new MDGestureController(this, {
            containerSelector: "#card3",
            updateStyle: true,
            resize: [],
            drag: ["y"],
        });

        new MDGestureController(this, {
            containerSelector: "#card4",
            updateStyle: true,
            drag: [],
            resize: ["e", "w"],
        });

        new MDGestureController(this, {
            containerSelector: "#card5",
            updateStyle: true,
            drag: [],
            resize: ["s", "n"],
        });

        new MDGestureController(this, {
            containerSelector: "#card6",
            updateStyle: true,
            dragHandleSelector: '[name="drag_indicator"]',
        });

        new MDGestureController(this, {
            containerSelector: "#card7",
            updateStyle: true,
            dragAfterLongPress: true,
            resizeAfterLongPress: true,
        });

        new MDGestureController(this, {
            containerSelector: "#card8",
            updateStyle: true,
            selection: true,
            dragAfterLongPress: true,
            resizeAfterLongPress: true,
            selectionAfterLongPress: true,
            dragHandleSelector: '[name="drag_indicator"]',
        });
    }
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card"
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent}"
                        @onDrag="${this.handleCardEvent}"
                        @onDragEnd="${this.handleCardEvent}"
                        @onResizeStart="${this.handleCardEvent}"
                        @onResize="${this.handleCardEvent}"
                        @onResizeEnd="${this.handleCardEvent}"
                        @onLongPress="${this.handleCardEvent}"
                        @onTap="${this.handleCardEvent}"
                        @onDoubleTap="${this.handleCardEvent}"
                        @onSwipeTop="${this.handleCardEvent}"
                        @onSwipeRight="${this.handleCardEvent}"
                        @onSwipeBottom="${this.handleCardEvent}"
                        @onSwipeLeft="${this.handleCardEvent}"
                        @onSelectionStart="${this.handleCardEvent}"
                        @onSelection="${this.handleCardEvent}"
                        @onSelectionEnd="${this.handleCardEvent}"
                        >${unsafeHTML(this.cardLog)}</md-card
                    >
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card2"
                        label="no resize, drag only x"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card3"
                        label="no resize, drag only y"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card4"
                        label="no drag, resize only e/w"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card5"
                        label="no drag, resize only s/n"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card6"
                        label="drag handle"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card7"
                        label="drag/resize After Long Press"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card8"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent8}"
                        @onDrag="${this.handleCardEvent8}"
                        @onDragEnd="${this.handleCardEvent8}"
                        @onResizeStart="${this.handleCardEvent8}"
                        @onResize="${this.handleCardEvent8}"
                        @onResizeEnd="${this.handleCardEvent8}"
                        @onLongPress="${this.handleCardEvent8}"
                        @onTap="${this.handleCardEvent8}"
                        @onDoubleTap="${this.handleCardEvent8}"
                        @onSwipeTop="${this.handleCardEvent8}"
                        @onSwipeRight="${this.handleCardEvent8}"
                        @onSwipeBottom="${this.handleCardEvent8}"
                        @onSwipeLeft="${this.handleCardEvent8}"
                        @onSelectionStart="${this.handleCardEvent8}"
                        @onSelection="${this.handleCardEvent8}"
                        @onSelectionEnd="${this.handleCardEvent8}"
                        >${unsafeHTML(this.cardLog8)}</md-card
                    >
                </div>
            </div>
        `;
    }

    cardLog = "";

    handleCardEvent(event) {
        const inner = event.currentTarget.querySelector(".md-card__inner");
        this.cardLog += event.type + "<br>";
        this.requestUpdate();
        window.requestAnimationFrame(() => {
            inner.scrollTop = inner.scrollHeight;
        });
    }

    cardLog8 = "";

    handleCardEvent8(event) {
        const inner = event.currentTarget.querySelector(".md-card__inner");
        this.cardLog8 += event.type + "<br>";
        this.requestUpdate();
        window.requestAnimationFrame(() => {
            inner.scrollTop = inner.scrollHeight;
        });
    }
}

customElements.define("dev-gesture", DevGestureComponent);

export default document.createElement("dev-gesture");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { MDGestureController } from "../../material/material.js";

class DevGesture extends MDComponent {
    constructor() {
        super();

        this.gesture1 = new MDGestureController(this, {
            container: "#gesture1",
            updateStyle: true,
        });

        this.gesture2 = new MDGestureController(this, {
            container: "#gesture2",
            drag: [],
            updateStyle: true,
        });

        this.gesture3 = new MDGestureController(this, {
            container: "#gesture3",
            resize: [],
            updateStyle: true,
        });

        this.gesture4 = new MDGestureController(this, {
            container: "#gesture4",
            drag: [],
            resize: [],
            updateStyle: true,
        });

        this.gesture5 = new MDGestureController(this, {
            container: "#gesture5",
            resize: [],
            dragAfterLongPress:true,
            updateStyle: true,
        });

        this.gesture6 = new MDGestureController(this, {
            container: "#gesture6",
            drag: [],
            resizeAfterLongPress:true,
            updateStyle: true,
        });
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture1"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture1",
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture2"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture2",
                                        drag: [],
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture3"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture3",
                                        resize: [],
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture4"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture4",
                                        drag: [],
                                        resize: [],
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>
                        

                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture5"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture5",
                                        resize: [],
                                        dragAfterLongPress:true,
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card
                                id="gesture6"
                                style="width:224px;height:224px;"
                                @onTap="${event=>console.log(event.type)}"
                                @onDoubleTap="${event=>console.log(event.type)}"
                                @onLongPress="${event=>console.log(event.type)}"
                                @onSwipeLeft="${event=>console.log(event.type)}"
                                @onSwipeRight="${event=>console.log(event.type)}"
                                @onSwipeTop="${event=>console.log(event.type)}"
                                @onSwipeBottom="${event=>console.log(event.type)}"
                                @onDragStart="${event=>console.log(event.type)}"
                                @onDrag="${event=>console.log(event.type)}"
                                @onDragEnd="${event=>console.log(event.type)}"
                                @onResizeStart="${event=>console.log(event.type)}"
                                @onResize="${event=>console.log(event.type)}"
                                @onResizeEnd="${event=>console.log(event.type)}"
                                @onSelectionStart="${event=>console.log(event.type)}"
                                @onSelection="${event=>console.log(event.type)}"
                                @onSelectionEnd="${event=>console.log(event.type)}"
                                .childNodes_="${JSON.stringify(
                                    {
                                        container: "#gesture6",
                                        drag: [],
                                        resizeAfterLongPress:true,
                                        updateStyle: true,
                                    },
                                    null,
                                    4,
                                )}"
                            ></md-card>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-gesture", DevGesture);

export default document.createElement("dev-gesture");

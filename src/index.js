import "./material/material.scss";
import "./demo/demo.scss";
import "./docs/docs.scss";

import "./material/material.js";
import { Router } from "./material/router/router";

import { Progress } from "./material/progress/progress.js";
import { setTheme } from "./material/color/color.js";

import DemoRoutes from "./demo/demo.js";
import DocsRoutes from "./docs/docs.js";

const component = document.createElement("div");
component.textContent = "i'm empty without you";

const routes = [
    DemoRoutes,
    DocsRoutes,
    {
        path: "*",
        component,
    },
];
Router.use(routes);

const progress = new Progress();

const fetch = window.fetch;
window.fetch = async function () {
    performance.mark("mark-fetch-1");
    const res = await fetch(arguments);
    performance.mark("mark-fetch-2");
    performance.measure("measure-fetch-1", "mark-fetch-1", "mark-fetch-2");
    performance.clearMarks("mark-fetch-1");
    performance.clearMarks("mark-fetch-2");
    performance.clearMeasures("measure-fetch-1");
    return res;
};

const observer = new PerformanceObserver((entries) => {
    entries.getEntries().forEach((entry) => progress.start(entry.duration));
});
observer.observe({
    entryTypes: PerformanceObserver.supportedEntryTypes,
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}
setTheme(getRandomHexColor());

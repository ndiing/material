// This example code is intended for demonstration purposes only.
// It may not follow best coding practices.
// It is recommended to use better coding approaches for production use.

import "./material/material.scss";
import "./app/app.scss";
import "./demo/demo.scss";
import "./docs/docs.scss";

import "./material/material.js";
import { Router } from "./material/router/router";
import { Progress } from "./material/progress/progress.js";
import { setTheme } from "./material/color/color.js";
import AppRoutes from "./app/app.js";

const routes = [AppRoutes];
Router.use(routes);

function demoProgress() {
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
}

function demoTheme() {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")}`;
    }
    setTheme(getRandomHexColor());
}

// demoProgress();
// demoTheme();

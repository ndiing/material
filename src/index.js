// This example code is intended for demonstration purposes only.
// It may not follow best coding practices.
// It is recommended to use better coding approaches for production use.

import "./material/material.scss";
import "./material/material.js";

import { Router } from "./material/router/router";
import { Progress } from "./material/progress/progress.js";
import { setTheme } from "./material/color/color.js";
import { Scheme } from "./material/scheme/scheme.js";

import "./app/app.scss";
import AppRoutes from "./app/app.js";

const routes = [AppRoutes];
Router.use(routes);

{
    const progress = new Progress();
    const observer = new PerformanceObserver((entries) => {
        entries.getEntries().forEach((entry) => progress.start(entry.duration));
    });
    observer.observe({
        entryTypes: PerformanceObserver.supportedEntryTypes,
    });
}

{
    const scheme = new Scheme(() => {
        setTheme(
            `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0")}`,
        );
    });
    scheme.init();
}

// This example code is intended for demonstration purposes only.
// It may not follow best coding practices.
// It is recommended to use better coding approaches for production use.
import "./material/material.scss";
import "./material/material.js";
import { Router } from "./material/router/router";
import "./app/app.scss";
import AppRoutes from "./app/app.js";
const routes = [AppRoutes];
Router.use(routes);

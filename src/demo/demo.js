import { Router } from "../material/core/router.js";
import { routes } from "./routes.js";

const router = new Router(routes, {
    historyApiFallback: true,
});
router.listen();

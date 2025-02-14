"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
/**
 * @fires Router#onRouterCurrentEntryChange
 * @fires Router#onRouterNavigate
 * @fires Router#onRouterNavigateError
 * @fires Router#onRouterNavigateSuccess
 */
var Router = /** @class */ (function () {
    function Router() {
    }
    /**
     * @static
     * @param {String} [pathname=this.pathname]
     * @param {String} [routes=this.routes]
     * @param {String} [parent=null]
     * @param {Array} [result=[]]
     */
    Router.get = function (pathname, routes, parent, result) {
        var _a, _b;
        if (pathname === void 0) { pathname = this.pathname; }
        if (routes === void 0) { routes = this.routes; }
        if (parent === void 0) { parent = null; }
        if (result === void 0) { result = []; }
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (!route.regexp) {
                route.parent = parent;
                route.pathname = (((_a = parent === null || parent === void 0 ? void 0 : parent.pathname) !== null && _a !== void 0 ? _a : "") + "/" + route.path).replace(/\/+/g, "/");
                route.regexp = new RegExp("^" + route.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            }
            var matches = pathname.match(route.regexp);
            if (matches) {
                this.params = __assign({}, matches === null || matches === void 0 ? void 0 : matches.groups);
                return __spreadArray(__spreadArray([], result, true), [route], false);
            }
            if ((_b = route === null || route === void 0 ? void 0 : route.children) === null || _b === void 0 ? void 0 : _b.length) {
                var matches_1 = this.get(pathname, route.children, route, __spreadArray(__spreadArray([], result, true), [route], false));
                if (matches_1)
                    return matches_1;
            }
        }
    };
    Object.defineProperty(Router, "pathname", {
        /**
         * @static
         * @readonly
         */
        get: function () {
            if (this.options.historyApiFallback) {
                return window.location.pathname;
            }
            else {
                return window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @static
     * @async
     * @param {Object} [event]
     */
    Router.handleNavigation = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var routes, _i, _a, route, error_1, container, outlet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        performance.mark("mark-1");
                        this.emit("onRouterCurrentEntryChange");
                        this.setController();
                        routes = this.get();
                        this.emit("onRouterNavigate");
                        _i = 0, _a = routes !== null && routes !== void 0 ? routes : [];
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        route = _a[_i];
                        if (!route.beforeLoad) return [3 /*break*/, 5];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.handleBeforeLoad(route)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        this.emit("onRouterNavigateError");
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this.loadComponent(route)];
                    case 6:
                        _b.sent();
                        container = this.setContainer(route);
                        return [4 /*yield*/, this.getOutlet(container, route)];
                    case 7:
                        outlet = _b.sent();
                        this.renderComponent(route, outlet);
                        this.removeComponent(routes);
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9:
                        performance.mark("mark-2");
                        performance.measure("measure-1", "mark-1", "mark-2");
                        performance.clearMarks("mark-1");
                        performance.clearMarks("mark-2");
                        performance.clearMeasures("measure-1");
                        this.emit("onRouterNavigateSuccess");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @static
     * @param {String} [routes]
     */
    Router.removeComponent = function (routes) {
        var outlets = Array.from(document.body.querySelectorAll("md-outlet"));
        var _loop_1 = function (outlet) {
            var element = outlet.nextElementSibling;
            while (element) {
                if (!outlets.find(function (outlet) { return outlet === element; }) && !routes.find(function (route) { return route.component === element; })) {
                    element.remove();
                }
                element = element.nextElementSibling;
            }
        };
        for (var _i = 0, outlets_1 = outlets; _i < outlets_1.length; _i++) {
            var outlet = outlets_1[_i];
            _loop_1(outlet);
        }
    };
    /**
     * @static
     * @param {String} [route]
     * @param {String} [outlet]
     */
    Router.renderComponent = function (route, outlet) {
        if (!route.component.isConnected)
            outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    };
    /**
     * @static
     * @async
     * @param {String} [container]
     * @param {String} [route]
     */
    Router.getOutlet = function (container, route) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            var observer;
                            var outlet;
                            var selector = "md-outlet:not([name])";
                            var target = container;
                            if (route.outlet) {
                                selector = "md-outlet[name=\"".concat(route.outlet, "\"]");
                                target = document.body;
                            }
                            var callback = function () {
                                outlet = target.querySelector(selector);
                                if (outlet) {
                                    if (observer)
                                        observer.disconnect();
                                    resolve(outlet);
                                }
                            };
                            observer = new MutationObserver(callback);
                            observer.observe(target, {
                                subtree: true,
                                childList: true,
                            });
                            callback();
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @static
     * @param {String} [route]
     */
    Router.setContainer = function (route) {
        var _a;
        return ((_a = route.parent) === null || _a === void 0 ? void 0 : _a.component) || document.body;
    };
    /**
     * @static
     * @async
     * @param {String} [route]
     */
    Router.loadComponent = function (route) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!route.component) return [3 /*break*/, 2];
                        _a = route;
                        return [4 /*yield*/, route.load()];
                    case 1:
                        _a.component = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @static
     * @async
     * @param {String} [route]
     */
    Router.handleBeforeLoad = function (route) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var callback = function (error) {
                                if (error)
                                    reject(error);
                                else
                                    resolve();
                            };
                            _this.controller.signal.addEventListener("abort", callback);
                            route.beforeLoad(callback);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @static
     */
    Router.setController = function () {
        if (this.controller && !this.controller.signal.aborted)
            this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted))
            this.controller = new AbortController();
    };
    /**
     * @static
     * @param {String} [url]
     */
    Router.navigate = function (url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, "", url);
        }
        else {
            window.location.hash = url;
        }
    };
    /**
     * @static
     * @param {Object} [event]
     */
    Router.handleNavigate = function (event) {
        var element = event.target.closest("[routerLink]");
        if (element) {
            var url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    };
    /**
     * @static
     * @param {String} [type]
     * @param {String} [detail]
     */
    Router.emit = function (type, detail) {
        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail: detail,
        });
        window.dispatchEvent(event);
    };
    /**
     * @static
     * @param {Array} [routes=[]]
     * @param {Object} [options={}]
     */
    Router.use = function (routes, options) {
        if (routes === void 0) { routes = []; }
        if (options === void 0) { options = {}; }
        this.routes = routes;
        this.options = __assign({ historyApiFallback: false }, options);
        window.addEventListener("load", this.handleNavigation.bind(this));
        if (this.options.historyApiFallback) {
            window.addEventListener("popstate", this.handleNavigation.bind(this));
            var pushState_1 = window.history.pushState;
            /**
             */
            window.history.pushState = function () {
                pushState_1.apply(this, arguments);
                Router.emit("popstate");
            };
        }
        else {
            window.addEventListener("hashchange", this.handleNavigation.bind(this));
        }
        window.addEventListener("click", this.handleNavigate.bind(this));
    };
    Router.params = {};
    Router.routes = [];
    Router.options = {};
    return Router;
}());
exports.Router = Router;

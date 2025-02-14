"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdDataTableComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var style_map_js_1 = require("lit/directives/style-map.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var store_1 = require("../store/store");
/**
 * @extends MdComponent
 * @element md-data-table
 * @fires MdDataTableComponent#onDataTableKeydown
 * @fires MdDataTableComponent#onDataTableHeaderCellClick
 * @fires MdDataTableComponent#onDataTableBodyCellClick
 * @fires MdDataTableComponent#onDataTableHeaderCheckboxClick
 * @fires MdDataTableComponent#onDataTableBodyClick
 * @fires MdDataTableComponent#onDataTableBodyCheckboxClick
 */
var MdDataTableComponent = /** @class */ (function (_super) {
    __extends(MdDataTableComponent, _super);
    /**
     */
    function MdDataTableComponent() {
        var _this = _super.call(this) || this;
        _this.headers = [];
        _this.bodies = [];
        _this.footers = [];
        _this.data = [];
        _this.storeData = [];
        _this.store = new store_1.Store();
        return _this;
    }
    /**
     * @param {String} [th]
     */
    MdDataTableComponent.prototype.styleDataTableHeaderCell = function (th) {
        return __assign({ position: "sticky", top: 0, "z-index": 2 }, (th.sticky && {
            position: "sticky",
            left: 0,
            "z-index": 3,
        }));
    };
    /**
     * @param {String} [td]
     */
    MdDataTableComponent.prototype.styleDataTableBodyCell = function (td) {
        return __assign({}, (td.sticky && {
            position: "sticky",
            left: 0,
            "z-index": 1,
        }));
    };
    Object.defineProperty(MdDataTableComponent.prototype, "checkboxData", {
        /**
         * @readonly
         */
        get: function () {
            if (this.checkbox) {
                return [{ checkbox: true, sticky: true }];
            }
            return [];
        },
        enumerable: false,
        configurable: true
    });
    /**
     */
    MdDataTableComponent.prototype.render = function () {
        var _this = this;
        return (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <table class=\"md-data-table__native\">\n                <thead>\n                    ", "\n                </thead>\n                ", "\n                <tfoot>\n                    ", "\n                </tfoot>\n            </table>\n        "], ["\n            <table class=\"md-data-table__native\">\n                <thead>\n                    ", "\n                </thead>\n                ", "\n                <tfoot>\n                    ", "\n                </tfoot>\n            </table>\n        "])), this.headers.map(function (tr) { return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                            <tr>\n                                ", "\n                            </tr>\n                        "], ["\n                            <tr>\n                                ", "\n                            </tr>\n                        "])), _this.checkboxData.concat(tr).map(function (th) { return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                        <th\n                                            .data=\"", "\"\n                                            style=\"", "\"\n                                            @click=\"", "\"\n                                        >\n                                            <md-data-table-cell\n                                                .label=\"", "\"\n                                                .checkbox=\"", "\"\n                                                .indeterminate=\"", "\"\n                                                .checked=\"", "\"\n                                                .action=\"", "\"\n                                            >\n                                            </md-data-table-cell>\n                                        </th>\n                                    "], ["\n                                        <th\n                                            .data=\"", "\"\n                                            style=\"", "\"\n                                            @click=\"", "\"\n                                        >\n                                            <md-data-table-cell\n                                                .label=\"", "\"\n                                                .checkbox=\"", "\"\n                                                .indeterminate=\"", "\"\n                                                .checked=\"", "\"\n                                                .action=\"", "\"\n                                            >\n                                            </md-data-table-cell>\n                                        </th>\n                                    "])), th, (0, style_map_js_1.styleMap)(_this.styleDataTableHeaderCell(th)), th.checkbox ? _this.handleDataTableHeaderCheckboxClick : _this.handleDataTableHeaderCellClick, th.label, th.checkbox, _this.indeterminate, _this.checked, th.action || (th.sortable && " ")); })); }), this.storeData.map(function (item) { return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                        <tbody\n                            .data=\"", "\"\n                            ?selected=\"", "\"\n                            @click=\"", "\"\n                        >\n                            ", "\n                        </tbody>\n                    "], ["\n                        <tbody\n                            .data=\"", "\"\n                            ?selected=\"", "\"\n                            @click=\"", "\"\n                        >\n                            ", "\n                        </tbody>\n                    "])), item, item.selected, _this.handleDataTableBodyClick, _this.bodies.map(function (tr) { return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                                    <tr>\n                                        ", "\n                                    </tr>\n                                "], ["\n                                    <tr>\n                                        ", "\n                                    </tr>\n                                "])), _this.checkboxData.concat(tr).map(function (td) { return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                                                <td\n                                                    .data=\"", "\"\n                                                    style=\"", "\"\n                                                    @click=\"", "\"\n                                                >\n                                                    <md-data-table-cell\n                                                        .label=\"", "\"\n                                                        .checkbox=\"", "\"\n                                                        .indeterminate=\"", "\"\n                                                        .checked=\"", "\"\n                                                    >\n                                                    </md-data-table-cell>\n                                                </td>\n                                            "], ["\n                                                <td\n                                                    .data=\"", "\"\n                                                    style=\"", "\"\n                                                    @click=\"", "\"\n                                                >\n                                                    <md-data-table-cell\n                                                        .label=\"", "\"\n                                                        .checkbox=\"", "\"\n                                                        .indeterminate=\"", "\"\n                                                        .checked=\"", "\"\n                                                    >\n                                                    </md-data-table-cell>\n                                                </td>\n                                            "])), td, (0, style_map_js_1.styleMap)(_this.styleDataTableBodyCell(td)), td.checkbox ? _this.handleDataTableBodyCheckboxClick : _this.handleDataTableBodyCellClick, item[td.name], td.checkbox, item.indeterminate, item.selected); })); })); }), this.footers.map(function (tr) { return (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                            <tr>\n                                ", "\n                            </tr>\n                        "], ["\n                            <tr>\n                                ", "\n                            </tr>\n                        "])), tr.map(function (td) { return (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                                        <td>\n                                            <md-data-table-cell .label=\"", "\"> </md-data-table-cell>\n                                        </td>\n                                    "], ["\n                                        <td>\n                                            <md-data-table-cell .label=\"", "\"> </md-data-table-cell>\n                                        </td>\n                                    "])), td.label); })); }));
    };
    /**
     */
    MdDataTableComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        window.addEventListener("keydown", this.handleDataTableKeydown);
    };
    /**
     */
    MdDataTableComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        window.removeEventListener("keydown", this.handleDataTableKeydown);
    };
    /**
     * @async
     * @param {String} [changedProperties]
     */
    MdDataTableComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (!changedProperties.has("data")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.store.load(this.data);
                        this.updateStore();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdDataTableComponent.prototype.updateStore = function () {
        var result = this.store.get({
            sorters: this.headers.flat().filter(function (item) { return item.order; }),
        });
        this.storeData = result.data;
        this.requestUpdate();
    };
    Object.defineProperty(MdDataTableComponent.prototype, "selected", {
        /**
         * @readonly
         */
        get: function () {
            return this.data.filter(function (item) { return item.selected; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDataTableComponent.prototype, "indeterminate", {
        /**
         * @readonly
         */
        get: function () {
            return this.selected.length && this.selected.length < this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdDataTableComponent.prototype, "checked", {
        /**
         * @readonly
         */
        get: function () {
            return this.selected.length && this.selected.length === this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableKeydown = function (event) {
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.data.forEach(function (item) {
                item.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableHeaderCellClick = function (event) {
        var data = event.currentTarget.data;
        if (data.sortable) {
            var actions = {
                undefined: "arrow_upward",
                asc: "arrow_downward",
                desc: undefined,
            };
            data.action = actions[data.order];
            var orders = {
                undefined: "asc",
                asc: "desc",
                desc: undefined,
            };
            data.order = orders[data.order];
            this.updateStore();
        }
        this.emit("onDataTableHeaderCellClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableBodyCellClick = function (event) {
        this.emit("onDataTableBodyCellClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableHeaderCheckboxClick = function (event) {
        var data = event.currentTarget.data;
        var selected = !this.checked || this.indeterminate;
        this.data.forEach(function (item) {
            item.selected = selected;
        });
        this.requestUpdate();
        this.emit("onDataTableHeaderCheckboxClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableBodyClick = function (event) {
        var _a, _b;
        var _this = this;
        var _c, _d;
        var bodyData = (_c = event.target.closest("td")) === null || _c === void 0 ? void 0 : _c.data;
        if (bodyData === null || bodyData === void 0 ? void 0 : bodyData.checkbox)
            return;
        var data = event.currentTarget.data;
        if (event.ctrlKey) {
            data.selected = !data.selected;
        }
        else if (event.shiftKey) {
            this.prevSelectedIndex = (_d = this.prevSelectedIndex) !== null && _d !== void 0 ? _d : 0;
            this.currentSelectedIndex = this.data.indexOf(data);
            this.swapSelectedIndex = this.prevSelectedIndex > this.currentSelectedIndex;
            if (this.swapSelectedIndex) {
                _a = [this.currentSelectedIndex, this.prevSelectedIndex], this.prevSelectedIndex = _a[0], this.currentSelectedIndex = _a[1];
            }
            this.data.forEach(function (item, index) {
                item.selected = index >= _this.prevSelectedIndex && index <= _this.currentSelectedIndex;
            });
            if (this.swapSelectedIndex) {
                _b = [this.prevSelectedIndex, this.currentSelectedIndex], this.currentSelectedIndex = _b[0], this.prevSelectedIndex = _b[1];
            }
        }
        else {
            this.data.forEach(function (item) {
                item.selected = item === data;
            });
            this.prevSelectedIndex = this.data.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onDataTableBodyClick", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdDataTableComponent.prototype.handleDataTableBodyCheckboxClick = function (event) {
        var data = event.currentTarget.data;
        var bodyData = event.target.closest("tbody").data;
        bodyData.selected = !bodyData.selected;
        this.requestUpdate();
        this.emit("onDataTableBodyCheckboxClick", { event: event });
    };
    /**
     * @property {Array} [headers]
     * @property {Array} [bodies]
     * @property {Array} [footers]
     * @property {Array} [data]
     * @property {Boolean} [checkbox]
     */
    MdDataTableComponent.properties = {
        headers: { type: Array },
        bodies: { type: Array },
        footers: { type: Array },
        data: { type: Array },
        checkbox: { type: Boolean },
    };
    return MdDataTableComponent;
}(component_1.MdComponent));
exports.MdDataTableComponent = MdDataTableComponent;
customElements.define("md-data-table", MdDataTableComponent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

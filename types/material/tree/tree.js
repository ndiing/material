"use strict";
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics = function (d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                        d.__proto__ = b;
                    }) ||
                function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    };
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while ((g && ((g = 0), op[0] && (_ = 0)), _))
                try {
                    if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdTreeComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var store_1 = require("../store/store");
/**
 * @extends MdComponent
 * @element md-tree
 * @fires MdTreeComponent#onTreeKeydownArrowDown
 * @fires MdTreeComponent#onTreeKeydownArrowUp
 * @fires MdTreeComponent#onTreeKeydownArrowRight
 * @fires MdTreeComponent#onTreeKeydownArrowLeft
 * @fires MdTreeComponent#onTreeKeydownEnter
 * @fires MdTreeComponent#onTreeKeydown
 * @fires MdTreeComponent#onTreeItemClick
 */
var MdTreeComponent = /** @class */ (function (_super) {
    __extends(MdTreeComponent, _super);
    /**
     */
    function MdTreeComponent() {
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.flatItems = [];
        _this.store = new store_1.Store();
        _this.storeItems = [];
        return _this;
    }
    /**
     * @param {String} [item]
     */
    MdTreeComponent.prototype.renderTreeItem = function (item) {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(['\n            <md-tree-row>\n                <md-tree-item\n                    .data="', '"\n                    .selected="', '"\n                    .expanded="', '"\n                    .indent="', '"\n                    .actions="', '"\n                    .nodeIcons="', '"\n                    .leafIcons="', '"\n                    .label="', '"\n                    .routerLink="', '"\n                    @click="', '"\n                ></md-tree-item>\n            </md-tree-row>\n        '], ['\n            <md-tree-row>\n                <md-tree-item\n                    .data="', '"\n                    .selected="', '"\n                    .expanded="', '"\n                    .indent="', '"\n                    .actions="', '"\n                    .nodeIcons="', '"\n                    .leafIcons="', '"\n                    .label="', '"\n                    .routerLink="', '"\n                    @click="', '"\n                ></md-tree-item>\n            </md-tree-row>\n        '])), item, (0, if_defined_js_1.ifDefined)(item.selected), (0, if_defined_js_1.ifDefined)(item.expanded), (0, if_defined_js_1.ifDefined)(item.indent), (0, if_defined_js_1.ifDefined)(item.actions), (0, if_defined_js_1.ifDefined)(item.nodeIcons), (0, if_defined_js_1.ifDefined)(item.leafIcons), (0, if_defined_js_1.ifDefined)(item.label), (0, if_defined_js_1.ifDefined)(item.routerLink), this.handleTreeItemClick);
    };
    /**
     */
    MdTreeComponent.prototype.render = function () {
        var _this = this;
        return this.storeItems
            .filter(function (item) {
                return item.visible;
            })
            .map(function (item) {
                return _this.renderTreeItem(item);
            });
    };
    /**
     */
    MdTreeComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-tree");
        this.handleTreeKeydown = this.handleTreeKeydown.bind(this);
        window.addEventListener("keydown", this.handleTreeKeydown);
    };
    /**
     * @async
     * @param {String} [changedProperties]
     */
    MdTreeComponent.prototype.updated = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (!changedProperties.has("items")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.flatItems = this.flatten(this.items).flatItems;
                        this.store.load(this.flatItems);
                        result = this.store.get();
                        this.storeItems = result.data;
                        this.requestUpdate();
                        _a.label = 2;
                    case 2:
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {String} [items]
     * @param {String} [parent]
     * @param {String} [indent=0]
     */
    MdTreeComponent.prototype.flatten = function (items, parent, indent) {
        var _this = this;
        if (indent === void 0) {
            indent = 0;
        }
        var expanded;
        var flatItems = [];
        items.forEach(function (item) {
            var _a;
            item.parent = parent;
            item.indent = indent;
            if (indent === 0) item.visible = true;
            if (item.expanded || item.selected) expanded = true;
            flatItems.push(item);
            if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) {
                var result = _this.flatten(item.children, item, indent + 1);
                if (result.expanded) {
                    expanded = result.expanded;
                    item.expanded = expanded;
                    _this.updateVisibility(item);
                }
                flatItems.push.apply(flatItems, result.flatItems);
            }
        });
        return { expanded: expanded, flatItems: flatItems };
    };
    /**
     * @param {String} [data]
     */
    MdTreeComponent.prototype.updateVisibility = function (data) {
        var _this = this;
        data.children.forEach(function (item) {
            var _a;
            item.visible = data.expanded;
            if (!data.visible) item.visible = data.visible;
            if ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) _this.updateVisibility(item);
        });
    };
    /**
     * @async
     * @param {String} [arg]
     */
    MdTreeComponent.prototype.updateScroll = function (arg) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        selectedElement = this.querySelector("md-tree-item[selected]");
                        selectedElement.focus();
                        selectedElement.scrollIntoView({
                            behavior: "instant",
                            block: "nearest",
                            inline: "nearest",
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydownArrowDown = function (event) {
        event.preventDefault();
        var visibleItems = this.storeItems.filter(function (item) {
            return item.visible;
        });
        var selectedIndex = visibleItems.findIndex(function (item) {
            return item.selected;
        });
        if (
            selectedIndex ===
            visibleItems.filter(function (item) {
                return item.visible;
            }).length -
                1
        )
            return;
        var nextItem = visibleItems.find(function (item, index) {
            return item.visible && index > selectedIndex;
        });
        visibleItems.forEach(function (item, index) {
            item.selected = item === nextItem;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onTreeKeydownArrowDown", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydownArrowUp = function (event) {
        event.preventDefault();
        var visibleItems = this.storeItems.filter(function (item) {
            return item.visible;
        });
        var selectedIndex = visibleItems.findLastIndex(function (item) {
            return item.selected;
        });
        if (selectedIndex === 0) return;
        var nextIndex = visibleItems.findLastIndex(function (item, index) {
            return item.visible && index < selectedIndex;
        });
        visibleItems.forEach(function (item, index) {
            item.selected = index === nextIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        this.emit("onTreeKeydownArrowUp", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydownArrowRight = function (event) {
        var _a;
        event.preventDefault();
        var selectedItem = this.storeItems.find(function (item) {
            return item.selected;
        });
        if ((_a = selectedItem.children) === null || _a === void 0 ? void 0 : _a.length) {
            selectedItem.expanded = true;
            this.updateVisibility(selectedItem);
            var visibleItems = this.storeItems.filter(function (item) {
                return item.visible;
            });
            var selectedIndex_1 = visibleItems.findIndex(function (item) {
                return item.selected;
            });
            if (
                selectedIndex_1 ===
                visibleItems.filter(function (item) {
                    return item.visible;
                }).length -
                    1
            )
                return;
            var nextIndex_1 = visibleItems.findIndex(function (item, index) {
                return item.visible && index > selectedIndex_1;
            });
            visibleItems.forEach(function (item, index) {
                item.selected = index === nextIndex_1;
            });
            this.requestUpdate();
            this.updateScroll();
        }
        this.emit("onTreeKeydownArrowRight", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydownArrowLeft = function (event) {
        event.preventDefault();
        var selectedItem = this.storeItems.find(function (item) {
            return item.selected;
        });
        if (selectedItem.expanded) {
            selectedItem.expanded = false;
            this.updateVisibility(selectedItem);
            this.requestUpdate();
            this.updateScroll();
        } else if (selectedItem.parent) {
            this.flatItems.forEach(function (item) {
                item.selected = item === selectedItem.parent;
            });
            this.requestUpdate();
            this.updateScroll();
        }
        this.emit("onTreeKeydownArrowLeft", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydownEnter = function (event) {
        event.preventDefault();
        var selectedElement = this.querySelector("md-tree-item[selected]");
        if (selectedElement) selectedElement.click();
        this.emit("onTreeKeydownEnter", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeKeydown = function (event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowLeft") return this.handleTreeKeydownArrowLeft(event);
            else if (event.key === "ArrowUp") return this.handleTreeKeydownArrowUp(event);
            else if (event.key === "ArrowRight") return this.handleTreeKeydownArrowRight(event);
            else if (event.key === "ArrowDown") return this.handleTreeKeydownArrowDown(event);
            else if (event.key === "Enter") return this.handleTreeKeydownEnter(event);
        }
        this.emit("onTreeKeydown", { event: event });
    };
    /**
     * @param {Object} [event]
     */
    MdTreeComponent.prototype.handleTreeItemClick = function (event) {
        var _a;
        var action = event.target.closest(".md-tree__action");
        var data = event.currentTarget.data;
        if (action && ((_a = data.children) === null || _a === void 0 ? void 0 : _a.length)) {
            data.expanded = !data.expanded;
            this.updateVisibility(data);
        }
        this.flatItems.forEach(function (item) {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onTreeItemClick", { event: event });
    };
    /**
     * @property {Array} [items]
     */
    MdTreeComponent.properties = {
        items: { type: Array },
    };
    return MdTreeComponent;
})(component_1.MdComponent);
exports.MdTreeComponent = MdTreeComponent;
customElements.define("md-tree", MdTreeComponent);
var templateObject_1;

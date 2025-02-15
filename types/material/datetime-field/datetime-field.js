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
exports.MdDatetimeFieldComponent = void 0;
var lit_1 = require("lit");
var component_1 = require("../component/component");
var text_field_1 = require("../text-field/text-field");
var util_1 = require("../util/util");
/**
 * @extends MdTextFieldComponent
 * @element md-datetime-field
 */
var MdDatetimeFieldComponent = /** @class */ (function (_super) {
    __extends(MdDatetimeFieldComponent, _super);
    /**
     */
    function MdDatetimeFieldComponent() {
        var _this = _super.call(this) || this;
        _this.type = "datetime-local";
        return _this;
    }
    Object.defineProperty(MdDatetimeFieldComponent.prototype, "trailingActions", {
        /**
         * @readonly
         */
        get: function () {
            var actions = [
                {
                    id: "calendar_clock",
                    component: "icon-button",
                    icon: "calendar_clock",
                },
            ];
            return actions;
        },
        enumerable: false,
        configurable: true
    });
    /**
     */
    MdDatetimeFieldComponent.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.classList.add("md-datetime-field");
    };
    /**
     */
    MdDatetimeFieldComponent.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removePicker();
    };
    /**
     * @async
     */
    MdDatetimeFieldComponent.prototype.createPicker = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.picker) return [3 /*break*/, 2];
                        this.picker = document.createElement("md-datetime-picker");
                        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
                        this.handleDatetimeFieldPickerButtonCancelClick = this.handleDatetimeFieldPickerButtonCancelClick.bind(this);
                        this.handleDatetimeFieldPickerButtonOkClick = this.handleDatetimeFieldPickerButtonOkClick.bind(this);
                        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
                        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
                        return [4 /*yield*/, this.picker.updateComplete];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    MdDatetimeFieldComponent.prototype.removePicker = function () {
        if (this.picker) {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimeFieldPickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimeFieldPickerButtonOkClick);
            this.picker.remove();
            this.picker = undefined;
        }
    };
    /**
     * @param {Any} [options={}]
     */
    MdDatetimeFieldComponent.prototype.showPicker = function (options) {
        if (options === void 0) { options = {}; }
        if (this.picker) {
            this.pickerWindow = (0, util_1.closestScrollableElement)(this);
            this.handleDatetimeFieldWindowClick = this.handleDatetimeFieldWindowClick.bind(this);
            this.handleDatetimeFieldWindowScroll = this.handleDatetimeFieldWindowScroll.bind(this);
            window.addEventListener("click", this.handleDatetimeFieldWindowClick);
            this.pickerWindow.addEventListener("scroll", this.handleDatetimeFieldWindowScroll);
            if (this.textFieldNative.value)
                this.picker.value = (0, util_1.parseDatetimeLocal)(this.textFieldNative.value);
            this.picker.show(options);
        }
    };
    /**
     */
    MdDatetimeFieldComponent.prototype.closePicker = function () {
        if (this.picker) {
            window.removeEventListener("click", this.handleDatetimeFieldWindowClick);
            this.pickerWindow.removeEventListener("scroll", this.handleDatetimeFieldWindowScroll);
            this.picker.close();
        }
    };
    /**
     * @param {Any} [options]
     */
    MdDatetimeFieldComponent.prototype.togglePicker = function (options) {
        if (this.picker) {
            if (this.picker.open)
                this.closePicker();
            else
                this.showPicker(options);
        }
    };
    /**
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleDatetimeFieldWindowClick = function (event) {
        var target = document.elementFromPoint(event.clientX, event.clientY);
        if (!this.pickerTrigger.contains(target) && !this.picker.contains(target)) {
            this.closePicker();
        }
    };
    /**
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleDatetimeFieldWindowScroll = function (event) {
        this.closePicker();
    };
    /**
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleDatetimeFieldPickerButtonCancelClick = function (event) {
        this.closePicker();
    };
    /**
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleDatetimeFieldPickerButtonOkClick = function (event) {
        this.textFieldNative.value = (0, util_1.stringifyDatetimeLocal)(this.picker.value);
        this.updateValue();
        this.closePicker();
    };
    /**
     * @async
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleTextFieldIconButtonPickerClick = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pickerTrigger = event.currentTarget;
                        return [4 /*yield*/, this.createPicker()];
                    case 1:
                        _a.sent();
                        this.togglePicker({ trigger: this.textFieldContainer });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {Any} [event]
     */
    MdDatetimeFieldComponent.prototype.handleTextFieldIconButtonClick = function (event) {
        var data = event.currentTarget.data;
        if (data.id === "calendar_clock")
            return this.handleTextFieldIconButtonPickerClick(event);
        _super.prototype.handleTextFieldIconButtonClick.call(this, event);
    };
    return MdDatetimeFieldComponent;
}(text_field_1.MdTextFieldComponent));
exports.MdDatetimeFieldComponent = MdDatetimeFieldComponent;
customElements.define("md-datetime-field", MdDatetimeFieldComponent);

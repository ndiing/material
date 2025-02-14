"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePosition = calculatePosition;
exports.setPosition = setPosition;
exports.parseOffset = parseOffset;
var util_1 = require("../util/util");
/**
 * @param {String} [placement]
 * @param {Object} [options={}]
 */
function calculatePosition(placement, options) {
    if (options === void 0) {
        options = {};
    }
    var containerRect = options.containerRect,
        triggerRect = options.triggerRect,
        offset = options.offset;
    var left = triggerRect.left,
        top = triggerRect.top,
        right = triggerRect.right,
        bottom = triggerRect.bottom,
        width = triggerRect.width,
        height = triggerRect.height;
    var cWidth = containerRect.width;
    var cHeight = containerRect.height;
    var positions = {
        "top-end": function () {
            return { left: right - cWidth, top: top - cHeight - offset.bottom };
        },
        top: function () {
            return { left: left - (cWidth - width) / 2, top: top - cHeight - offset.bottom };
        },
        "top-start": function () {
            return { left: left, top: top - cHeight - offset.bottom };
        },
        "top-right": function () {
            return { left: right + offset.left, top: top - cHeight - offset.bottom };
        },
        "right-end": function () {
            return { left: right + offset.left, top: bottom - cHeight };
        },
        right: function () {
            return { left: right + offset.left, top: top - (cHeight - height) / 2 };
        },
        "right-start": function () {
            return { left: right + offset.left, top: top };
        },
        "bottom-right": function () {
            return { left: right + offset.left, top: bottom + offset.top };
        },
        "bottom-start": function () {
            return { left: left, top: bottom + offset.top };
        },
        bottom: function () {
            return { left: left - (cWidth - width) / 2, top: bottom + offset.top };
        },
        "bottom-end": function () {
            return { left: right - cWidth, top: bottom + offset.top };
        },
        "bottom-left": function () {
            return { left: left - cWidth - offset.right, top: bottom + offset.top };
        },
        "left-start": function () {
            return { left: left - cWidth - offset.right, top: top };
        },
        left: function () {
            return { left: left - cWidth - offset.right, top: top - (cHeight - height) / 2 };
        },
        "left-end": function () {
            return { left: left - cWidth - offset.right, top: bottom - cHeight };
        },
        "top-left": function () {
            return { left: left - cWidth - offset.right, top: top - cHeight - offset.bottom };
        },
    };
    return (positions[placement] || positions.top)();
}
/**
 * @param {String} [offset]
 */
function parseOffset(offset) {
    var _a = String(offset).split(" ").map(Number),
        _b = _a[0],
        top = _b === void 0 ? 0 : _b,
        right = _a[1],
        bottom = _a[2],
        left = _a[3];
    right = right !== null && right !== void 0 ? right : top;
    bottom = bottom !== null && bottom !== void 0 ? bottom : top;
    left = left !== null && left !== void 0 ? left : right;
    return { top: top, right: right, bottom: bottom, left: left };
}
/**
 * @param {Object} [options={}]
 */
function setPosition(options) {
    if (options === void 0) {
        options = {};
    }
    var container = options.container,
        trigger = options.trigger,
        boundary = options.boundary,
        _a = options.offset,
        offset = _a === void 0 ? "0" : _a,
        placements = options.placements;
    var boundaryEl = boundary || (0, util_1.closestScrollableElement)(container);
    var parsedOffset = parseOffset(offset);
    var containerRect = container.getBoundingClientRect();
    var triggerRect = trigger.getBoundingClientRect();
    var boundaryRect = boundaryEl.getBoundingClientRect();
    var bestLeft = null,
        bestTop = null,
        minOverflow = Infinity;
    for (var _i = 0, placements_1 = placements; _i < placements_1.length; _i++) {
        var placement = placements_1[_i];
        var _b = calculatePosition(placement, { triggerRect: triggerRect, containerRect: containerRect, offset: parsedOffset }),
            left = _b.left,
            top_1 = _b.top;
        var right = left + containerRect.width;
        var bottom = top_1 + containerRect.height;
        var exceed = left < boundaryRect.left || top_1 < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;
        var totalOverflow = Math.max(boundaryRect.left - left, 0) + Math.max(top_1 - boundaryRect.top, 0) + Math.max(right - boundaryRect.right, 0) + Math.max(bottom - boundaryRect.bottom, 0);
        if (!exceed) {
            bestLeft = left;
            bestTop = top_1;
            break;
        } else if (totalOverflow < minOverflow) {
            minOverflow = totalOverflow;
            bestLeft = left;
            bestTop = top_1;
        }
    }
    bestLeft = Math.max(boundaryRect.left, Math.min(bestLeft, boundaryRect.right - containerRect.width));
    bestTop = Math.max(boundaryRect.top, Math.min(bestTop, boundaryRect.bottom - containerRect.height));
    container.style.left = "".concat(bestLeft, "px");
    container.style.top = "".concat(bestTop, "px");
}

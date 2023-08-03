"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWidget = void 0;
var TaskWidget = /** @class */ (function () {
    function TaskWidget(name, isReady, containerId) {
        this.name = name;
        this.isReady = isReady;
        this.containerId = containerId;
    }
    TaskWidget.prototype.inBold = function (s) {
        return "<b>".concat(s, "</b>");
    };
    TaskWidget.prototype.render = function () {
        return "\n        <li id=\"".concat(this.containerId, "\">").concat(this.isReady ? this.inBold(this.name) : this.name, "</li>");
    };
    return TaskWidget;
}());
exports.TaskWidget = TaskWidget;

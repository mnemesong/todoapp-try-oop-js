"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespWidget = void 0;
var RespWidget = /** @class */ (function () {
    function RespWidget(name, tasks, containerId) {
        this.name = name;
        this.tasks = tasks;
        this.containerId = containerId;
    }
    RespWidget.prototype.render = function () {
        return "\n        <ul id=\"".concat(this.containerId, "\">\n            <li><b>").concat(this.name, "</b></li>\n            <ul>").concat(this.tasks, "</ul>\n        </ul>");
    };
    return RespWidget;
}());
exports.RespWidget = RespWidget;

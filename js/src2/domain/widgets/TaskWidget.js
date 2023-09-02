"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWidget = void 0;
var TaskWidget = /** @class */ (function () {
    function TaskWidget(id, name, isReady) {
        this.id = id;
        this.name = name;
        this.isReady = isReady;
    }
    TaskWidget.prototype.getId = function () {
        return this.id;
    };
    TaskWidget.prototype.switched = function () {
        return new TaskWidget(this.id, this.name, !this.isReady);
    };
    TaskWidget.prototype.getName = function () {
        return this.name;
    };
    TaskWidget.prototype.inBold = function (s) {
        return "<b>".concat(s, "</b>");
    };
    TaskWidget.prototype.getContainerId = function () {
        return 'task-' + this.id;
    };
    TaskWidget.prototype.render = function () {
        return "\n        <li id=\"".concat(this.getContainerId(), "\">").concat(this.isReady ? this.inBold(this.name) : this.name, "</li>");
    };
    return TaskWidget;
}());
exports.TaskWidget = TaskWidget;

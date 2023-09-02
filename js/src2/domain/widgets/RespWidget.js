"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespWidget = void 0;
var RespWidget = /** @class */ (function () {
    function RespWidget(id, name, tasks) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }
    RespWidget.prototype.getId = function () {
        return this.id;
    };
    RespWidget.prototype.getName = function () {
        return this.name;
    };
    RespWidget.prototype.getContainerId = function () {
        return 'resp-' + this.id;
    };
    RespWidget.prototype.withName = function (name) {
        return new RespWidget(this.id, name, this.tasks);
    };
    RespWidget.prototype.addTask = function (task) {
        return new RespWidget(this.id, this.name, this.tasks.concat([task]));
    };
    RespWidget.prototype.hasTask = function (id) {
        return this.tasks.filter(function (el) { return el.getId() === id; }).length > 0;
    };
    RespWidget.prototype.switchTask = function (id) {
        this.tasks = this.tasks.map(function (el) { return (el.getId() === id)
            ? el.switched()
            : el; });
    };
    RespWidget.prototype.getTasks = function () {
        return this.tasks;
    };
    RespWidget.prototype.render = function () {
        return "\n        <ul id=\"".concat(this.getContainerId(), "\">\n            <li><b>").concat(this.name, "</b></li>\n            <ul>").concat(this.tasks.map(function (t) { return t.render(); }).join(''), "</ul>\n        </ul>");
    };
    return RespWidget;
}());
exports.RespWidget = RespWidget;

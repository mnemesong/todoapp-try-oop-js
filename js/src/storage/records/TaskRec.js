"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRec = void 0;
var TaskRec = /** @class */ (function () {
    function TaskRec(id, resId, name, ready, saver) {
        this.id = id;
        this.resId = resId;
        this.name = name;
        this.ready = ready;
        this.saver = saver;
    }
    TaskRec.prototype.getId = function () {
        return this.id;
    };
    TaskRec.prototype.getName = function () {
        return this.name;
    };
    TaskRec.prototype.getRespId = function () {
        return this.resId;
    };
    TaskRec.prototype.isReady = function () {
        return this.ready;
    };
    TaskRec.prototype.withSwitchedReady = function () {
        return new TaskRec(this.id, this.resId, this.name, !this.ready, this.saver);
    };
    TaskRec.prototype.save = function () {
        this.saver(this);
    };
    return TaskRec;
}());
exports.TaskRec = TaskRec;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
var TaskRec_1 = require("../records/TaskRec");
var uuid_1 = require("uuid");
var store = {};
var save = function (task) {
    store[task.getId()] = task;
};
var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    TaskManager.prototype.createNew = function (name, respId) {
        return new TaskRec_1.TaskRec((0, uuid_1.v4)(), respId, name, false, save);
    };
    TaskManager.prototype.getOne = function (id) {
        return store[id];
    };
    TaskManager.prototype.getManyByResId = function (resId) {
        return Object.values(store)
            .filter(function (el) { return (el.getRespId() === resId); });
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
var StateManager = /** @class */ (function () {
    function StateManager(form, resps) {
        this.form = form;
        this.resps = resps;
    }
    StateManager.prototype.updateFormName = function (name) {
        this.form.setName(name);
    };
    StateManager.prototype.getForm = function () {
        return this.form;
    };
    StateManager.prototype.getResps = function () {
        return this.resps;
    };
    StateManager.prototype.getRespByTaskId = function (taskId) {
        var result = this.resps.filter(function (el) { return el.hasTask(taskId); });
        if (!result[0]) {
            throw new Error("Can't find resp by taskId: " + taskId);
        }
        return result[0];
    };
    StateManager.prototype.getOneResp = function (id) {
        var result = this.resps.filter(function (el) { return el.getId() === id; });
        if (!result[0]) {
            throw new Error("Can't find resp with id: " + id);
        }
        return result[0];
    };
    StateManager.prototype.updateResp = function (resp) {
        if (this.resps.filter(function (r) { return r.getId() === resp.getId(); }).length === 0) {
            throw new Error("Invalid responsible widget resId");
        }
        this.resps = this.resps.map(function (el) { return (el.getId() === resp.getId())
            ? resp
            : el; });
    };
    StateManager.prototype.getRespsAsRecord = function () {
        var result = {};
        this.resps.forEach(function (el) {
            result[el.getId()] = el.getName();
        });
        return result;
    };
    return StateManager;
}());
exports.StateManager = StateManager;

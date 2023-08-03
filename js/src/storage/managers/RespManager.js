"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespManager = void 0;
var RespRec_1 = require("../records/RespRec");
var uuid_1 = require("uuid");
var store = {};
var save = function (r) {
    store[r.getId()] = r;
};
var RespManager = /** @class */ (function () {
    function RespManager(taskManager) {
        this.taskManager = taskManager;
    }
    RespManager.prototype.getAll = function () {
        return Object.values(store);
    };
    RespManager.prototype.create = function (name) {
        var _this = this;
        return new RespRec_1.RespRec((0, uuid_1.v4)(), name, save, function (resId) { return _this.taskManager.getManyByResId(resId); });
    };
    RespManager.prototype.isRespExist = function (id) {
        return Object.keys(store).includes(id);
    };
    RespManager.prototype.getDefault = function () {
        return store[Object.keys(store)[0]];
    };
    return RespManager;
}());
exports.RespManager = RespManager;

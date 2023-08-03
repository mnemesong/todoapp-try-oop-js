"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespRec = void 0;
var RespRec = /** @class */ (function () {
    function RespRec(id, name, saver, tasksRepo) {
        this.id = id;
        this.name = name;
        this.saver = saver;
        this.tasksRepo = tasksRepo;
    }
    RespRec.prototype.getId = function () {
        return this.id;
    };
    RespRec.prototype.getName = function () {
        return this.name;
    };
    RespRec.prototype.getTasks = function () {
        return this.tasksRepo(this.id);
    };
    RespRec.prototype.save = function () {
        this.saver(this);
    };
    return RespRec;
}());
exports.RespRec = RespRec;

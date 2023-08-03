"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRec = void 0;
var FormRec = /** @class */ (function () {
    function FormRec(name, resId, saver) {
        this.name = name;
        this.resId = resId;
        this.saver = saver;
    }
    FormRec.prototype.getName = function () {
        return this.name;
    };
    FormRec.prototype.getRespId = function () {
        return this.resId;
    };
    FormRec.prototype.withName = function (name) {
        return new FormRec(name, this.resId, this.saver);
    };
    FormRec.prototype.withRespId = function (id) {
        return new FormRec(this.name, id, this.saver);
    };
    FormRec.prototype.save = function () {
        this.saver(this);
    };
    return FormRec;
}());
exports.FormRec = FormRec;

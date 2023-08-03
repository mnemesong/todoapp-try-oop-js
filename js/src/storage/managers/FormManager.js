"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormManager = void 0;
var FormRec_1 = require("../records/FormRec");
var store = {
    f: (new FormRec_1.FormRec('', '', function (f) { store.f = f; }))
};
var save = function (f) { store.f = f; };
var FormManager = /** @class */ (function () {
    function FormManager() {
    }
    FormManager.prototype.getForm = function () {
        return store.f;
    };
    return FormManager;
}());
exports.FormManager = FormManager;

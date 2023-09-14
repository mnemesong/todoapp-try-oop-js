"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWidget = void 0;
var FormWidget = /** @class */ (function () {
    function FormWidget(resId, name) {
        this.resId = resId;
        this.name = name;
    }
    FormWidget.prototype.setName = function (name) {
        this.name = name;
    };
    FormWidget.prototype.renderSelected = function (k) {
        return (this.resId === k)
            ? ' selected'
            : '';
    };
    FormWidget.prototype.getResId = function () {
        return this.resId;
    };
    FormWidget.prototype.getName = function () {
        return this.name;
    };
    FormWidget.prototype.render = function (allResps) {
        var _this = this;
        var options = Object.keys(allResps)
            .map(function (k) { return "<option value=\"".concat(k, "\"").concat(_this.renderSelected(k), ">")
            + "".concat(allResps[k], "</option>"); });
        return /*html*/ "<div>\n            <input type=\"text\" id=\"".concat(FormWidget.formInputId, "\" value=\"").concat(this.name, "\">\n            <select id=\"").concat(FormWidget.formSelectId, "\">").concat(options, "</select>\n            <button id=\"").concat(FormWidget.submitBtnId, "\">Submit</button>\n        </div>");
    };
    FormWidget.formInputId = 'form-input';
    FormWidget.formSelectId = 'form-select-id';
    FormWidget.submitBtnId = 'submit-btn-id';
    return FormWidget;
}());
exports.FormWidget = FormWidget;

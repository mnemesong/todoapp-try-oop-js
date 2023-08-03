"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWidget = void 0;
var FormWidget = /** @class */ (function () {
    function FormWidget(name, resId, btnId, inputId, selectId, allResps) {
        this.name = name;
        this.resId = resId;
        this.btnId = btnId;
        this.inputId = inputId;
        this.selectId = selectId;
        this.allResps = allResps;
    }
    FormWidget.prototype.renderSelected = function (k) {
        return (this.resId === k)
            ? ' selected'
            : '';
    };
    FormWidget.prototype.render = function () {
        var _this = this;
        var options = Object.keys(this.allResps)
            .map(function (k) { return "<option value=\"".concat(k, "\"").concat(_this.renderSelected(k), ">")
            + "".concat(_this.allResps[k], "</option>"); });
        return "<div>\n            <input type=\"text\" id=\"".concat(this.inputId, "\" value=\"").concat(this.name, "\">\n            <select id=\"").concat(this.selectId, "\">").concat(options, "</select>\n            <button id=\"").concat(this.btnId, "\">Submit</button>\n        </div>");
    };
    return FormWidget;
}());
exports.FormWidget = FormWidget;

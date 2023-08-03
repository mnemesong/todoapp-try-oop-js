"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlModel = void 0;
var HtmlModel = /** @class */ (function () {
    function HtmlModel() {
    }
    HtmlModel.prototype.taskContainerId = function (taskId) {
        return 'task-cont-' + taskId;
    };
    HtmlModel.prototype.formInputId = function () { return 'form-input'; };
    HtmlModel.prototype.formSelectId = function () { return 'form-select'; };
    HtmlModel.prototype.formSubmitBtnId = function () { return 'form-submit'; };
    HtmlModel.prototype.respContainerid = function (respId) {
        return 'resp-cont-' + respId;
    };
    HtmlModel.prototype.attributeOfHtmlEl = function (selector, attrName) {
        try {
            var el = document.querySelector(selector);
            if (attrName === 'value') {
                return el.value;
            }
            else {
                el.getAttribute(attrName);
            }
        }
        catch (e) {
            return null;
        }
    };
    return HtmlModel;
}());
exports.HtmlModel = HtmlModel;

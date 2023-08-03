"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlModel = void 0;
var HtmlModel = /** @class */ (function () {
    function HtmlModel() {
    }
    HtmlModel.prototype.taskContainerId = function (taskId) {
        return 'task-cont-' + taskId;
    };
    HtmlModel.prototype.respContainerid = function (respId) {
        return 'resp-cont-' + respId;
    };
    HtmlModel.prototype.attributeOfHtmlEl = function (selector, attrName) {
        try {
            return document.querySelector(selector).getAttribute(attrName);
        }
        catch (e) {
            return null;
        }
    };
    return HtmlModel;
}());
exports.HtmlModel = HtmlModel;

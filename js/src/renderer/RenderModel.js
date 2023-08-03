"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderModel = void 0;
var RenderModel = /** @class */ (function () {
    function RenderModel() {
    }
    RenderModel.prototype.renderInFormHost = function (html) {
        document.querySelector('#form-host').innerHTML = html;
    };
    RenderModel.prototype.renderInRespsHost = function (html) {
        document.querySelector('#resps-host').innerHTML = html;
    };
    return RenderModel;
}());
exports.RenderModel = RenderModel;

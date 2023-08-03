"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
var EventModel = /** @class */ (function () {
    function EventModel() {
    }
    EventModel.prototype.setOnclickAction = function (host, action) {
        var el = document.querySelector(host);
        if (!!el) {
            el.onclick = function () { action(); };
        }
    };
    EventModel.prototype.setOnChangeAction = function (host, action) {
        var el = document.querySelector(host);
        if (!!el) {
            el.onchange = function () { action(); };
        }
    };
    return EventModel;
}());
exports.EventModel = EventModel;

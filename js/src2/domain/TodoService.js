"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var StateManager_1 = require("./models/StateManager");
var FormWidget_1 = require("./widgets/FormWidget");
var TaskWidget_1 = require("./widgets/TaskWidget");
var uuid_1 = require("uuid");
var TodoService = /** @class */ (function () {
    function TodoService(initData) {
        this.stateManager = new StateManager_1.StateManager(new FormWidget_1.FormWidget(initData[0].getId(), ''), initData);
    }
    TodoService.prototype.printFormHtml = function () {
        return this.stateManager.getForm().render(this.stateManager.getRespsAsRecord());
    };
    TodoService.prototype.printRespsHtml = function () {
        return this.stateManager.getResps()
            .map(function (r) { return r.render(); })
            .join();
    };
    TodoService.prototype.setFormName = function (name) {
        this.stateManager.getForm().setName(name);
    };
    TodoService.prototype.applyForm = function () {
        this.stateManager.updateResp(this.stateManager.getOneResp(this.stateManager.getForm().getResId()).addTask(new TaskWidget_1.TaskWidget((0, uuid_1.v4)(), this.stateManager.getForm().getName(), false)));
    };
    TodoService.prototype.switchTask = function (id) {
        var resp = this.stateManager.getRespByTaskId(id);
        resp.switchTask(id);
        this.stateManager.updateResp(resp);
    };
    TodoService.prototype.formInputSelector = function () {
        return '#' + FormWidget_1.FormWidget.formInputId;
    };
    TodoService.prototype.formBtnSelector = function () {
        return '#' + FormWidget_1.FormWidget.submitBtnId;
    };
    TodoService.prototype.getAllTaskSelectors = function () {
        var result = {};
        this.stateManager.getResps().forEach(function (r) {
            r.getTasks().forEach(function (t) {
                result[t.getId()] = '#' + t.getContainerId();
            });
        });
        return result;
    };
    return TodoService;
}());
exports.TodoService = TodoService;

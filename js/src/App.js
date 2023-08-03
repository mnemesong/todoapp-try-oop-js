"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var PlanTasksService_1 = require("./plan-tasks-domain/PlanTasksService");
var RenderTodoDomain_1 = require("./render-todo-domain/RenderTodoDomain");
var EventModel_1 = require("./renderer/EventModel");
var HtmlModel_1 = require("./renderer/HtmlModel");
var RenderModel_1 = require("./renderer/RenderModel");
var FormManager_1 = require("./storage/managers/FormManager");
var RespManager_1 = require("./storage/managers/RespManager");
var TaskManager_1 = require("./storage/managers/TaskManager");
var App = /** @class */ (function () {
    function App() {
        this.taskManager = new TaskManager_1.TaskManager();
        this.respManager = new RespManager_1.RespManager(this.taskManager);
        this.formManager = new FormManager_1.FormManager();
        this.eventModel = new EventModel_1.EventModel();
        this.htmlModel = new HtmlModel_1.HtmlModel();
        this.renderModel = new RenderModel_1.RenderModel();
        this.planTaskService = new PlanTasksService_1.PlanTaskService(this.formManager, this.respManager, this.taskManager);
        this.renderTodoService = new RenderTodoDomain_1.RenderTodoDomain(this.renderModel, this.eventModel, this.htmlModel, this.planTaskService, this.respManager, this.formManager);
    }
    App.prototype.init = function () {
        var res1 = this.respManager.create("Mary");
        var res2 = this.respManager.create("John");
        res1.save();
        res2.save();
        this.taskManager.createNew("Buy the milk", res1.getId()).save();
        this.taskManager.createNew("Buy the fish", res1.getId()).save();
        this.formManager.getForm().withRespId(res1.getId()).save();
        return this;
    };
    App.prototype.run = function () {
        this.renderTodoService.rerender();
    };
    return App;
}());
exports.App = App;

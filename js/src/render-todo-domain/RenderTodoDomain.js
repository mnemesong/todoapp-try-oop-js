"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderTodoDomain = void 0;
var FormWidget_1 = require("./widgets/FormWidget");
var RespWidget_1 = require("./widgets/RespWidget");
var TaskWidget_1 = require("./widgets/TaskWidget");
var RenderTodoDomain = /** @class */ (function () {
    function RenderTodoDomain(renderModel, eventModel, htmlModel, planTaskModel, respManager, formManager) {
        var _this = this;
        this.rerender = function () {
            _this.renderResps();
            _this.renderForm();
        };
        this.renderModel = renderModel;
        this.eventModel = eventModel;
        this.htmlModel = htmlModel;
        this.planTaskModel = planTaskModel;
        this.respManager = respManager;
        this.formManager = formManager;
    }
    RenderTodoDomain.prototype.renderForm = function () {
        var _this = this;
        var form = this.formManager.getForm();
        console.log(this.htmlModel);
        var formWidgetHtml = (new FormWidget_1.FormWidget(form.getName(), form.getRespId(), this.htmlModel.formSubmitBtnId(), this.htmlModel.formInputId(), this.htmlModel.formSelectId(), this.getResponsiblesRecord())).render();
        this.renderModel.renderInFormHost(formWidgetHtml);
        this.eventModel.setOnChangeAction('#' + this.htmlModel.formInputId(), function () {
            _this.formManager.getForm().withName(_this.htmlModel.attributeOfHtmlEl('#' + _this.htmlModel.formInputId(), 'value')).save();
            _this.rerender();
        });
        this.eventModel.setOnChangeAction('#' + this.htmlModel.formSelectId(), function () {
            _this.formManager.getForm().withRespId(_this.htmlModel.attributeOfHtmlEl('#' + _this.htmlModel.formSelectId(), 'value')).save();
            _this.rerender();
        });
        this.eventModel.setOnclickAction('#' + this.htmlModel.formSubmitBtnId(), function () {
            _this.planTaskModel.addTask();
            _this.rerender();
        });
    };
    RenderTodoDomain.prototype.renderResps = function () {
        var _this = this;
        var resps = this.respManager.getAll();
        var respWidgetsHtml = resps.map(function (r) { return (new RespWidget_1.RespWidget(r.getName(), r.getTasks().map(function (t) { return (new TaskWidget_1.TaskWidget(t.getName(), t.isReady(), _this.htmlModel.taskContainerId(t.getId()))).render(); }).join(''), _this.htmlModel.respContainerid(r.getId())).render()); }).join('');
        this.renderModel.renderInRespsHost(respWidgetsHtml);
        resps.forEach(function (r) { return r.getTasks().forEach(function (t) { return _this.eventModel.setOnclickAction('#' + _this.htmlModel.taskContainerId(t.getId()), function () {
            _this.planTaskModel.switchTask(t.getId());
            _this.rerender();
        }); }); });
    };
    RenderTodoDomain.prototype.getResponsiblesRecord = function () {
        var result = {};
        this.respManager.getAll().forEach(function (r) {
            result[r.getId()] = r.getName();
        });
        return result;
    };
    return RenderTodoDomain;
}());
exports.RenderTodoDomain = RenderTodoDomain;

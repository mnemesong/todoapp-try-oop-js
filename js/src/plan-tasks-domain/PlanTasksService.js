"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanTaskService = void 0;
var assert_1 = __importDefault(require("assert"));
var PlanTaskService = /** @class */ (function () {
    function PlanTaskService(formManag, respManag, taskMang) {
        var _this = this;
        this.addTask = function () {
            var form = _this.formManag.getForm();
            assert_1.default.ok(_this.checkForm(form));
            var task = _this.taskMang.createNew(form.getName(), form.getRespId());
            task.save();
            _this.resetForm(form).save();
        };
        this.switchTask = function (taskId) {
            var task = _this.taskMang.getOne(taskId);
            task.withSwitchedReady().save();
        };
        this.checkForm = function (form) {
            return _this.respManag.isRespExist(form.getRespId())
                && (form.getName().length > 0);
        };
        this.resetForm = function (form) {
            return form
                .withName("")
                .withRespId(_this.respManag.getDefault().getId());
        };
        this.formManag = formManag;
        this.respManag = respManag;
        this.taskMang = taskMang;
    }
    return PlanTaskService;
}());
exports.PlanTaskService = PlanTaskService;

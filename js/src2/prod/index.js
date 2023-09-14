"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoService_1 = require("../domain/TodoService");
var FormWidget_1 = require("../domain/widgets/FormWidget");
var RespWidget_1 = require("../domain/widgets/RespWidget");
var TaskWidget_1 = require("../domain/widgets/TaskWidget");
var StateManager_1 = require("./StateManager");
var initData = [
    new RespWidget_1.RespWidget('afda59c8-29f0-4795-93be-2d744d62b6ad', "Mary", [
        new TaskWidget_1.TaskWidget('18e53e29-787f-4696-9a00-34d8e9202ded', 'Groome the cat', false),
        new TaskWidget_1.TaskWidget('0d70fb23-ca9f-416e-aaa1-ee40ceae8045', 'Feed birds', true)
    ]),
    new RespWidget_1.RespWidget('0729e625-1f3c-49d3-90c2-8c9cf4a487d6', "Bob", [
        new TaskWidget_1.TaskWidget('59586d15-0604-49ca-90cc-32c116ffb66a', "Solve equation", false)
    ])
];
var stateManager = new StateManager_1.StateManager(new FormWidget_1.FormWidget(initData[0].getId(), ''), initData);
var todoService = new TodoService_1.TodoService(stateManager);
function querySelect(selector) {
    var htmlEl = document.querySelector(selector);
    if (!(htmlEl instanceof HTMLElement)) {
        throw new Error("Invalid HTML element '".concat(selector, "': ") + JSON.stringify(htmlEl));
    }
    return htmlEl;
}
function assertHtmlInput(htmlEl) {
    if (!(htmlEl instanceof HTMLInputElement)) {
        throw new Error("HTML element is not input: " + JSON.stringify(htmlEl));
    }
    return htmlEl;
}
function renderResps() {
    querySelect('#resps-host').innerHTML = todoService.printRespsHtml();
    var allTaskSelectors = todoService.getAllTaskSelectors();
    Object.keys(allTaskSelectors).forEach(function (id) {
        querySelect(allTaskSelectors[id]).onclick = function () {
            todoService.switchTask(id);
            renderResps();
        };
    });
}
function renderForm() {
    querySelect('#form-host').innerHTML = todoService.printFormHtml();
    querySelect(todoService.formBtnSelector()).onclick = function () {
        todoService.applyForm();
        renderForm();
        renderResps();
    };
    querySelect(todoService.formInputSelector()).onchange = function () {
        todoService.setFormName(assertHtmlInput(querySelect(todoService.formInputSelector())).value);
        renderForm();
    };
}
renderForm();
renderResps();

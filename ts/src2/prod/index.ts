import { TodoService } from "../domain/TodoService";
import { FormWidget } from "../domain/widgets/FormWidget";
import { RespWidget } from "../domain/widgets/RespWidget";
import { TaskWidget } from "../domain/widgets/TaskWidget";
import { StateManager } from "./StateManager";

const initData: RespWidget[] = [
    new RespWidget(
        'afda59c8-29f0-4795-93be-2d744d62b6ad',
        "Mary",
        [
            new TaskWidget(
                '18e53e29-787f-4696-9a00-34d8e9202ded',
                'Groome the cat',
                false
            ),
            new TaskWidget(
                '0d70fb23-ca9f-416e-aaa1-ee40ceae8045',
                'Feed birds',
                true
            )
        ]
    ),
    new RespWidget(
        '0729e625-1f3c-49d3-90c2-8c9cf4a487d6',
        "Bob",
        [
            new TaskWidget(
                '59586d15-0604-49ca-90cc-32c116ffb66a',
                "Solve equation",
                false
            )
        ]
    )
]

const stateManager = new StateManager(
    new FormWidget(
        initData[0].getId(),
        ''
    ),
    initData
)
const todoService = new TodoService( stateManager )

function querySelect(selector: string): HTMLElement {
    const htmlEl = document.querySelector(selector)
    if(!(htmlEl instanceof HTMLElement)) {
        throw new Error(`Invalid HTML element '${selector}': ` + JSON.stringify(htmlEl))
    }
    return htmlEl
}

function assertHtmlInput(htmlEl: HTMLElement): HTMLInputElement {
    if(!(htmlEl instanceof HTMLInputElement)) {
        throw new Error(`HTML element is not input: ` + JSON.stringify(htmlEl))
    }
    return htmlEl
}

function renderResps() {
    querySelect('#resps-host').innerHTML = todoService.printRespsHtml()
    const allTaskSelectors = todoService.getAllTaskSelectors()
    Object.keys(allTaskSelectors).forEach(id => {
        querySelect(allTaskSelectors[id]).onclick = () => {
            todoService.switchTask(id)
            renderResps()
        }
    })
}

function renderForm () {
    querySelect('#form-host').innerHTML = todoService.printFormHtml()
    querySelect(todoService.formBtnSelector()).onclick = () => {
        todoService.applyForm()
        renderForm()
        renderResps()
    }
    querySelect(todoService.formInputSelector()).onchange = () => {
        todoService.setFormName(assertHtmlInput(
            querySelect(todoService.formInputSelector())).value)
        renderForm()
    }
}

renderForm()
renderResps()
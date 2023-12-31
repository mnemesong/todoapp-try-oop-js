import { IStateManager } from "./models/IStateManager";
import { FormWidget } from "./widgets/FormWidget";
import { RespWidget } from "./widgets/RespWidget";
import { TaskWidget } from "./widgets/TaskWidget";
import { v4 as uuid} from "uuid"

export class TodoService {
    private stateManager: IStateManager

    public constructor(
        stateManager: IStateManager
    ) {
        this.stateManager = stateManager
    }

    public printFormHtml() {
        return this.stateManager.getForm().render(
            this.stateManager.getRespsAsRecord())
    }

    public printRespsHtml() {
        return this.stateManager.getResps()
        .map(r => r.render())
        .join()
    }

    public setFormName(name: string) {
        this.stateManager.getForm().setName(name)
    }

    public applyForm() {
        this.stateManager.updateResp(this.stateManager.getOneResp(
            this.stateManager.getForm().getResId()
        ).addTask(new TaskWidget(
            uuid(),
            this.stateManager.getForm().getName(),
            false
        )))
        this.stateManager.updateFormName("")
    }

    public switchTask(id: string) {
        const resp = this.stateManager.getRespByTaskId(id)
        resp.switchTask(id)
        this.stateManager.updateResp(resp)
    }

    public formInputSelector(): string {
        return '#' + FormWidget.formInputId
    }

    public formBtnSelector(): string {
        return '#' + FormWidget.submitBtnId
    }

    public getAllTaskSelectors(): Record<string, string> {
        const result = {};
        this.stateManager.getResps().forEach(r => {
            r.getTasks().forEach(t => {
                result[t.getId()] = '#' + t.getContainerId()
            })
        })
        return result
    }
}
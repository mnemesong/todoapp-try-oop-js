import { FormWidget } from "../domain/widgets/FormWidget";
import { RespWidget } from "../domain/widgets/RespWidget";
import { IStateManager } from "../domain/models/IStateManager";

export class StateManager implements IStateManager {
    private form: FormWidget
    private resps: RespWidget[]

    public constructor(
        form: FormWidget,
        resps: RespWidget[]
    ) {
        this.form = form
        this.resps = resps
    }

    public updateFormName(name: string) {
        this.form.setName(name)
    }

    public getForm() {
        return this.form
    }

    public getResps() {
        return this.resps
    }

    public getRespByTaskId(taskId: string) {
        const result = this.resps.filter(el => el.hasTask(taskId))
        if(!result[0]) {
            throw new Error("Can't find resp by taskId: " + taskId)
        }
        return result[0]
    }

    public getOneResp(id: string): RespWidget {
        const result = this.resps.filter(el => el.getId() === id)
        if(!result[0]) {
            throw new Error("Can't find resp with id: " + id)
        }
        return result[0]
    }
    
    updateResp(resp: RespWidget) {
        if(this.resps.filter(r => r.getId() === resp.getId()).length === 0) {
            throw new Error("Invalid responsible widget resId")
        }
        this.resps = this.resps.map(el => (el.getId() === resp.getId())
            ? resp
            : el)
    }
    
    public getRespsAsRecord(): Record<string, string> {
        const result = {}
        this.resps.forEach(el => {
            result[el.getId()] = el.getName()
        })
        return result
    }
}
import assert from "assert"
import { FormManagType } from "./managers/FormManagType"
import { RespManagType } from "./managers/RespManagType"
import { TaskManagType } from "./managers/TaskManagType"
import { FormRecType } from "./records/FormRecType"

export class PlanTaskService 
{
    private formManag: FormManagType
    private respManag: RespManagType
    private taskMang: TaskManagType

    constructor(
        formManag: FormManagType,
        respManag: RespManagType,
        taskMang: TaskManagType
    ) {
        this.formManag = formManag
        this.respManag = respManag
        this.taskMang = taskMang
    }

    public addTask = () => {
        const form = this.formManag.getForm()
        assert.ok(this.checkForm(form))
        const task = this.taskMang.createNew(form.getName(), form.getRespId())
        task.save()
        this.resetForm(form).save()
    }

    public switchTask = (taskId: string) => {
        const task = this.taskMang.getOne(taskId)
        task.withSwitchedReady().save()
    }

    private checkForm = (form: FormRecType): boolean => {
        return this.respManag.isRespExist(form.getRespId())
            && (form.getName().length > 0)
    }

    private resetForm = (form: FormRecType): FormRecType => {
        return form
            .withName("")
            .withRespId(this.respManag.getDefault().getId())
    }
}
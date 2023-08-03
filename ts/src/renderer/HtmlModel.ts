import { HtmlModelType } from "../render-todo-domain/models/HtmlModelType";

export class HtmlModel implements HtmlModelType
{
    public taskContainerId (taskId: string): string {
        return 'task-cont-' + taskId
    }

    public formInputId() { return 'form-input' }

    public formSelectId() {return 'form-select'}

    formSubmitBtnId() {return 'form-submit'}

    respContainerid (respId: string): string {
        return 'resp-cont-' + respId
    }

    attributeOfHtmlEl (selector: string, attrName: string): any {
        try {
            const el = document.querySelector(selector)
            if(attrName === 'value') {
                return (el as unknown as {value: string}).value
            } else {
                el.getAttribute(attrName)
            }
        } catch (e) {
            return null
        }
    }
}
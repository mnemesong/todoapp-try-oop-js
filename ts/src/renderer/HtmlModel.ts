import { HtmlModelType } from "../render-todo-domain/models/HtmlModelType";

export class HtmlModel implements HtmlModelType
{
    public taskContainerId (taskId: string): string {
        return 'task-cont-' + taskId
    }

    formInputId: () => 'form-input'

    formSelectId: () => 'form-select'

    formSubmitBtnId: () => 'form-submit'

    respContainerid (respId: string): string {
        return 'resp-cont-' + respId
    }

    attributeOfHtmlEl (selector: string, attrName: string): any {
        try {
            return document.querySelector(selector).getAttribute(attrName)
        } catch (e) {
            return null
        }
    }
}
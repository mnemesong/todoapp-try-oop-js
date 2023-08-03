import { HtmlModelType } from "../render-todo-domain/models/HtmlModelType";
export declare class HtmlModel implements HtmlModelType {
    taskContainerId(taskId: string): string;
    formInputId: () => 'form-input';
    formSelectId: () => 'form-select';
    formSubmitBtnId: () => 'form-submit';
    respContainerid(respId: string): string;
    attributeOfHtmlEl(selector: string, attrName: string): any;
}

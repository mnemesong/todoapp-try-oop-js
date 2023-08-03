import { HtmlModelType } from "../render-todo-domain/models/HtmlModelType";
export declare class HtmlModel implements HtmlModelType {
    taskContainerId(taskId: string): string;
    formInputId(): string;
    formSelectId(): string;
    formSubmitBtnId(): string;
    respContainerid(respId: string): string;
    attributeOfHtmlEl(selector: string, attrName: string): any;
}

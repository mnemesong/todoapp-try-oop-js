export type HtmlModelType = {
    taskContainerId: (taskId: string) => string

    respContainerid: (respId: string) => string

    formSubmitBtnId: () => string

    formInputId: () => string

    formSelectId: () => string

    attributeOfHtmlEl: (selector: string, attrName: string) => any
}
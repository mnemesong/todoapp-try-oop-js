export class FormWidget {
    private resId: string
    private name: string

    public static readonly formInputId = 'form-input'
    public static readonly formSelectId = 'form-select-id'
    public static readonly submitBtnId = 'submit-btn-id'

    public constructor(
        resId: string,
        name: string,
    ) {
        this.resId = resId
        this.name = name
    }

    public setName(name: string) {
        this.name = name
    }

    private renderSelected (k: string): string {
        return (this.resId === k)
            ? ' selected'
            : ''
    }

    public getResId() {
        return this.resId
    }

    public getName() {
        return this.name
    }

    public render(allResps: Record<string, string>) {
        const options = Object.keys(allResps)
            .map(k => `<option value="${k}"${this.renderSelected(k)}>` 
                + `${allResps[k]}</option>`)
        return `<div>
            <input type="text" id="${FormWidget.formInputId}" value="${this.name}">
            <select id="${FormWidget.formSelectId}">${options}</select>
            <button id="${FormWidget.submitBtnId}">Submit</button>
        </div>`
    }
}
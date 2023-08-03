export class FormWidget 
{
    private name: string;
    private resId: string;
    private btnId: string;
    private inputId: string;
    private selectId: string;
    private allResps: Record<string, string>

    constructor (
        name: string,
        resId: string,
        btnId: string,
        inputId: string,
        selectId: string,
        allResps: Record<string, string>
    ) {
        this.name = name;
        this.resId = resId;
        this.btnId = btnId;
        this.inputId = inputId;
        this.selectId = selectId;
        this.allResps = allResps;
    }

    private renderSelected (k: string): string {
        return (this.resId === k)
            ? ' selected'
            : ''
    }

    public render(): string {
        const options = Object.keys(this.allResps)
            .map(k => `<option value="${k}"${this.renderSelected(k)}>` 
                + `${this.allResps[k]}</option>`)
        return `<div>
            <input type="text" id="${this.inputId}" value="${this.name}">
            <select id="${this.selectId}">${options}</select>
            <button id="${this.btnId}">Submit</button>
        </div>`
    }
}
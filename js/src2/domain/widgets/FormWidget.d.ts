export declare class FormWidget {
    private resId;
    private name;
    static readonly formInputId = "form-input";
    static readonly formSelectId = "form-select-id";
    static readonly submitBtnId = "submit-btn-id";
    constructor(resId: string, name: string);
    setName(name: string): void;
    private renderSelected;
    getResId(): string;
    getName(): string;
    render(allResps: Record<string, string>): string;
}

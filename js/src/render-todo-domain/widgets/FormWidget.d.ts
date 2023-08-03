export declare class FormWidget {
    private name;
    private resId;
    private btnId;
    private inputId;
    private selectId;
    private allResps;
    constructor(name: string, resId: string, btnId: string, inputId: string, selectId: string, allResps: Record<string, string>);
    private renderSelected;
    render(): string;
}

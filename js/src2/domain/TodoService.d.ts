import { RespWidget } from "./widgets/RespWidget";
export declare class TodoService {
    private stateManager;
    constructor(initData: RespWidget[]);
    printFormHtml(): string;
    printRespsHtml(): string;
    setFormName(name: string): void;
    applyForm(): void;
    switchTask(id: string): void;
    formInputSelector(): string;
    formBtnSelector(): string;
    getAllTaskSelectors(): Record<string, string>;
}

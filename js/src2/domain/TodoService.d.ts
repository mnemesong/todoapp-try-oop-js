import { IStateManager } from "./models/IStateManager";
export declare class TodoService {
    private stateManager;
    constructor(stateManager: IStateManager);
    printFormHtml(): string;
    printRespsHtml(): string;
    setFormName(name: string): void;
    applyForm(): void;
    switchTask(id: string): void;
    formInputSelector(): string;
    formBtnSelector(): string;
    getAllTaskSelectors(): Record<string, string>;
}

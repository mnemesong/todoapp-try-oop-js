import { FormWidget } from "../domain/widgets/FormWidget";
import { RespWidget } from "../domain/widgets/RespWidget";
import { IStateManager } from "../domain/models/IStateManager";
export declare class StateManager implements IStateManager {
    private form;
    private resps;
    constructor(form: FormWidget, resps: RespWidget[]);
    updateFormName(name: string): void;
    getForm(): FormWidget;
    getResps(): RespWidget[];
    getRespByTaskId(taskId: string): RespWidget;
    getOneResp(id: string): RespWidget;
    updateResp(resp: RespWidget): void;
    getRespsAsRecord(): Record<string, string>;
}

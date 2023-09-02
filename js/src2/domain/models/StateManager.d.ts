import { FormWidget } from "../widgets/FormWidget";
import { RespWidget } from "../widgets/RespWidget";
export declare class StateManager {
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

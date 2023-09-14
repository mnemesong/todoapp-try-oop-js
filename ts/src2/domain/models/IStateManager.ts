import { FormWidget } from "../widgets/FormWidget";
import { RespWidget } from "../widgets/RespWidget";

export type IStateManager ={
    updateFormName(name: string): void
    getForm(): FormWidget
    getResps(): RespWidget[]
    getRespByTaskId(taskId: string): RespWidget
    getOneResp(id: string): RespWidget
    updateResp(resp: RespWidget): void
    getRespsAsRecord(): Record<string, string>
}
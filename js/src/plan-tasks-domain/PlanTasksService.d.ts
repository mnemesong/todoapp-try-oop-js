import { FormManagType } from "./managers/FormManagType";
import { RespManagType } from "./managers/RespManagType";
import { TaskManagType } from "./managers/TaskManagType";
export declare class PlanTaskService {
    private formManag;
    private respManag;
    private taskMang;
    constructor(formManag: FormManagType, respManag: RespManagType, taskMang: TaskManagType);
    addTask: () => void;
    switchTask: (taskId: string) => void;
    private checkForm;
    private resetForm;
}

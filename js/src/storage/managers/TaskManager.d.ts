import { TaskManagType } from "../../plan-tasks-domain/managers/TaskManagType";
import { TaskRec } from "../records/TaskRec";
export declare class TaskManager implements TaskManagType {
    createNew(name: string, respId: string): TaskRec;
    getOne(id: string): TaskRec;
    getManyByResId(resId: string): TaskRec[];
}

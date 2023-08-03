import { RespManagType as MangFromTasks } from "../../plan-tasks-domain/managers/RespManagType";
import { RespManagerType as MangFromTodo } from "../../render-todo-domain/models/RespManagerType";
import { RespRec } from "../records/RespRec";
import { TaskManager } from "./TaskManager";
export declare class RespManager implements MangFromTasks, MangFromTodo {
    private taskManager;
    constructor(taskManager: TaskManager);
    getAll(): RespRec[];
    create(name: string): RespRec;
    isRespExist(id: string): boolean;
    getDefault(): RespRec;
}

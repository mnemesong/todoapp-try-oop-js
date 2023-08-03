import { 
    RespManagType as MangFromTasks 
} from "../../plan-tasks-domain/managers/RespManagType";
import { 
    RespManagerType as MangFromTodo 
} from "../../render-todo-domain/models/RespManagerType";
import { RespRec } from "../records/RespRec";
import {v4 as uuid} from "uuid"
import { TaskManager } from "./TaskManager";

const store = {}

const save = (r: RespRec ) => {
    store[r.getId()] = r
}

export class RespManager implements MangFromTasks, MangFromTodo
{
    private taskManager: TaskManager

    public constructor(taskManager: TaskManager) {
        this.taskManager = taskManager
    }

    public getAll(): RespRec[] {
        return Object.values(store)
    }

    public create(name: string): RespRec {
        return new RespRec(
            uuid(), 
            name, 
            save, 
            (resId) => this.taskManager.getManyByResId(resId)
        )
    }

    public isRespExist (id: string): boolean {
        return Object.keys(store).includes(id)
    }

    public getDefault(): RespRec {
        return store[Object.keys(store)[0]]
    }
}
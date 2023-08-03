import { TaskManagType } from "../../plan-tasks-domain/managers/TaskManagType";
import { TaskRec } from "../records/TaskRec";
import { v4 as uuid } from "uuid"

const store: Record<string, TaskRec> = {};

const save = (task: TaskRec) => {
    store[task.getId()] = task
}

export class TaskManager implements TaskManagType
{
    public createNew (name: string, respId: string): TaskRec {
        return new TaskRec(
            uuid(),
            respId,
            name,
            false,
            save
        )
    }

    public getOne(id: string): TaskRec {
        return store[id]
    }

    public getManyByResId(resId: string): TaskRec[] {
        return Object.values(store)
            .filter(el => (el.getRespId() === resId))
    }
}
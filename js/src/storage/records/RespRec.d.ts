import { RespRecType as RecFromPlanTask } from "../../plan-tasks-domain/records/RespRecType";
import { RespRecType as RecFromTodo } from "../../render-todo-domain/records/RespRecType";
import { TaskRec } from "./TaskRec";
export declare class RespRec implements RecFromPlanTask, RecFromTodo {
    private id;
    private name;
    private saver;
    private tasksRepo;
    constructor(id: string, name: string, saver: (resp: RespRec) => void, tasksRepo: (resId: string) => TaskRec[]);
    getId(): string;
    getName(): string;
    getTasks(): TaskRec[];
    save(): void;
}

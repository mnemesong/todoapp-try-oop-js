import { TaskRecType as TaskRecFromPlanDomain } from "../../plan-tasks-domain/records/TaskRecType";
import { TaskRecType as TaskRecFromRenderDomain } from "../../render-todo-domain/records/TaskRecType";
export declare class TaskRec implements TaskRecFromPlanDomain, TaskRecFromRenderDomain {
    private id;
    private resId;
    private name;
    private ready;
    private saver;
    constructor(id: string, resId: string, name: string, ready: boolean, saver: (task: TaskRec) => void);
    getId(): string;
    getName(): string;
    getRespId(): string;
    isReady(): boolean;
    withSwitchedReady(): TaskRec;
    save(): void;
}

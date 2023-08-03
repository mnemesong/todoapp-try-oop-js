import { 
    TaskRecType as TaskRecFromPlanDomain 
} from "../../plan-tasks-domain/records/TaskRecType";
import { 
    TaskRecType as TaskRecFromRenderDomain 
} from "../../render-todo-domain/records/TaskRecType";

export class TaskRec implements TaskRecFromPlanDomain, TaskRecFromRenderDomain  
{
    private id: string;
    private resId: string;
    private name: string;
    private ready: boolean;
    private saver: (task: TaskRec) => void

    constructor (
        id: string,
        resId: string,
        name: string,
        ready: boolean,
        saver: (task: TaskRec) => void
    ) {
        this.id = id
        this.resId = resId
        this.name = name
        this.ready = ready
        this.saver = saver
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getRespId(): string {
        return this.resId
    }

    public isReady(): boolean {
        return this.ready
    }

    public withSwitchedReady(): TaskRec {
        return new TaskRec(
            this.id,
            this.resId,
            this.name,
            !this.ready,
            this.saver
        )
    }

    public save(): void {
        this.saver(this)
    }
}
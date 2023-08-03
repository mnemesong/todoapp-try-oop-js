import { 
    RespRecType as RecFromPlanTask 
} from "../../plan-tasks-domain/records/RespRecType";
import { 
    RespRecType as RecFromTodo 
} from "../../render-todo-domain/records/RespRecType";
import { TaskRec } from "./TaskRec";

export class RespRec implements RecFromPlanTask, RecFromTodo
{
    private id: string;
    private name: string;
    private saver: (resp: RespRec) => void;
    private tasksRepo: (resId: string) => TaskRec[];
    
    constructor(
        id: string,
        name: string,
        saver: (resp: RespRec) => void,
        tasksRepo: (resId: string) => TaskRec[]
    ) {
        this.id = id;
        this.name = name;
        this.saver = saver;
        this.tasksRepo = tasksRepo;
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getTasks(): TaskRec[] {
        return this.tasksRepo(this.id)
    }

    public save(): void {
        this.saver(this)
    }

}
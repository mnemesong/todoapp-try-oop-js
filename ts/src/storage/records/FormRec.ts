import { 
    FormRecType as RecFromPlan 
} from "../../plan-tasks-domain/records/FormRecType";
import { 
    FormRecType as RecFromTodo 
} from "../../render-todo-domain/records/FormRecType";

export class FormRec implements RecFromPlan, RecFromTodo
{
    private name: string;
    private resId: string;
    private saver: (form: FormRec) => void;

    constructor(
        name: string,
        resId: string,
        saver: (form: FormRec) => void
    ) {
        this.name = name;
        this.resId = resId;
        this.saver = saver;
    }

    public getName(): string {
        return this.name
    }

    public getRespId(): string {
        return this.resId
    }

    public withName(name: string): FormRec {
        return new FormRec(
            name,
            this.resId,
            this.saver
        )
    }

    public withRespId(id: string): FormRec {
        return new FormRec(
            this.name,
            id,
            this.saver
        )
    }

    public save(): void {
        this.saver(this)
    }
}
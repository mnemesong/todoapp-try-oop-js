import { FormRecType as RecFromPlan } from "../../plan-tasks-domain/records/FormRecType";
import { FormRecType as RecFromTodo } from "../../render-todo-domain/records/FormRecType";
export declare class FormRec implements RecFromPlan, RecFromTodo {
    private name;
    private resId;
    private saver;
    constructor(name: string, resId: string, saver: (form: FormRec) => void);
    getName(): string;
    getRespId(): string;
    withName(name: string): FormRec;
    withRespId(id: string): FormRec;
    save(): void;
}

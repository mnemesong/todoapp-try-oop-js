import { FormManagerType as ManagFromTodo } from "../../render-todo-domain/models/FormManagerType";
import { FormManagType as ManagFromPlan } from "../../plan-tasks-domain/managers/FormManagType";
import { FormRec } from "../records/FormRec";
export declare class FormManager implements ManagFromPlan, ManagFromTodo {
    getForm(): FormRec;
}

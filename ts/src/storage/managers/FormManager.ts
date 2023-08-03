import { 
    FormManagerType as ManagFromTodo 
} from "../../render-todo-domain/models/FormManagerType";
import { 
    FormManagType as ManagFromPlan 
} from "../../plan-tasks-domain/managers/FormManagType";
import { FormRec } from "../records/FormRec";

let store: {f: FormRec} = {
    f: (new FormRec('', '', (f: FormRec) => {store.f = f}))
}

const save = (f: FormRec) => {store.f = f}

export class FormManager implements ManagFromPlan, ManagFromTodo
{

    public getForm(): FormRec {
        return store.f
    }
}
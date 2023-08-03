import { TaskRecType } from "../records/TaskRecType";
export type TaskManagType = {
    createNew: (name: string, respId: string) => TaskRecType;
    getOne: (id: string) => TaskRecType;
};

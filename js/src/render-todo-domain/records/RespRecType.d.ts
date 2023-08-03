import { TaskRecType } from "./TaskRecType";
export type RespRecType = {
    getId: () => string;
    getName: () => string;
    getTasks: () => TaskRecType[];
};

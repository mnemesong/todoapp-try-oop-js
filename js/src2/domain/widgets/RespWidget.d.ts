import { TaskWidget } from "./TaskWidget";
export declare class RespWidget {
    private id;
    private name;
    private tasks;
    constructor(id: string, name: string, tasks: TaskWidget[]);
    getId(): string;
    getName(): string;
    getContainerId(): string;
    withName(name: string): RespWidget;
    addTask(task: TaskWidget): RespWidget;
    hasTask(id: string): boolean;
    switchTask(id: string): void;
    getTasks(): TaskWidget[];
    render(): string;
}

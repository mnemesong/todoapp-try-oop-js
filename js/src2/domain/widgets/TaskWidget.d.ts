export declare class TaskWidget {
    private id;
    private name;
    private isReady;
    constructor(id: string, name: string, isReady: boolean);
    getId(): string;
    switched(): TaskWidget;
    getName(): string;
    private inBold;
    getContainerId(): string;
    render(): string;
}

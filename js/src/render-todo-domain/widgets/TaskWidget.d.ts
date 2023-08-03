export declare class TaskWidget {
    private name;
    private isReady;
    private containerId;
    constructor(name: string, isReady: boolean, containerId: string);
    private inBold;
    render(): string;
}

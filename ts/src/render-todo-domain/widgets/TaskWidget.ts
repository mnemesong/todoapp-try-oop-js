export class TaskWidget 
{
    private name: string
    private isReady: boolean
    private containerId: string

    constructor(
        name: string,
        isReady: boolean,
        containerId: string
    ) {
        this.name = name
        this.isReady = isReady
        this.containerId = containerId
    }

    private inBold(s: string): string {
        return `<b>${s}</b>`
    }

    public render(): string {
        return `
        <li id="${this.containerId}">${
            this.isReady ? this.inBold(this.name) : this.name
        }</li>`
    }
}
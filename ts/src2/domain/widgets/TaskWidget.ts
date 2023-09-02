export class TaskWidget {
    private id: string
    private name: string
    private isReady: boolean

    public constructor(id: string, name: string, isReady: boolean) {
        this.id = id
        this.name = name
        this.isReady = isReady
    }

    public getId() {
        return this.id
    }

    public switched() {
        return new TaskWidget(
            this.id,
            this.name,
            !this.isReady
        )
    }

    public getName(): string {
        return this.name
    }

    private inBold(s: string): string {
        return `<b>${s}</b>`
    }

    public getContainerId() {
        return 'task-' + this.id
    }

    public render(): string {
        return `
        <li id="${this.getContainerId()}">${
            this.isReady ? this.inBold(this.name) : this.name
        }</li>`
    }
}
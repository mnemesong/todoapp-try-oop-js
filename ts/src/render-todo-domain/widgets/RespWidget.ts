export class RespWidget 
{
    private name: string
    private tasks: string
    private containerId: string

    constructor(
        name: string,
        tasks: string,
        containerId: string
    ) {
        this.name = name
        this.tasks = tasks
        this.containerId = containerId
    }

    public render(): string {
        return `
        <ul id="${this.containerId}">
            <li><b>${this.name}</b></li>
            <ul>${this.tasks}</ul>
        </ul>`
    }
}
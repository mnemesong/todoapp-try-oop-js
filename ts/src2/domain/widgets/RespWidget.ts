import { TaskWidget } from "./TaskWidget"

export class RespWidget {
    private id: string
    private name: string
    private tasks: TaskWidget[]

    public constructor(
        id: string,
        name: string,
        tasks:TaskWidget[]
    ) {
        this.id = id
        this.name = name
        this.tasks = tasks
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getContainerId() {
        return 'resp-' + this.id
    }

    public withName(name: string) {
        return new RespWidget(
            this.id,
            name,
            this.tasks
        )
    }

    public addTask(task: TaskWidget) {
        return new RespWidget(
            this.id,
            this.name,
            this.tasks.concat([task])
        )
    }

    public hasTask(id: string) {
        return this.tasks.filter(el => el.getId() === id).length > 0
    }

    public switchTask(id: string) {
        this.tasks = this.tasks.map(el => (el.getId() === id)
            ? el.switched()
            : el)
    }

    public getTasks() {
        return this.tasks
    }

    public render(): string {
        return `
        <ul id="${this.getContainerId()}">
            <li><b>${this.name}</b></li>
            <ul>${this.tasks.map(t => t.render()).join('')}</ul>
        </ul>`
    }
}
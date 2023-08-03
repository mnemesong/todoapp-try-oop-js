import { PlanTaskService } from "./plan-tasks-domain/PlanTasksService";
import { RenderTodoDomain } from "./render-todo-domain/RenderTodoDomain";
import { PlanTaskModelType } from "./render-todo-domain/models/PlanTaskModelType";
import { EventModel } from "./renderer/EventModel";
import { HtmlModel } from "./renderer/HtmlModel";
import { RenderModel } from "./renderer/RenderModel";
import { FormManager } from "./storage/managers/FormManager";
import { RespManager } from "./storage/managers/RespManager";
import { TaskManager } from "./storage/managers/TaskManager";

class App 
{
    private formManager: FormManager
    private respManager: RespManager
    private taskManager: TaskManager
    private eventModel: EventModel
    private htmlModel: HtmlModel
    private renderModel: RenderModel
    private renderTodoService: RenderTodoDomain
    private planTaskService: PlanTaskService

    constructor() {
        this.taskManager = new TaskManager()
        this.respManager = new RespManager(this.taskManager)
        this.formManager = new FormManager()
        this.eventModel = new EventModel()
        this.htmlModel = new HtmlModel()
        this.renderModel = new RenderModel()
        this.planTaskService = new PlanTaskService(
            this.formManager,
            this.respManager,
            this.taskManager
        )
        this.renderTodoService = new RenderTodoDomain(
            this.renderModel,
            this.eventModel,
            this.htmlModel,
            this.planTaskService,
            this.respManager,
            this.formManager
        )
    }

    init() {
        const res1 = this.respManager.create("Mary")
        const res2 = this.respManager.create("John")
        res1.save()
        res2.save()
        this.taskManager.createNew("Buy the milk", res1.getId()).save()
        this.taskManager.createNew("Buy the fish", res1.getId()).save()
        this.formManager.getForm().withRespId(res1.getId()).save()
    }

    public run(): void {
        this.renderTodoService.rerender()
    }
}
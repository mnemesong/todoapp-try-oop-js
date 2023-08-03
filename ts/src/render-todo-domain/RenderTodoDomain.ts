import { TaskManagType } from "../plan-tasks-domain/managers/TaskManagType";
import { EventModelType } from "./models/EventModelType";
import { FormManagerType } from "./models/FormManagerType";
import { HtmlModelType } from "./models/HtmlModelType";
import { PlanTaskModelType } from "./models/PlanTaskModelType";
import { RenderModelType } from "./models/RenderModelType"
import { RespManagerType } from "./models/RespManagerType";
import { FormWidget } from "./widgets/FormWidget";
import { RespWidget } from "./widgets/RespWidget";
import { TaskWidget } from "./widgets/TaskWidget";

export class RenderTodoDomain 
{
    private renderModel: RenderModelType;
    private eventModel: EventModelType;
    private planTaskModel: PlanTaskModelType;
    private respManager: RespManagerType;
    private formManager: FormManagerType;
    private htmlModel: HtmlModelType;

    constructor(
        renderModel: RenderModelType,
        eventModel: EventModelType,
        htmlModel: HtmlModelType,
        planTaskModel: PlanTaskModelType,
        respManager: RespManagerType,
        formManager: FormManagerType,
    ) {
        this.renderModel = renderModel;
        this.eventModel = eventModel;
        this.htmlModel = htmlModel;
        this.planTaskModel = planTaskModel;
        this.respManager = respManager;
        this.formManager = formManager;
    }

    public rerender = () => {
        this.renderResps()
        this.renderForm()
    }

    private renderForm(): void {
        const form = this.formManager.getForm()
        const formWidgetHtml = (new FormWidget(
            form.getName(),
            form.getRespId(),
            this.htmlModel.formSubmitBtnId(),
            this.htmlModel.formInputId(),
            this.htmlModel.formSelectId(),
            this.getResponsiblesRecord()
        )).render()
        this.renderModel.renderInFormHost(formWidgetHtml)
        this.eventModel.setOnChangeAction(
            '#' + this.htmlModel.formInputId,
            () => {
                this.formManager.getForm().withName(
                    this.htmlModel.attributeOfHtmlEl(
                        '#' + this.htmlModel.formInputId,
                        'value'
                    )
                ).save()
                this.rerender()
            }
        )
        this.eventModel.setOnChangeAction(
            '#' + this.htmlModel.formSelectId(),
            () => {
                this.formManager.getForm().withRespId(
                    this.htmlModel.attributeOfHtmlEl(
                        '#' + this.htmlModel.formSelectId(),
                        'value'
                    )
                ).save()
                this.rerender()
            }
        )
        this.eventModel.setOnclickAction(
            '#' + this.htmlModel.formSubmitBtnId(),
            () => {
                this.planTaskModel.addTask()
                this.rerender()
            }
        )
    }

    private renderResps(): void {
        const resps = this.respManager.getAll()
        const respWidgetsHtml = resps.map(r => (new RespWidget(
            r.getName(),
            r.getTasks().map(t => (new TaskWidget(
                t.getName(), 
                t.isReady(), 
                this.htmlModel.taskContainerId(t.getId())
            )).render()).join(''),
            this.htmlModel.respContainerid(r.getId())
        ).render())).join('')
        this.renderModel.renderInRespsHost(respWidgetsHtml)
        resps.forEach( r => r.getTasks().forEach(
            t => this.eventModel.setOnclickAction(
                '#' + this.htmlModel.taskContainerId(t.getId()),
                () => {
                    this.planTaskModel.switchTask(t.getId());
                    this.rerender();
                }
            )
        ))
    }

    private getResponsiblesRecord(): Record<string, string> {
        const result = {}
        this.respManager.getAll().forEach(r => {
            result[r.getId()] = r.getName()
        })
        return result
    }
}
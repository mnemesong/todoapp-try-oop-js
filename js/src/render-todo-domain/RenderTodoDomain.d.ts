import { EventModelType } from "./models/EventModelType";
import { FormManagerType } from "./models/FormManagerType";
import { HtmlModelType } from "./models/HtmlModelType";
import { PlanTaskModelType } from "./models/PlanTaskModelType";
import { RenderModelType } from "./models/RenderModelType";
import { RespManagerType } from "./models/RespManagerType";
export declare class RenderTodoDomain {
    private renderModel;
    private eventModel;
    private planTaskModel;
    private respManager;
    private formManager;
    private htmlModel;
    constructor(renderModel: RenderModelType, eventModel: EventModelType, htmlModel: HtmlModelType, planTaskModel: PlanTaskModelType, respManager: RespManagerType, formManager: FormManagerType);
    rerender: () => void;
    private renderForm;
    private renderResps;
    private getResponsiblesRecord;
}

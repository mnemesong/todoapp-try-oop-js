import { RenderModelType } from "../render-todo-domain/models/RenderModelType";

export class RenderModel implements RenderModelType
{
    renderInFormHost(html: string): void {
        document.querySelector('#form-host').innerHTML = html
    }

    renderInRespsHost (html: string): void {
        document.querySelector('#resps-host').innerHTML = html
    }
}
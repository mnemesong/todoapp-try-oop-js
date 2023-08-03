import { EventModelType } from "../render-todo-domain/models/EventModelType";

export class EventModel implements EventModelType
{
    setOnclickAction(host: string, action: () => void): void {
        const el = document.querySelector(host) as HTMLElement
        if(!!el) {
            el.onclick = () => {action()}
        }
    }

    setOnChangeAction(host: string, action: () => void): void {
        const el = document.querySelector(host) as HTMLElement
        if(!!el) {
            el.onchange = () => {action()}
        }
    }
}
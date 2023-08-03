import { EventModelType } from "../render-todo-domain/models/EventModelType";
export declare class EventModel implements EventModelType {
    setOnclickAction(host: string, action: () => void): void;
    setOnChangeAction(host: string, action: () => void): void;
}

import { TaskRecType } from "../records/TaskRecType"

export type RenderModelType = {
    renderInFormHost: (html: string) => void

    renderInRespsHost: (html: string) => void
}
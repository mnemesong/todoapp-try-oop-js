import { RespRecType } from "../records/RespRecType"

export type RespManagType = {
    isRespExist: (id: string) => boolean
    getDefault: () => RespRecType
}
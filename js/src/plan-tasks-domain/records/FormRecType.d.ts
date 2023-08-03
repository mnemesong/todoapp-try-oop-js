export type FormRecType = {
    getName: () => string;
    getRespId: () => string;
    withName: (name: string) => FormRecType;
    withRespId: (resId: string) => FormRecType;
    save: () => void;
};

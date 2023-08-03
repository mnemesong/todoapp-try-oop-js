export type FormRecType = {
    getName: () => string;
    getRespId: () => string;
    withName: (name: string) => FormRecType;
    withRespId: (id: string) => FormRecType;
    save: () => void;
};

export type TaskRecType = {
    getId: () => string;
    getName: () => string;
    isReady: () => boolean;
    getRespId: () => string;
    withSwitchedReady: () => TaskRecType;
    save: () => void;
};

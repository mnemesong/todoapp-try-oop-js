export type TaskRecType = {
    getId: () => string;
    getName: () => string;
    isReady: () => boolean;
};

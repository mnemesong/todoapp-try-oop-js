export type EventModelType = {
    setOnclickAction: (host: string, action: () => void) => void;
    setOnChangeAction: (host: string, action: () => void) => void;
};

interface ICommon {
    toggleOpened: () => void;
    opened: boolean;
}
export interface IWithNavbar extends ICommon {
}
export interface INavbar extends ICommon {
}
export {};

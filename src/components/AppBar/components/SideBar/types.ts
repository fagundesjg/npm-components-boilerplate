export interface IMenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface ICommon {
  opened: boolean;
}

export interface IWithSideBar extends ICommon {}

export interface ISideBar extends ICommon {}

interface ICommon {
  children?: React.ReactNode;
  opened: boolean;
  toggleOpened: () => void;
}

export interface IWithAppBar extends ICommon {}

export interface IAppBar extends ICommon {}

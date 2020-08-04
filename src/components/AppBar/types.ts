export enum SidebarOption {
  Home = '/',
  Users = '/users',
  Attendants = '/attendants',
}

interface ICommon {
  children?: React.ReactNode;
  pagePath: SidebarOption;
}

export interface IWithAppBar extends ICommon {}

export interface IAppBar extends ICommon {}

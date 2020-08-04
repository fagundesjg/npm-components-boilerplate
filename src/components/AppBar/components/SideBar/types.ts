import { SidebarOption } from 'components';

export interface IMenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface ICommon {
  pagePath: SidebarOption;
}

export interface IWithSideBar extends ICommon {}

export interface ISideBar extends ICommon {}

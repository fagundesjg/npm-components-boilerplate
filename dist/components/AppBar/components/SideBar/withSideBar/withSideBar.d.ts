import React from 'react';
import { IWithSideBar } from '../types';
declare const withSideBar: (WrappedComponent: React.ElementType) => (props: IWithSideBar) => JSX.Element;
export { withSideBar };

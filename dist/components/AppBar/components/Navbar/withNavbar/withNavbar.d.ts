import React from 'react';
import { IWithNavbar } from '../types';
declare const withNavbar: (WrappedComponent: React.ElementType) => (props: IWithNavbar) => JSX.Element;
export { withNavbar };

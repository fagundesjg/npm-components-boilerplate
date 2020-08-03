import React from 'react';
import { IWithAppBar } from '../types';
declare const withAppBar: (WrappedComponent: React.ElementType) => (props: IWithAppBar) => JSX.Element;
export { withAppBar };

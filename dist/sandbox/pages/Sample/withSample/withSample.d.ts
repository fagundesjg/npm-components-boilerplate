import React from 'react';
import { IWithSample } from '../types';
declare const withSample: (WrappedComponent: React.ElementType) => (props: IWithSample) => JSX.Element;
export { withSample };

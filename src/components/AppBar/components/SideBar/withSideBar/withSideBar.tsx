import React from 'react';

import { IWithSideBar } from '../types';

const withSideBar = (WrappedComponent: React.ElementType) => {
  const WithSideBarHOC = (props: IWithSideBar) => {
    return <WrappedComponent {...props} />;
  };

  return WithSideBarHOC;
};

export { withSideBar };

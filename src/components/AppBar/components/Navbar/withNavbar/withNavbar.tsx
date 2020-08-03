import React from 'react';

import { IWithNavbar } from '../types';

const withNavbar = (WrappedComponent: React.ElementType) => {
  const WithNavbarHOC = (props: IWithNavbar) => {
    return <WrappedComponent {...props} />;
  };

  return WithNavbarHOC;
};

export { withNavbar };

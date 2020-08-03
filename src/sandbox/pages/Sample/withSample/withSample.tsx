import React from 'react';

import { IWithSample } from '../types';

const withSample = (WrappedComponent: React.ElementType) => {
  const WithSampleHOC = (props: IWithSample) => {
    return <WrappedComponent {...props} />;
  };

  return WithSampleHOC;
};

export { withSample };

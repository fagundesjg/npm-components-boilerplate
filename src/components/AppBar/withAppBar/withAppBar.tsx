import React from 'react'

import { IWithAppBar } from '../types';

const withAppBar = (WrappedComponent: React.ElementType) => {
    const WithAppBarHOC = (props: IWithAppBar) => {
        return <WrappedComponent {...props} />
    }

    return WithAppBarHOC;
}

export { withAppBar };
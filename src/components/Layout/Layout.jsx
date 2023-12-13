import React, { Children } from 'react';

// style overrides specific to this page component
import './Layout.scss';

import { Header, HeaderNavigation, HeaderMenuItem, HeaderName } from '@carbon/react';

const Layout = ({ children }) => {
    return (
        <>
            <Header aria-label='Navigation' aria-labelledby=''>
                <HeaderName aria-label='Supply Chain Intelligenc Suite Builders' href="/">Supply Chain Intelligence Suite Builders</HeaderName>
                <HeaderNavigation aria-label='top level page navigation' aria-labelledby=''>
                    <HeaderMenuItem href="/asset-map">Asset map</HeaderMenuItem>
                    <HeaderMenuItem href="/builders">Builders</HeaderMenuItem>
                </HeaderNavigation>
            </Header >
            <div className='body'>
                {children}
            </div>
        </>
    )
}

export default Layout
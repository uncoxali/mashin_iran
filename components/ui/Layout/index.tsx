import React, { FC } from 'react';
import Header from '@components/Header';
import FooterMenu from '@components/FooterMenu';

interface Props {
    children?: any;
}

const index: FC<Props> = ({ children }) => {
    return (
        <div className="">
            <div>
                <Header />
            </div>
            <div>{children}</div>
            <div>
                <FooterMenu />
            </div>
        </div>
    );
};

export default index;

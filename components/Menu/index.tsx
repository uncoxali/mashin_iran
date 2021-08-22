import React, { FC } from 'react';

interface Props {
    menu?: boolean;
    handleClick?: any;
}

const index: FC<Props> = ({ menu, handleClick }) => {
    return (
        <div className="">
            <div
                onClick={handleClick}
                className={menu ? `w-full h-screen bg-blacks-100 z-20 absolute opacity-80` : ''}
            ></div>
            <div
                className={` ${
                    menu
                        ? ' transition-all duration-300 w-72 bg-white'
                        : ' transition-all duration-300 w-0'
                }   h-screen z-50 absolute w-0 p-3`}
            ></div>
        </div>
    );
};

export default index;

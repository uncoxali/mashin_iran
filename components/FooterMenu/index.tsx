import React from 'react';
import PlusIcon from '@assets/svg/Plus.svg';

const index = () => {
    return (
        <div className="lg:hidden md:hidden block">
            <div className="flex justify-center ">
                <div className=" bottom-3 fixed">
                    <div className=" h-14 w-44 bg-green-600 rounded-full flex justify-center items-center">
                        <div className="flex  text-white text-sm px-5">
                            <PlusIcon className="ml-5 w-7 h-8" />
                            <p className="mt-2">افزودن آگهی</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;

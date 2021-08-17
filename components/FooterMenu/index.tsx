import React from 'react';

import Bag from '@assets/svg/bag.svg';
import Paper from '@assets/svg/paper.svg';
import PaperPlus from '@assets/svg/paperplus.svg';
import Search from '@assets/svg/search1.svg';

const index = () => {
    return (
        <div className="flex justify-center">
            <div className=" bottom-3 fixed">
                <div className="border-4 border-white h-14 w-auto bg-black-50 rounded-full flex justify-center items-center">
                    <div className="flex  text-white text-xx px-5">
                        <div className="flex items-center justify-center md:justify-center lg:w-40 md:w-36 w-20">
                            <Bag className="lg:block md:block hidden" />
                            <p className="lg:mr-3 md:mr-3 ml-5">نمایشگاه</p>
                        </div>
                        <div className="flex items-center lg:justify-center md:justify-center lg:w-40 md:w-36 w-20">
                            <Search className="lg:block md:block hidden" />
                            <p className="mr-2 ">جستجوی پیشرفته</p>
                        </div>
                        <div className="flex items-center  lg:justify-center md:justify-center lg:w-40 md:w-36  w-20">
                            <PaperPlus className="lg:block md:block hidden" />
                            <p className="mr-2 ">افزودن آگهی</p>
                        </div>
                        <div className="flex items-center  lg:justify-center md:justify-center  lg:w-40 md:w-36 w-20">
                            <Paper className="lg:block md:block hidden" />
                            <p className="mr-4">صفحهی شما</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;

import React, { FC } from 'react';
import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';
import Filter1 from '@assets/svg/filter1.svg';

interface Props {
    handleShow?: () => void;
    show?: boolean;
}

const index: FC<Props> = ({ handleShow, show }) => {
    return (
        <div>
            <div className="mb-5 flex justify-between p-1 px-5">
                <div className="flex justify-between  lg:w-72 md:w-64">
                    <div className="flex justify-between  w-auto">
                        <div
                            onClick={handleShow}
                            className={`${
                                show ? 'mr-0' : 'lg:mr-10 md:mr-10 '
                            } bg-black-50 w-28 h-10 rounded-full  border-2 border-white flex justify-start items-center cursor-pointer`}
                        >
                            <div
                                className={` bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-4 border-white`}
                            >
                                <FilterIcon className="h-6 w-6" />
                            </div>
                            <p className="text-white text-xs mr-2">فیلتر</p>
                            <div className="mr-5 lg:hidden md:hidden block">
                                <Arrow
                                    className={`${
                                        show
                                            ? ' transform rotate-180 transition-all duration-300'
                                            : '  transition-all duration-300'
                                    } `}
                                />
                            </div>
                        </div>
                        <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center mr-24">
                            <Arrow
                                className={`${
                                    show
                                        ? ' transform rotate-180 transition-all duration-300'
                                        : '  transition-all duration-300'
                                } `}
                            />
                        </div>
                        <div className="h-10 w-28 mr-10 text-sm flex items-center font-bold">
                            <p>فهرست خودرو ها</p>
                        </div>
                    </div>
                </div>
                <div className="w-36 bg-black-50 h-10 rounded-full lg:ml-12 md:ml-10  flex justify-between text-xs border-2 border-white text-white items-center">
                    <div className="w-10 h-10 border-4 border-white rounded-full flex justify-center items-center">
                        <Filter1 className="w-6 h-6" />
                    </div>
                    <p>مرتب سازی</p>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default index;

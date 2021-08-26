import React, { FC } from 'react';

import { useRouter } from 'next/router';
import Filter from '@components/Filter/filter';
import FilterExhibition from '@components/Filter/filterExhibition';
import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';

interface Props {
    show?: boolean;
    handleClick?: any;
}

const index: FC<Props> = ({ show, handleClick }) => {
    const router = useRouter();

    const [filters, setFilters] = React.useState<any>();

    React.useEffect(() => {
        if (router.pathname === '/') {
            setFilters(Filter);
        } else {
            setFilters(FilterExhibition);
        }
    });

    return (
        <div>
            {show ? (
                <div
                    className={` lg:hidden md:hidden block w-full h-screen  overflow-y-auto top-0 fixed z-50 bg-white`}
                >
                    <div className="">
                        <div className="w-full h-12 bg-white flex justify-between p-2">
                            <div
                                className={`${
                                    show ? 'mr-0' : 'lg:mr-10 md:mr-10 '
                                } bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center`}
                            >
                                <div
                                    className={` bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white`}
                                >
                                    <FilterIcon />
                                </div>
                                <p className="text-white text-xs mr-2">فیلتر</p>
                            </div>
                            <div
                                onClick={handleClick}
                                className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white"
                            >
                                <Arrow
                                    className={`${
                                        show
                                            ? ' transform rotate-180 transition-all duration-1000'
                                            : '  transition-all duration-1000'
                                    }`}
                                />
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="w-full bg-white">
                            <div className={` row-span-1 rounded-lg p-3 `}>
                                {filters?.map((filter: any, index: any) => (
                                    <div className="text-xs" key={index}>
                                        <div className="flex mt-1">
                                            <div className="mt-2">{filter.icon}</div>
                                            <p className="mr-1 mt-3">{filter.title}</p>
                                        </div>
                                        <div
                                            className={`${
                                                filter.line ? `h-11 bg-red-50 w-full` : ''
                                            }   mt-4`}
                                        ></div>
                                        <div className="flex justify-between">
                                            <p className="mr-8 -mt-2">{filter.name}</p>
                                            <span className="-mt-1">{filter.arrow}</span>
                                        </div>
                                        <div
                                            className={` ${
                                                filter.line ? 'hidden' : 'block'
                                            } bg-watusi-250 w-full mt-1`}
                                            style={{ height: '1px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default index;

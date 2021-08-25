import React, { FC } from 'react';

import { useRouter } from 'next/router';
import Filter from '@components/Filter/filter';
import FilterExhibition from '@components/Filter/filterExhibition';

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
                <div className={` lg:hidden md:hidden block w-full h-screen top-0 fixed z-50`}>
                    <div className="">
                        <div className="w-full h-12 bg-white flex justify-end p-3">
                            <div
                                onClick={handleClick}
                                className="text-white bg-red-600 h-6 w-6 rounded-full flex justify-center items-center"
                            >
                                X
                            </div>
                        </div>
                        <hr />
                        <div className="w-full h-screen bg-white">
                            <div className={` row-span-1 rounded-lg p-5`}>
                                {filters?.map((filter: any, index: any) => (
                                    <div className="text-xs" key={index}>
                                        <div className="flex">
                                            <div className="mt-1">{filter.icon}</div>
                                            <p className="mr-1 mt-2">{filter.title}</p>
                                        </div>
                                        <div
                                            className={`${
                                                filter.line ? `h-11 bg-red-50 w-full` : ''
                                            }   mt-3`}
                                        ></div>
                                        <div className="flex justify-between">
                                            <p className="mr-8 -mt-2">{filter.name}</p>
                                            <span className="-mt-1">{filter.arrow}</span>
                                        </div>
                                        <div
                                            className={` bg-watusi-250 w-full `}
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

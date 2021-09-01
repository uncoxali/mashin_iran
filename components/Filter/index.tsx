import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Filter from './filter';
import FilterExhibition from './filterExhibition';

interface Props {
    show?: boolean;
}

const index: FC<Props> = ({ show }) => {
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
        <>
            <div
                className={` ${
                    show
                        ? 'transition-all duration-200 w-60 h-auto bg-white p-3'
                        : 'transition-all duration-200  w-0  bg-white'
                } row-span-1 rounded-lg shadow-2xl`}
            >
                {show ? (
                    <div className={` row-span-1 rounded-lg `}>
                        {filters?.map((filter: any, index: any) => (
                            <div className="text-xs" key={index}>
                                <div className="flex mt-1">
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
                ) : null}
            </div>
        </>
    );
};

export default index;

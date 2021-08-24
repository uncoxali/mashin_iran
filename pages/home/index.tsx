import React from 'react';
import Car from '@components/Car';
import Card from '@components/Card';

import { useRouter } from 'next/router';

import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';

export default function index() {
    const router = useRouter();

    return (
        <div>
            <div className="py-28 lg:mt-0 md:mt-0 mt-14">
                <div className="lg:block md:block hidden">
                    <div className="mb-5 flex justify-between p-1 px-5">
                        <div className="flex justify-between  w-72">
                            <div className="bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center">
                                <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                    <FilterIcon />
                                </div>
                                <p className="text-white text-xs mr-2">فیلتر</p>
                            </div>
                            <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                <Arrow />
                            </div>
                        </div>
                        <div className="ml-8">
                            <div className="bg-black-50 w-60 h-10 rounded-full border-2 border-white flex items-center justify-end text-white text-xs">
                                <p className="ml-5">مرتب سازی</p>
                                <div className="w-32 h-10 border-2 border-white rounded-full items-center justify-between flex mr-2">
                                    <p className="mr-2">جدید ترین ها</p>
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Card data={Car} />
            </div>
        </div>
    );
}

import React from 'react';
import Car from '@components/Car';
import Card from '@components/Card';

import { useRouter } from 'next/router';

import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';
import Filter1 from '@assets/svg/filter1.svg';

export default function index() {
    const router = useRouter();

    return (
        <div>
            <div className="py-28 lg:mt-0 md:mt-0 mt-14">
                <div className="lg:block md:block ">
                    <div className="mb-5 flex justify-between p-1 px-5">
                        <div className="flex justify-between  lg:w-72 md:w-64 ">
                            <div className="bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center">
                                <div className=" bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                    <FilterIcon />
                                </div>
                                <p className="text-white text-xs mr-2">فیلتر</p>
                            </div>
                            <div className="lg:block md:block hidden">
                                <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                    <Arrow />
                                </div>
                            </div>
                        </div>
                        <div className="w-36 bg-black-50 h-10 rounded-full lg:ml-12 md:ml-10  flex justify-between text-xs text-white items-center">
                            <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center">
                                <Filter1 className="w-6 h-6" />
                            </div>
                            <p>مرتب سازی</p>
                            <Arrow />
                        </div>
                    </div>
                </div>
                <Card data={Car} />
            </div>
        </div>
    );
}

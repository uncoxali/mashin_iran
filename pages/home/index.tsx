import React from 'react';
import Car from '@components/Car';
import Card from '@components/Card';
import SearchIcon from '@assets/svg/search1.svg';

import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();

    return (
        <div>
            <div className="py-28 lg:mt-0 md:mt-0 ">
                <div className="top-0 bg-white h-24 w-full fixed my-24 shadow-lg">
                    <div className="flex justify-center items-center w-full h-24">
                        <div className="bg-gray-200 h-10 rounded-full w-1/3 flex justify-between">
                            <input
                                type="text"
                                className=" bg-transparent w-3/4 outline-none mr-5 placeholder-black-50 text-center text-sm"
                                placeholder="جستجو کنید"
                            />
                            <div className="bg-red-50 h-10 w-10 rounded-full border-4 border-white flex justify-center items-center">
                                <SearchIcon className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <Card data={Car} />
            </div>
        </div>
    );
}

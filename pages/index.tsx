import router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '@components/ui/Layout';
import Exhibition from './exhibition';
import Home from './home';
import SearchIcon from '@assets/svg/search1.svg';

const Index = () => {
    useEffect(() => {
        if (sessionStorage.length === 0) {
            router.push('/login');
        }
    });

    return (
        <Layout>
            <div className=" w-full h-auto bg-white">
                <div className="absolute z-5">
                    <div className="top-0 bg-white h-24 w-full fixed my-20 shadow-lg">
                        <div className="flex justify-center items-center w-full h-24">
                            <div className="bg-gray-200 h-10 rounded-full lg:w-1/3 md:w-1/2 w-72 flex justify-between">
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
                </div>
                <div className="flex justify-center ">
                    <Home />
                </div>
            </div>
        </Layout>
    );
};

export default Index;

import React from 'react';
import Notification from '@assets/svg/Notification.svg';
import Profile from '@assets/svg/Profile.svg';
import Search from '@assets/svg/Search.svg';

export default function index() {
    return (
        <div className="w-full top-0 fixed z-50">
            <div className="relative">
                <div className="absolute top-0 lg:h-20 md:h-20 h-24 w-full bg-white lg:rounded-b-full md:rounded-b-3xl rounded-b-3xl p-3 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <img className="w-12 h-12 mr-10" src="/images/logo.png" />
                        </div>
                        <div className="lg:block md:block hidden">
                            <div className="bg-gray-200 h-10 w-96 rounded-full flex justify-between items-center">
                                <input
                                    type="text"
                                    className="bg-transparent outline-none mr-5 placeholder-black text-sm"
                                    placeholder="نام خودرو"
                                />
                                <div className="w-40 h-10 bg-black-50 rounded-full flex justify-between text-center items-center">
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none text-white placeholder-white text-xs mr-3 w-20"
                                        placeholder="انتخاب شهر"
                                    />
                                    <div className="w-14 h-10 bg-red-50 rounded-full flex justify-center items-center">
                                        <Search className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex ml-10">
                            <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl ml-5">
                                <Notification className="w-6 h-6" />
                            </div>
                            <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl">
                                <Profile className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden md:hidden block mt-3">
                        <div className="flex justify-center ">
                            <div className="bg-gray-200 h-10 lg:w-64 rounded-full flex ">
                                <input
                                    type="text"
                                    className="bg-transparent outline-none mr-5 placeholder-black text-sm"
                                    placeholder="نام خودرو"
                                />
                                <div className="w-40 h-10 bg-black-50 rounded-full flex justify-between text-center items-center">
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none text-white placeholder-white text-xs mr-3 w-20"
                                        placeholder="انتخاب شهر"
                                    />
                                    <div className="w-14 h-10 bg-red-50 rounded-full flex justify-center items-center">
                                        <Search className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

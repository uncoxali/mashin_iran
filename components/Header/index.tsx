import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SideBar from '@components/Menu';
import Notification from '@assets/svg/Notification.svg';
import Profile from '@assets/svg/Profile.svg';
import Search from '@assets/svg/Search.svg';
import Menu from '@assets/svg/menu.svg';

export default function index() {
    const router = useRouter();
    const [menu, setMenu] = React.useState<boolean>(false);

    const handleMenu = () => {
        setMenu(!menu);
    };
    const handleChange = () => {};

    return (
        <div className="">
            <div className="w-full top-0 fixed z-10">
                <div className="relative">
                    <div className="absolute top-0 lg:h-20 md:h-20 h-24 w-full bg-white lg:rounded-b-full md:rounded-b-3xl rounded-b-3xl p-3 shadow-lg">
                        <div className="flex justify-between items-center lg:px-14 md:px-12 px-7">
                            <div className="flex ml-10">
                                <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl">
                                    <Menu className="w-5 h-5" onClick={handleMenu} />
                                </div>
                                <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl mr-5">
                                    <Notification className="w-6 h-6" />
                                </div>
                                <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl mr-5">
                                    <Profile className="w-6 h-6" />
                                </div>
                                <div className="mr-5 lg:block md:block hidden">
                                    <button className="bg-red-50 px-5 p-2 rounded-xl text-white text-sm">
                                        افزودن آگهی
                                    </button>
                                </div>
                            </div>
                            <div className="lg:block md:block hidden">
                                <div className="bg-gray-200 h-10 w-96 rounded-full flex justify-between items-center border-2 border-white">
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none mr-5 placeholder-black text-sm"
                                        placeholder="نام خودرو"
                                    />
                                    <div
                                        className={` bg-blacks-100 w-36 h-10 rounded-full flex text-white text-center text-xs select-none`}
                                    >
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <a
                                                    className={`${
                                                        router.pathname == '/'
                                                            ? 'bg-red-50 rounded-full'
                                                            : ''
                                                    } flex justify-center items-center p-1 h-10`}
                                                >
                                                    <span className="p-3"> خودرو</span>
                                                </a>
                                            </Link>

                                            <Link href="/exhibition">
                                                <a
                                                    className={`  ${
                                                        router.pathname == '/exhibition'
                                                            ? 'bg-red-50'
                                                            : ''
                                                    } mr-3 h-10  rounded-full flex justify-center items-center`}
                                                >
                                                    <span className="p-3"> نمایشگاه</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="w-12 h-12 mr-10" src="/images/logo.png" />
                            </div>
                        </div>
                        <div className="lg:hidden md:hidden block mt-3">
                            <div className="flex justify-center ">
                                <div className="bg-gray-200 h-10 lg:w-64 rounded-full flex  border-2 border-white">
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none mr-5 placeholder-black text-sm"
                                        placeholder="نام خودرو"
                                    />
                                    <div
                                        className={` bg-blacks-100 w-36 h-10 rounded-full flex text-white text-center text-xs select-none`}
                                    >
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <a
                                                    className={`${
                                                        router.pathname == '/'
                                                            ? 'bg-red-50 rounded-full'
                                                            : ''
                                                    } flex justify-center items-center p-1 h-10`}
                                                >
                                                    <span className="p-3"> خودرو</span>
                                                </a>
                                            </Link>

                                            <Link href="/exhibition">
                                                <a
                                                    className={`  ${
                                                        router.pathname == '/exhibition'
                                                            ? 'bg-red-50'
                                                            : ''
                                                    } mr-3 h-10  rounded-full flex justify-center items-center`}
                                                >
                                                    <span className="p-3"> نمایشگاه</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar menu={menu} handleClick={handleMenu} />
            </div>
        </div>
    );
}

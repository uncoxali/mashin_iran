import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ActiveLink from '@components/ui/ActiveLink';

import SideBar from '@components/Menu';
import Notification from '@assets/svg/Notification.svg';
import Profile from '@assets/svg/Profile.svg';
import Menu from '@assets/svg/menu.svg';
import Subtract from '@assets/svg/Subtract.svg';
import Plus from '@assets/svg/Plus2.svg';
import Home from '@assets/svg/home.svg';

export default function index() {
    const router = useRouter();
    const [menu, setMenu] = React.useState<boolean>(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="">
            <div className="w-full top-0 fixed z-10">
                <div className="relative">
                    <div className="">
                        <div className="w-full top-0 fixed z-10 bg-white h-24 border-b-2 border-gray-300 flex  items-center">
                            <div className="flex justify-between px-10 w-full">
                                <div className="flex justify-between w-24">
                                    <div
                                        onClick={handleMenu}
                                        className="bg-gray-250 p-2 rounded-lg"
                                    >
                                        <Menu className="w-5 h-5" />
                                    </div>
                                    <div className="bg-gray-250 p-2 rounded-lg">
                                        <Notification className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-between text-xs items-center">
                                    <div className=" flex justify-between items-center">
                                        <Plus
                                            fill={router.asPath === '/' ? '#FF4E00' : ''}
                                            className="w-6 h-6 ml-4"
                                        />
                                        <p>افزودن آگهی</p>
                                    </div>

                                    <ActiveLink href="/">
                                        <Subtract
                                            fill={router.asPath === '/' ? '#FF4E00' : ''}
                                            className="w-6 h-6 ml-4 "
                                        />
                                        <p>خودرو</p>
                                    </ActiveLink>

                                    <ActiveLink href="/exhibition">
                                        <Home
                                            fill={router.asPath === '/exhibition' ? '#FF4E00' : ''}
                                            className="w-6 h-6 ml-4"
                                        />
                                        <p>نمایشگاهی</p>
                                    </ActiveLink>

                                    <div className=" flex justify-between items-center">
                                        <Profile
                                            fill={router.asPath === '/' ? '#FF4E00' : ''}
                                            className="w-6 h-6 ml-4"
                                        />
                                        <p>صفحه ی من</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-10 h-10" src="/images/logo.png" alt="" />
                                </div>
                            </div>
                            <SideBar menu={menu} handleClick={handleMenu} />
                        </div>
                    </div>
                </div>
                <SideBar menu={menu} handleClick={handleMenu} />
            </div>
        </div>
    );
}

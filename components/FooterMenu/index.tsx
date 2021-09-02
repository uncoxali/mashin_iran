import React from 'react';
import { useRouter } from 'next/router';
import ActiveLink from '@components/ui/ActiveLink';

import PlusIcon from '@assets/svg/Plus.svg';
import Notification from '@assets/svg/Notification.svg';
import Profile from '@assets/svg/Profile.svg';
import Menu from '@assets/svg/menu.svg';
import Subtract from '@assets/svg/Subtract.svg';
import Plus from '@assets/svg/Plus2.svg';
import Home from '@assets/svg/home.svg';

const index = () => {
    const router = useRouter();
    return (
        <div className="lg:hidden md:hidden block">
            <div className="flex justify-center ">
                <div className=" bottom-0 fixed h-16 w-full bg-white px-5">
                    <div className="lg:w-1/2 font-bold h-16 md:w-1/2 flex justify-between text-xs items-center">
                        <ActiveLink href="/">
                            <div>
                                <Subtract
                                    fill={router.asPath === '/' ? '#FF4E00' : ''}
                                    className="w-6 h-6 mr-1 "
                                />
                                <p className="mt-1">خودرو</p>
                            </div>
                        </ActiveLink>
                        <div className="">
                            <Plus
                                fill={router.asPath === '/' ? '#FF4E00' : ''}
                                className="w-6 h-6 ml-4 mr-5"
                            />
                            <p className="mt-1">افزودن آگهی</p>
                        </div>

                        <ActiveLink href="/exhibition">
                            <div>
                                <Home
                                    fill={router.asPath === '/exhibition' ? '#FF4E00' : ''}
                                    className="w-6 h-6 mr-4"
                                />
                                <p className="mt-2">نمایشگاهی</p>
                            </div>
                        </ActiveLink>
                        <ActiveLink href="/users">
                            <div>
                                <Profile
                                    fill={router.asPath === '/users' ? '#FF4E00' : ''}
                                    className="w-6 h-6 mr-4"
                                />
                                <p className="mt-2">صفحه ی من</p>
                            </div>
                        </ActiveLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;

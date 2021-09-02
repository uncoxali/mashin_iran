import React, { FC } from 'react';
import TextMenu from '@components/Car';

import UserIcon from '@assets/svg/Profile.svg';
import EditIcon from '@assets/svg/menu-svg/Edit.svg';
import LoginIcon from '@assets/svg/menu-svg/Login.svg';
import PlayIcon from '@assets/svg/menu-svg/Play.svg';
import PlusIcon from '@assets/svg/menu-svg/Plus.svg';
import TicketIcon from '@assets/svg/menu-svg/Ticket.svg';
import TimeIcon from '@assets/svg/menu-svg/Time.svg';
import UsersIcon from '@assets/svg/menu-svg/User.svg';
import WorkIcon from '@assets/svg/menu-svg/Work.svg';
import Arrow from '@assets/svg/menu-svg/Arrow.svg';

const textMenu = [
    { title: 'اطلاعات سطح', icons: <UserIcon />, active: true },
    { title: 'ویرایش مشخصات', icons: <EditIcon />, active: false },
    { title: 'اگهی های منتخب', icons: <TicketIcon />, active: false },
    { title: 'اگهی های در انتظار', icons: <TimeIcon />, active: false },
    { title: 'ثبت تبلیغات', icons: <PlusIcon />, active: false },
    { title: 'معرفی به دوستان', icons: <UsersIcon />, active: false },
    { title: 'قوانین مقررات', icons: <WorkIcon />, active: false },
    { title: 'فیلم آموزشی برنامه', icons: <PlayIcon />, active: false },
    // { title: 'خروج از حساب کاربری', icons: <LoginIcon />, active: false, Logoute: true },
];

interface Props {
    menu?: boolean;
    handleClick?: any;
}

const index: FC<Props> = ({ menu, handleClick }) => {
    return (
        <div className="">
            <div
                onClick={handleClick}
                className={menu ? `w-full h-screen bg-blacks-100 z-20 absolute opacity-80` : ''}
            ></div>
            {
                <div
                    className={` ${
                        menu
                            ? 'transform transition-all duration-300 w-64  bg-white border-l-2 border-red-50'
                            : 'transform transition-all duration-200 w-0 '
                    }   h-screen z-30 absolute px-3 `}
                >
                    {menu ? (
                        <div className="">
                            <div className="mt-10">
                                <div className="flex justify-around">
                                    <div className="w-16 h-16 bg-red-50 rounded-full"></div>
                                    <div className="text-xs">
                                        <p className="">نمایشگاه احمدی</p>
                                        <p className="">کد نمایندگی : whh5476</p>
                                        <p className="mt-2">09104866595</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 overflow-auto h-screen">
                                {textMenu.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${
                                            item.active ? 'bg-gradient-to-l from-red-50' : ''
                                        } mt-4 flex mr-2 h-10 text-xs font-bold  cursor-pointer`}
                                    >
                                        <div
                                            className={`${
                                                item.active ? 'bg-red-50' : ''
                                            } -mr-3  w-1 h-10 absolute `}
                                        ></div>
                                        <span className="mt-2 mr-3">{item.icons}</span>
                                        <p className="mr-10 mt-3 ">{item.title}</p>
                                    </div>
                                ))}

                                <div className="flex text-xs lg:mt-24 md:mt-20 mt-10 mr-6 font-bold cursor-pointer">
                                    <span className="mt-2">
                                        <LoginIcon />
                                    </span>
                                    <p className="mr-8 mt-2 ">خروج از حساب کاربری</p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            }
        </div>
    );
};

export default index;

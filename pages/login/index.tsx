import React from 'react';
import { useRouter } from 'next/router';

import UserIcon from '@assets/svg/user-icon.svg';
import Close from '@assets/svg/close.svg';

const Auth = () => {
    const router = useRouter();

    const handleClick = () => {
        sessionStorage.setItem('name', 'login');
        router.push('/');
    };

    return (
        <div className="w-full h-screen bg-red-100 flex justify-center items-center">
            <div className="text-center">
                <div className="b flex justify-center">
                    <img className="w-20 h-20 flex justify-center" src="/images/logo.png" alt="" />
                </div>
                <div>
                    <p className="mt-2 text-sm font-bold">ماشین ایران</p>
                </div>
                <div className="bg-white w-80 h-72 mt-3 rounded-xl shadow-2xl p-5">
                    <div className="bg-red-50 h-12 w-auto rounded-full ">
                        <div className="flex justify-between px-3 ">
                            <div className="flex mt-3">
                                <UserIcon />
                                <div className="text-white text-xs mt-1 mr-2">ورود / عضویت</div>
                            </div>
                            <div className="bg-white mt-3 rounded-full w-6 flex justify-center">
                                <Close className="mt-1" />
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-12 text-xs">
                        <p>وارد کردن شماره همراه</p>
                        <input
                            type="text"
                            className="border border-red-50 rounded-full h-10 w-72 mt-5 placeholder-brown-50 text-left text-lg outline-none p-3"
                            placeholder="9 0"
                        />
                    </div>
                    <div className="flex justify-between mt-6 text-xs">
                        <button
                            onClick={handleClick}
                            className="bg-red-50 p-3 rounded-full text-white w-32"
                        >
                            تایید و ادامه{' '}
                        </button>
                        <button className="bg-white text-red-50 border border-red-50 p-3 rounded-full w-32">
                            بازگشت
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTimer } from 'react-timer-hook';

import UserIcon from '@assets/svg/user-icon.svg';
import Close from '@assets/svg/close.svg';

import ReactCodeInput from 'react-code-input';

const Auth: FC = () => {
    const [login, setLogin] = useState<string>('l1');
    const [times, setTimer] = useState<any>();
    const router = useRouter();

    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 60);
    // const { seconds, minutes } = useTimer({
    //     expiryTimestamp: time,
    //     onExpire: () => console.warn('onExpire called'),
    // });

    const handleClick = () => {
        if (login == 'l1') {
            setLogin('l2');
        } else if (login == 'l2') {
            setLogin('l3');
        } else if (login == 'l3') {
            sessionStorage.setItem('name', 'login');
            router.push('/');
        } else {
        }
    };

    const handleBack = () => {
        if (login == 'l3') {
            setLogin('l2');
        } else if (login == 'l2') {
            setLogin('l1');
        } else {
        }
    };

    return (
        <div className="w-full h-screen bg-red-100 flex justify-center items-center outline-none">
            <div className="text-center mb-28 ">
                <div className=" flex justify-center">
                    <img className="w-16 h-16 flex justify-center" src="/images/logo.png" alt="" />
                </div>
                <div>
                    <p className="mt-2 text-sm font-bold">ماشین ایران</p>
                </div>
                <div className="bg-white w-86 h-auto mt-2 rounded-xl p-5">
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

                    <div
                        className={` ${login == 'l1' ? 'block' : 'hidden'} text-right mt-8 text-xs`}
                    >
                        <p>وارد کردن شماره همراه</p>
                        <input
                            dir="ltr"
                            type="text"
                            className="border border-red-50 rounded-full h-10 w-76  mt-5 text-brown-50 text-lg outline-none p-3"
                            defaultValue="09"
                        />
                    </div>
                    <div
                        className={` ${
                            login == 'l2' ? 'block' : 'hidden'
                        } text-right mt-12 text-xs `}
                    >
                        <div className="flex justify-center ml-7">
                            <p className="">وارد کردن کد</p>
                            <p className="mr-3 text-gren-50">09104866595</p>
                        </div>

                        <div className="mt-5 flex justify-center" dir="ltr">
                            <ReactCodeInput
                                fields={4}
                                type="tel"
                                inputStyle={{
                                    textAlign: 'center',
                                    outline: 'none',
                                    margin: '4px',
                                    MozAppearance: 'textfield',
                                    width: '40px',
                                    borderRadius: '50%',
                                    font: 'bold',
                                    fontSize: '20px',
                                    height: '40px',
                                    backgroundColor: `white`,
                                    color: 'red',
                                    border: '2px solid #FF5800',
                                    fontWeight: 'bold',
                                }}
                                pattern="/^\d+$/"
                                name={'code'}
                                inputMode="numeric"
                            />
                        </div>
                        <div className="flex justify-center mt-3">
                            ارسال دوباره <span className="text-gren-50 mr-5">01:00</span>
                        </div>
                    </div>

                    <div
                        className={` ${
                            login == 'l3' ? 'block' : 'hidden'
                        } text-right mt-12 text-xs`}
                    >
                        <p>وارد کردن نام و نام خانوادگی</p>
                        <input
                            type="text"
                            className="border border-red-50 rounded-full h-10 w-70 mt-5 placeholder-brown-50 text-right text-xs outline-none p-3"
                            placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
                        />
                    </div>

                    <div className="flex justify-between mt-6 text-xs">
                        <button
                            onClick={handleClick}
                            className="bg-red-50 p-3 rounded-full text-white w-32 outline-none"
                            style={{ outline: 'none' }}
                        >
                            تایید و ادامه{' '}
                        </button>
                        <button
                            onClick={handleBack}
                            className="bg-white text-red-50 border border-red-50 p-3 rounded-full w-32 outline-none"
                            style={{ outline: 'none' }}
                        >
                            بازگشت
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

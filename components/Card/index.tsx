import React, { FC } from 'react';
import Filter from '@components/Filter';
import Modal from '@components/ui/Modal';
import FilterNav from '@components/FilterNav';
import { useRouter } from 'next/router';

import Heart from '@assets/svg/ci_heart-fill.svg';
import Share from '@assets/svg/ci_share.svg';
import Gallery from '@assets/svg/gallery.svg';
import Key from '@assets/svg/key.svg';

interface Props {
    data?: any[];
}

const index: FC<Props> = ({ data }) => {
    const [show, setShow] = React.useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <Modal show={show} handleClick={handleShow} />
            <div className="lg:block md:block lg:my-28 md:my-24 my-24">
                <FilterNav handleShow={handleShow} show={show} />
                <div className={`${show ? 'block' : 'hidden'} w-full flex justify-center`}>
                    <div className="h-10 w-1/2 flex ml-28 pt-5">
                        <div className="h-7 w-28 rounded-full border border-red-50 text-xs flex justify-between items-center">
                            <p className="mr-3">ایران خودرو</p>
                            <p className="ml-3 mt-1">X</p>
                        </div>
                        <div className="h-7 mr-3 w-28 rounded-full border border-red-50 text-xs flex justify-between items-center">
                            <p className="mr-3">قرقوش</p>
                            <p className="ml-3 mt-1">X</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  lg:-mt-20 md:-mt-20 -mt-16">
                <div className="flex justify-between px-5">
                    <div className={` lg:block md:block hidden ml-5 ${show ? '-mt-16' : ''}`}>
                        <Filter show={show} />
                    </div>
                    <div className="grid gap-6 2xl:grid-cols-3  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-5 ">
                        {data?.map((i, index) => (
                            <div
                                className="lg:w-auto md:w-auto w-auto lg:h-48 md:h-52 h-52 bg-white rounded-2xl  lg:ml-5 flex shadow-2xl"
                                key={index}
                            >
                                <div className="">
                                    <img
                                        src={i.img}
                                        className="lg:w-52 md:w-52 w-44 lg:h-48 md:h-52 h-52 object-cover rounded-r-xl "
                                        alt=""
                                    />
                                    <div className="flex justify-between -mt-10">
                                        <div className="flex">
                                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:mr-3 md:mr-3 mr-1">
                                                <Heart className="w-5 h-5" />
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-centerlg:mr-3 md:mr-3 mr-1">
                                                <Share className="w-5 h-5 mt-1" />
                                            </div>
                                        </div>
                                        {i.count && (
                                            <div className="flex lg:ml-2 md:ml-2 ml-1 bg-black-50 opacity-60 w-14 text-white rounded-lg">
                                                <Gallery />
                                                <p className="mr-2 mt-1">{i.count}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex mr-2 mt-4 lg:w-60 md:w-60 w-52 h-10 justify-between ">
                                        <div className="flex text-xs  items-center">
                                            <img
                                                className="w-10 h-10 object-cover"
                                                src={i.avatar}
                                                alt=""
                                            />
                                            <p className="mr-2">نمایشگاه {i.names}</p>
                                        </div>
                                        <div
                                            className={` ${i.key ? 'block' : 'hidden'} ${
                                                show ? 'ml-8' : '-mr-2'
                                            } flex justify-center items-center `}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center lg:ml-2 md:ml-2 ml-3">
                                                <Key className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        className="h-1 bg-black lg:w-52 md:w-52 w-52  absolute mr-5"
                                        style={{ marginTop: '11px' }}
                                    />
                                    <div
                                        className={` ${i.special ? 'block' : 'hidden'} ${
                                            show ? '-mr-10' : '-mr-2'
                                        } h-5 w-full flex justify-end mt-3`}
                                    >
                                        <div className="h-10 bg-red-50 w-7 rounded-b-full flex items-center justify-center text-white border border-black-50">
                                            <p className="text-xs">ویژه</p>
                                        </div>
                                    </div>
                                    <div className={` ${i.special ? '-mt-5' : 'mt-5'} -mr-2 `}>
                                        <div className="text-xs mr-7">
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-1`}>
                                                {i.car}
                                            </p>
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-1`}>
                                                مدل {i.model}
                                            </p>
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-1`}>
                                                کیلو متر {i.km}
                                            </p>
                                            <p className={`${i.button ? 'block' : 'hidden'}`}>
                                                {i.names}
                                            </p>
                                            <p className="mt-1">{i.city}</p>
                                            <p className="mt-1">{i.price}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            i.button ? 'block' : 'hidden'
                                        } flex justify-center text-white text-sm mt-5`}
                                    >
                                        <button className="bg-red-50 rounded-xl p-3 mt-7">
                                            ورود به نمایشگاه{' '}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;

import React, { FC } from 'react';
import Filter from '@components/Filter';
import Modal from '@components/ui/Modal';

import Heart from '@assets/svg/ci_heart-fill.svg';
import Share from '@assets/svg/ci_share.svg';
import Gallery from '@assets/svg/gallery.svg';
import Key from '@assets/svg/key.svg';
import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';
import Filter1 from '@assets/svg/filter1.svg';

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
            <div className="lg:block md:block ">
                <div className="mb-5 flex justify-between p-1 px-5">
                    <div className="flex justify-between  lg:w-72 md:w-64">
                        <div
                            onClick={handleShow}
                            className={`${
                                show ? 'mr-0' : 'lg:mr-10 md:mr-10 '
                            } bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center`}
                        >
                            <div
                                className={` bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white`}
                            >
                                <FilterIcon />
                            </div>
                            <p className="text-white text-xs mr-2">فیلتر</p>
                        </div>
                        <div className={`lg:block md:block hidden`}>
                            <div
                                onClick={handleShow}
                                className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white"
                            >
                                <Arrow
                                    className={`${
                                        show
                                            ? ' transform rotate-180 transition-all duration-1000'
                                            : '  transition-all duration-1000'
                                    }`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-36 bg-black-50 h-10 rounded-full lg:ml-12 md:ml-10  flex justify-between text-xs text-white items-center">
                        <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center">
                            <Filter1 className="w-6 h-6" />
                        </div>
                        <p>مرتب سازی</p>
                        <Arrow />
                    </div>
                </div>
            </div>
            <div className="flex justify-center z-0 ">
                <div className="flex justify-between px-5">
                    <div className={` lg:block md:block hidden ml-5`}>
                        <Filter show={show} />
                    </div>

                    <div className="grid gap-2 2xl:grid-cols-3 xg:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-5">
                        {data?.map((i, index) => (
                            <div
                                className="lg:w-auto md:w-auto w-auto lg:h-60 md:h-64 h-64 bg-white rounded-2xl  lg:ml-5 flex"
                                key={index}
                            >
                                <div className="">
                                    <img
                                        src={i.img}
                                        className="lg:w-52 md:w-60 lg:h-60 md:h-64 h-64 object-cover rounded-r-xl "
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
                                            className={` ${
                                                i.key ? 'block' : 'hidden'
                                            } flex justify-center items-center `}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center lg:ml-2 md:ml-2 ml-3">
                                                <Key className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        className="h-1 bg-black lg:w-60 md:w-60 w-52  absolute"
                                        style={{ marginTop: '11px' }}
                                    />
                                    <div
                                        className={` ${
                                            i.special ? 'block' : 'hidden'
                                        } -mr-2 h-5 w-full flex justify-end mt-3`}
                                    >
                                        <div className="h-10 bg-red-50 w-7 rounded-b-full flex items-center justify-center text-white border border-black-50">
                                            <p className="text-xs">ویژه</p>
                                        </div>
                                    </div>
                                    <div className={` ${i.special ? '-mt-5' : 'mt-5'} -mr-2`}>
                                        <div className="text-sm mr-7">
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-3`}>
                                                {i.car}
                                            </p>
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-3`}>
                                                مدل {i.model}
                                            </p>
                                            <p className={`${i.button ? 'hidden' : 'block'} mt-3`}>
                                                کیلو متر {i.km}
                                            </p>
                                            <p className={`${i.button ? 'block' : 'hidden'}`}>
                                                {i.names}
                                            </p>
                                            <p className="mt-3">{i.city}</p>
                                            <p className="mt-3">{i.price}</p>
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

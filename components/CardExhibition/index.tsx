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
    const router = useRouter();
    const [show, setShow] = React.useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    };
    return (
        <div>
            <Modal show={show} handleClick={handleShow} />
            <div className="lg:block md:block lg:my-28 md:my-24 my-20">
                <FilterNav handleShow={handleShow} show={show} />
                <div className={`${show ? 'block' : 'hidden'} w-full flex justify-center`}>
                    <div className="h-10 w-1/2 flex ml-28 pt-5">
                        <div className="h-7 mr-3 w-28 rounded-full border border-red-50 text-xs flex justify-between items-center">
                            <p className="mr-3">قرقوش</p>
                            <p className="ml-3 mt-1">X</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center z-0 lg:-mt-20 md:-mt-20 -mt-16">
                <div className="flex justify-between px-5">
                    <div className={` lg:block md:block hidden ml-5 ${show ? '-mt-16' : ''}`}>
                        <Filter show={show} />
                    </div>
                    <div
                        className={`grid gap-6 2xl:grid-cols-3  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-5 `}
                    >
                        {data?.map((i, index) => (
                            <div
                                className="lg:w-auto md:w-auto w-auto lg:h-52 md:h-52 h-52 bg-white rounded-2xl  lg:ml-5 flex shadow-2xl"
                                key={index}
                            >
                                <div className="w-auto">
                                    <img
                                        src={i.img}
                                        className={`${
                                            show ? 'lg:w-96 md:w-96 w-72' : 'lg:w-100 md:w-100 w-96'
                                        } h-32  object-cover rounded-t-2xl`}
                                        alt=""
                                    />
                                    <div className="h-1 bg-red-50 w-full"></div>
                                    <div>
                                        <div className="relative">
                                            <div className="absolute -mt-10 mr-3">
                                                <div
                                                    // onClick={() => {
                                                    //     router.push({
                                                    //         pathname: '/users',
                                                    //         query: { id: i.id },
                                                    //     });
                                                    // }}
                                                    className="bg-red-50 w-auto h-8 text-xs text-white rounded-full p-2 cursor-pointer"
                                                >
                                                    نمایشگاه ماشین ایران
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="absolute right-20 mt-3">
                                                    <div className="">{i.names}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-4 mr-5">
                                            <div className="w-14 h-12 rounded-full border-l-4 border-black-50 flex items-center">
                                                <div className="">
                                                    <img
                                                        className="w-12 h-12 ml-5 rounded-full"
                                                        src={i.img}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={`${
                                                    show ? 'w-72' : 'lg:w-96 md:w-96 w-64'
                                                } h-1 bg-black-50`}
                                            ></div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-center">
                                                <div className="absolute right-20 -mt-5">
                                                    <div className="">{i.city}</div>
                                                </div>
                                            </div>
                                        </div>
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

{
    /* <div className="">
<img
    src="/images/exhibition/car2.png"
    className="h-36 w-96 object-cover rounded-t-2xl"
    alt=""
/>
<div className="flex items-center mt-2">
    <div className="w-12 h-12 rounded-full border-l-4 border-black-50 flex items-center">
        <div className="w-10 h-10 bg-red-50 rounded-full"></div>
    </div>
    <div className="h-1 w-80 bg-black-50"></div>
</div>
</div> */
}

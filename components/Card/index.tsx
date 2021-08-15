import React, { FC } from 'react';
import Heart from '@assets/svg/ci_heart-fill.svg';
import Share from '@assets/svg/ci_share.svg';
import Star from '@assets/svg/star.svg';
import Key from '@assets/svg/key.svg';

interface Props {
    data: any[];
}

const index: FC<Props> = ({ data }) => {
    return (
        <div className="grid gap-3 lg:grid-cols-3 md:grid-col-2 sm:grid-cols-1 px-5 py-8">
            {data.map((i) => (
                <div className="w-97 h-64 bg-white rounded-2xl  ml-5 flex">
                    <div>
                        <img src={i.img} className="w-44 h-64 object-cover rounded-r-xl" alt="" />
                        <div className="absolute flex -mt-10">
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center mr-3">
                                <Heart className="w-5 h-5" />
                            </div>
                            <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center mr-3">
                                <Share className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex mr-2 mt-3 w-60 h-10 justify-between ">
                            <div className="flex text-xs  items-center">
                                <img src="/images/avatar.png" alt="" />
                                <p className="mr-2">نمایشگاه {i.show}</p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center ml-2">
                                    <Key className="w-5 h-5" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center ml-2">
                                    <Star className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <hr className=" mt-3 bg-black w-60 mr-1" style={{ height: '2px' }} />
                        <div className="mt-6">
                            <div className="text-sm mr-7">
                                <p className="mt-3">{i.name}</p>
                                <p className="mt-3">مدل {i.model}</p>
                                <p className="mt-3">کیلو متر {i.km}</p>
                                <p className="mt-3">{i.city}</p>
                                <p className="mt-3">{i.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default index;

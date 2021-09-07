import React, { FC } from 'react';
import SaveIcon from '@assets/svg/save.svg';
import KeyIcon from '@assets/svg/key.svg';
import DeleteIcon from '@assets/svg/delete.svg';

interface Props {
    data?: any[];
}

const index: FC<Props> = ({ data }) => {
    return (
        <div>
            <div className="lg:block md:block hidden">
                <div className="bg-white w-full  mt-32 flex justify-center">
                    <div className="w-2/3 h-16 shadow-2xl rounded-lg flex justify-around">
                        <div className="w-2/3 flex justify-around text-xs items-center">
                            <div>
                                <p className="text-red-50">منتشر شده</p>
                                <div
                                    style={{ height: '1px' }}
                                    className="w-20 bg-red-50 absolute mt-2 -mr-3"
                                />
                            </div>
                            <div className="h-16 bg-red-300 w-0.5"></div>
                            <div>فروخته شده</div>
                            <div className="h-16 bg-red-300 w-0.5"></div>
                            <div>در انتطار تایید</div>
                            <div className="h-16 bg-red-300 w-0.5"></div>
                            <div>صف انتشار</div>
                            <div className="h-16 bg-red-300 w-0.5"></div>
                            <div>منتخب</div>
                            <div className="h-16 bg-red-300 w-0.5"></div>
                            <div>حذف تعلیق</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-16 md:mt-16 mt-28 w-full flex justify-center ">
                <div className="grid gap-6 2xl:grid-cols-2  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-5 md:px-5 px-3">
                    {data?.map((item: any, index: any) => (
                        <div className="w-auto h-60 shadow-xl rounded-xl">
                            <div className="w-auto h-48 bg-white rounded-xl">
                                <div className="flex shadow-lg rounded-xl">
                                    <div className=" absolute flex mt-3 mr-3">
                                        <div className="h-12 w-12 bg-gren-50 rounded-full mt-2 flex justify-center items-center z-5">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={item.avatar}
                                                alt=""
                                            />
                                        </div>
                                        <div className="bg-gren-50 h-7 w-32 mt-5 text-white text-xs flex justify-center items-center rounded-l-full absolute mr-5">
                                            <p className="mr-5">نمایشگاه 011</p>
                                        </div>
                                    </div>
                                    <img
                                        className="w-48 h-48 object-cover rounded-r-xl"
                                        src={item.img}
                                        alt=""
                                    />
                                    <div className="mt-3 lg:w-80 md:w-80 w-52 ">
                                        <div className="lg:block md:block hidden">
                                            <div className="flex justify-between h-8 px-5">
                                                <div className="flex justify-around w-48 text-xs opacity-60 items-center">
                                                    <div className="border border-gray-400 p-1 rounded-lg">
                                                        ویرایش
                                                    </div>
                                                    <div className="border border-gray-400 p-1 rounded-lg">
                                                        تمدید
                                                    </div>
                                                    <div className="border border-gray-400 p-1 rounded-lg">
                                                        بروزرسانی
                                                    </div>
                                                </div>
                                                <div className="w-8 h-8 mr-1 bg-gren-50 rounded-full flex items-center justify-center">
                                                    <KeyIcon fill="white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:hidden md:hidden block">
                                            <div className="flex justify-end">
                                                <div className="w-8 h-8 mr-1 bg-gren-50 rounded-full flex items-center justify-center">
                                                    <KeyIcon fill="white" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mt-3" />
                                        <div className="flex bg-red-500 justify-end">
                                            <div className="absolute lg:ml-4">
                                                <p className="text-white absolute text-xs mr-2 mt-1">
                                                    ویژه
                                                </p>
                                                <SaveIcon className="w-10 h-10" />
                                            </div>
                                        </div>
                                        <div className="mt-3 lg:mr-4 md:mr-3 -mr-2">
                                            <div className={`  -mr-2 `}>
                                                <div className="text-xs mr-7">
                                                    <p className={` mt-1`}>{item.car}</p>
                                                    <p className={` mt-1`}>مدل {item.model}</p>
                                                    <p className={` mt-1`}>کیلو متر {item.km}</p>
                                                    <p className="mt-1">{item.city}</p>
                                                    <p className="mt-1">{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-5 mt-4 text-xs">
                                <div>بازدید امروز : {item.visit} نفر</div>
                                <div>بازدید کلی : {item.visit_all} نفر</div>
                                <div>اتمام آگهی : {item.end_day} روز</div>
                                <div className="bg-red-600 w-7 h-7 flex justify-center items-center rounded-lg">
                                    <DeleteIcon className="w-5 h-5" fill="white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default index;

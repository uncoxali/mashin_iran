import React from 'react';
import Layout from '@components/ui/Layout';
import { useRouter } from 'next/router';

import Heart from '@assets/svg/ci_heart-fill.svg';
import Share from '@assets/svg/ci_share.svg';
import Gallery from '@assets/svg/gallery.svg';
import Key from '@assets/svg/key.svg';

export default function index() {
    const router = useRouter();

    return (
        <Layout>
            <div className="bg-white w-full  mt-32 flex justify-center">
                <div className="w-2/3 h-16 shadow-2xl rounded-lg"></div>
            </div>
            <div className="mt-16 w-full flex justify-center ">
                <div className="grid gap-6 2xl:grid-cols-2  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-5">
                    <div className="w-auto h-60 shadow-xl rounded-xl">
                        <div className="w-auto h-48 bg-white rounded-xl">
                            <div className="flex shadow-lg rounded-xl">
                                <img
                                    className="w-48 h-48 object-cover rounded-r-xl"
                                    src="/images/car.png"
                                    alt=""
                                />
                                <div className="mt-3 w-80 ">
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
                                        <div>key</div>
                                    </div>
                                    <hr className="mt-3" />
                                    <div className="mt-3">
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-5 mt-2">
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                        </div>
                    </div>
                    <div className="w-auto h-60 shadow-xl rounded-xl">
                        <div className="w-auto h-48 bg-white rounded-xl">
                            <div className="flex shadow-lg rounded-xl">
                                <img
                                    className="w-48 h-48 object-cover rounded-r-xl"
                                    src="/images/car.png"
                                    alt=""
                                />
                                <div className="mt-3 w-80 ">
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
                                        <div>key</div>
                                    </div>
                                    <hr className="mt-3" />
                                    <div className="mt-3">
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                        <p>هایما</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-5 mt-2">
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                            <div>hello</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

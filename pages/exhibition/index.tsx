import React from 'react';
import Card from '@components/Card';
import Car from '@components/Car';
import Layout from '@components/ui/Layout';
import FilterIcon from '@assets/svg/filter.svg';
import Arrow from '@assets/svg/arrow.svg';

const exhibition = [
    {
        img: '/images/image/image2.png',
        title: 'نمایشگاه ایران',
        button: true,
        names: 'علی محمدی',
        city: 'زنجان',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image2.png',
        title: 'نمایشگاه کاووس',
        button: true,
        names: ' سید احمدی',
        city: 'مازندران',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image3.png',
        title: 'نمایشگاه تندر ',
        button: true,
        names: 'دکتر میرکمالی',
        city: 'مازندران',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image4.png',
        title: 'اتو گالری ربی',
        button: true,
        names: 'رضای',
        city: 'اردبیل',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image5.png',
        title: 'اتو گالری محمدی',
        button: true,
        names: 'عسگری',
        city: 'تهران',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image6.png',
        title: 'اتو گالری احمدی',
        button: true,
        names: 'دایی',
        city: 'کرج',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image7.png',
        title: 'نمایشگاه حسینی',
        button: true,
        names: 'رجبی',
        city: 'ماهدشت',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image8.png',
        title: 'نمایشگاه محسن',
        button: true,
        names: 'عبدی',
        city: 'ورامین',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
    {
        img: '/images/image/image9.png',
        title: 'نمایشگاه علی',
        button: true,
        names: 'امیری',
        city: 'سهرورد',
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
];

export default function index() {
    return (
        <Layout>
            <div className="w-full h-auto bg-red-100">
                <div className="py-28 lg:mt-0 md:mt-0 mt-14">
                    <div className="lg:block md:block hidden">
                        <div className="mb-5 flex justify-between p-1 px-5">
                            <div className="flex justify-between  w-72">
                                <div className="bg-black-50 w-24 h-10 rounded-full  border-2 border-white flex justify-start items-center">
                                    <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                        <FilterIcon />
                                    </div>
                                    <p className="text-white text-xs mr-2">فیلتر</p>
                                </div>
                                <div className="bg-black-50 w-10 h-10 rounded-full flex justify-center items-center border-2 border-white">
                                    <Arrow />
                                </div>
                            </div>
                            <div className="ml-8">
                                <div className="bg-black-50 w-60 h-10 rounded-full border-2 border-white flex items-center justify-end text-white text-xs">
                                    <p className="ml-5">مرتب سازی</p>
                                    <div className="w-32 h-10 border-2 border-white rounded-full items-center justify-between flex mr-2">
                                        <p className="mr-2">جدید ترین ها</p>
                                        <Arrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card data={exhibition} />
                </div>
            </div>
        </Layout>
    );
}

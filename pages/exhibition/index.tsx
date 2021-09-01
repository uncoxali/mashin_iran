import React from 'react';
import Card from '@components/Card';
import Car from '@components/Car';
import Filter from '@components/Filter';

import FilterNav from '@components/FilterNav';
import Layout from '@components/ui/Layout';
import FilterIcon from '@assets/svg/filter.svg';
import Arrow from '@assets/svg/arrow.svg';
import SearchIcon from '@assets/svg/search1.svg';

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
    const [show, setShow] = React.useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    };
    return (
        <Layout>
            <div>
                <div className="py-28 lg:mt-0 md:mt-0 mt-14 h-auto bg-white lg:px-16 flex justify-center">
                    <div className="top-0 bg-white h-24 w-full fixed my-24 shadow-lg">
                        <div className="flex justify-center items-center w-full h-24">
                            <div className="bg-gray-200 h-10 rounded-full w-1/3 flex justify-between">
                                <input
                                    type="text"
                                    className=" bg-transparent w-3/4 outline-none mr-5 placeholder-black-50 text-center text-sm"
                                    placeholder="جستجو کنید"
                                />
                                <div className="bg-red-50 h-10 w-10 rounded-full border-4 border-white flex justify-center items-center">
                                    <SearchIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FilterNav handleShow={handleShow} show={show} />
                <Filter show={show} />
            </div>
        </Layout>
    );
}

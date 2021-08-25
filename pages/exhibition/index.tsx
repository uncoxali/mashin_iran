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
            <div className="py-28 lg:mt-0 md:mt-0 mt-14 h-auto bg-red-100 lg:px-16">
                <Card data={exhibition} />
            </div>
        </Layout>
    );
}

import React from 'react';
import Card from '@components/Card';
const card = [
    { 'title': 'نمایشگاه', id: 1 },
    { 'title': 'جستجوی پیشرفته', id: 2 },
    { 'title': 'افزودن اگهی', id: 3 },
    { 'title': 'صفحه ی شما', id: 4 },
];
const car = [
    {
        img: '/images/car.png',
        model: 2021,
        km: 53,
        city: 'زنجان',
        price: '45,000,000',
        show: 'سید',
        name: 'رونیز',
    },
    {
        img: '/images/car3.png',
        model: 2010,
        km: 100,
        city: 'بابل',
        price: '5,000,000',
        show: 'احمدی',
        name: 'پژو',
    },
    {
        img: '/images/car1.png',
        model: 2015,
        km: 5000,
        city: 'سهرورد',
        price: '85,000,000',
        show: 'محمدی',
        name: 'پراید',
    },
    {
        img: '/images/car3.png',
        model: 2000,
        km: 300,
        city: 'تهران',
        price: '555,000,000',
        show: 'سید',
        name: 'بنز',
    },
    {
        img: '/images/car1.png',
        model: 2020,
        km: 565,
        city: 'مازندران',
        price: '412,000,000',
        show: 'رضای',
        name: 'سمند',
    },
    {
        img: '/images/car3.png',
        model: 2019,
        km: 64185,
        city: 'رشت',
        price: '445,000,000',
        show: 'محمدی',
        name: 'تیبا',
    },
    {
        img: '/images/car2.png',
        model: 2014,
        km: 15153,
        city: 'کرج',
        price: '845,000,000',
        show: 'احمدی',
        name: 'نیسان',
    },
    {
        img: '/images/car3.png',
        model: 2017,
        km: 57873,
        city: 'قیدار',
        price: '945,000,000',
        show: 'علی',
        name: 'BMW',
    },
    {
        img: '/images/car2.png',
        model: 2012,
        km: 5123,
        city: 'قیدار',
        price: '345,000,000',
        show: 'محمد',
        name: 'پراید 131',
    },
];

export default function index() {
    return (
        <div>
            <div className="relative px-36">
                <div className="">
                    <div className=" mt-32 flex justify-center items-center">
                        {card.map((item) => (
                            <div className="" key={item.id}>
                                <div className="bg-green-500 w-48 h-24 rounded-2xl flex justify-center items-center mr-10 text-sm">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Card data={car} />
            </div>
        </div>
    );
}

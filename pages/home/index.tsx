import React from 'react';
import Card from '@components/Card';
const card = [
    { 'title': 'نمایشگاه', img: '/images/car1.png', id: 1 },
    { 'title': 'جستجوی پیشرفته', img: '/images/car2.png', id: 2 },
    { 'title': 'افزودن اگهی', img: '/images/car3.png', id: 3 },
    { 'title': 'صفحه ی شما', img: '/images/car1.png', id: 4 },
];
const car = [
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19021/mclaren-765lt-spider-2022-thumb.jpg',
        model: 2021,
        km: 53,
        city: 'زنجان',
        price: '45,000,000',
        names: 'عبدی',
        car: ' McLaren 765LT spider',
        special: true,
        key: false,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/bmw.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19017/ferrari-sf90-stradale-by-novitec-2021-thumb.jpg',
        model: 2010,
        km: 100,
        city: 'بابل',
        price: '5,000,000',
        names: 'احمدی',
        car: ' Ferrari SF90 ',
        special: false,
        key: true,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/bentley.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18999/ferrari-f8-tributo-by-novitec-n-largo-2021-thumb.jpg',
        model: 2015,
        km: 5000,
        city: 'سهرورد',
        price: '85,000,000',
        names: 'محمدی',
        car: ' Ferrari F8',
        special: true,
        key: false,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/alfa-romeo.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19011/aston-martin-valhalla-2022-thumb.jpg',
        model: 2000,
        km: 300,
        city: 'تهران',
        price: '555,000,000',
        names: 'سید',
        car: 'Porsche',
        special: false,
        key: true,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/abarth.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18962/rml-short-wheelbase-2022-thumb.jpg',
        model: 2020,
        km: 565,
        city: 'مازندران',
        price: '412,000,000',
        names: 'رضای',
        car: 'RML Short Wheelbase',
        special: true,
        key: false,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/ferrari.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/18961/porsche-911-992-gt3-with-touring-package-2021-thumb.jpg',
        model: 2022,
        km: 64185,
        city: 'رشت',
        price: '445,000,000',
        names: 'خلجی',
        car: 'Aston Martin Valhalla',
        special: true,
        key: true,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/volkswagen.jpg',
    },
];

export default function index() {
    return (
        <div>
            <div className="relative lg:px-36 md:px-32">
                <div className="">
                    <div className=" mt-32 flex justify-center items-center">
                        {card.map((item) => (
                            <div className="" key={item.id}>
                                <div className="lg:block md:block hidden ">
                                    <div className="bg-black-50 rounded-2xl flex justify-center items-center mr-10 text-sm">
                                        <img
                                            className="opacity-25 w-48 h-24 object-cover"
                                            src={item.img}
                                            alt=""
                                        />
                                        <span className="absolute text-white">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:mt-20 md:mt-16 mt-4">
                <Card data={car} />
            </div>
        </div>
    );
}

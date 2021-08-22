import React from 'react';
import Card from '@components/Card';
import Arrow from '@assets/svg/arrow.svg';
import FilterIcon from '@assets/svg/filter.svg';

const cars = [
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
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19043/hyundai-kona-n-usa-version-2022-thumb.jpg',
        model: 2018,
        km: 64185,
        city: 'تبریز',
        price: '445,000,885',
        names: 'رستمی',
        car: 'Aston Martin Valhalla',
        special: true,
        key: true,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/koenigsegg.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19046/ford-bronco-riptide-concept-2021-thumb.jpg',
        model: 2019,
        km: 64185,
        city: 'اصفحان',
        price: '445,475,000',
        names: 'آقای',
        car: 'Aston Martin Valhalla',
        special: false,
        key: false,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/mercedes-benz.jpg',
    },
    {
        img: 'https://www.mad4wheels.com/img/free-car-images/desktop/19044/hyundai-santa-fe-xrt-usa-version-2022-thumb.jpg',
        model: 2014,
        km: 64185,
        city: 'تهران',
        price: '445,120,000',
        names: 'فاطمی',
        car: 'Aston Martin Valhalla',
        special: false,
        key: false,
        avatar: 'https://www.mad4wheels.com/img/car-brand-logo/desktop/lamborghini.jpg',
    },
];

export default function index() {
    return (
        <div>
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
                <Card data={cars} />
            </div>
        </div>
    );
}

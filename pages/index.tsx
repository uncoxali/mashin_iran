import { login } from '@store/reducers/user';
import router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '@components/Header';

import Home from './home';
import Login from './login';

const Index = () => {
    useEffect(() => {
        if (sessionStorage.length === 0) {
            router.push('/login');
        }
    });

    return (
        <div className=" w-full h-auto bg-red-100">
            <div>
                <Header />
            </div>
            <div className="flex justify-center ">
                <Home />
            </div>
        </div>
    );
};

export default Index;

import { login } from '@store/reducers/user';
import router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './home';
import Login from './login';

const Index = () => {
    useEffect(() => {
        if (sessionStorage.length === 0) {
            router.push('/login');
        }
    });

    return (
        <div className="w-full h-screen bg-red-100 flex justify-center items-center">
            <Home />
        </div>
    );
};

export default Index;
